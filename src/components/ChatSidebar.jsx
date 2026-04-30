import { useState, useRef, useEffect } from 'react'

const SUGGESTED = [
  "What has Jay built?",
  "What are the rates?",
  "Book a call",
  "Tell me about ReggieAI",
  "What's Jay's background?",
]

const CALENDLY_RE = /(https:\/\/calendly\.com\/[^\s]+)/g

function renderAssistant(text) {
  const parts = text.split(CALENDLY_RE)
  return parts.map((part, i) =>
    CALENDLY_RE.test(part)
      ? <a key={i} href={part} target="_blank" rel="noreferrer">{part}</a>
      : part
  )
}

export default function ChatSidebar() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi — I'm Jay's AI assistant. Ask me about his work, engagement rates, or how to book a call.",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  async function send(text) {
    const userText = (text ?? input).trim()
    if (!userText || loading) return

    setInput('')
    const next = [...messages, { role: 'user', content: userText }]
    setMessages(next)
    setLoading(true)

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
      const res = await fetch(`${supabaseUrl}/functions/v1/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'apikey': supabaseAnonKey,
        },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()
      setMessages([...next, { role: 'assistant', content: data.content }])
    } catch {
      setMessages([...next, {
        role: 'assistant',
        content: 'Something went wrong. Reach out directly at jay@revuitysys.com',
      }])
    } finally {
      setLoading(false)
    }
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      <button
        className="chat-toggle"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      <div className={`chat-panel${open ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Chat with Jay's AI assistant">
        <div className="chat-header">
          <div>
            <div className="chat-header-title">Ask about Jay</div>
            <div className="chat-header-sub">AI assistant · Portfolio knowledge base</div>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="chat-messages">
          {messages.length === 0 && !loading && (
            <div className="chat-empty">
              <div className="chat-empty-label">Suggested questions</div>
              <div className="chat-prompts">
                {SUGGESTED.map(p => (
                  <button key={p} className="chat-prompt-btn" onClick={() => send(p)}>
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m, i) => (
            <div key={i} className={`chat-bubble ${m.role}`}>
              {m.role === 'assistant' ? renderAssistant(m.content) : m.content}
            </div>
          ))}

          {loading && (
            <div className="chat-typing">
              <span /><span /><span />
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <div className="chat-input-row">
          <textarea
            ref={inputRef}
            className="chat-input"
            placeholder="Ask anything about Jay..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            rows={1}
          />
          <button
            className="chat-send"
            onClick={() => send()}
            disabled={!input.trim() || loading}
            aria-label="Send"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
