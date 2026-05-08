import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import '../casestudy.css'

function ArticleNav() {
  return (
    <nav>
      <Link to="/" className="nav-back">← Back to Portfolio</Link>
      <div className="nav-tag">Article · Agentic Systems</div>
    </nav>
  )
}

function ArticleHero() {
  return (
    <section className="article-hero">
      <div className="article-hero-inner">
        <div className="article-eyebrow">Article · Agentic Systems · May 2026</div>
        <h1 className="article-title">
          The Agentic Trap: Why Multi-Agent Systems Break Before They Ship
        </h1>
        <div className="article-abstract">
          Multi-agent AI systems represent a genuine architectural advance — and one of the fastest
          routes to expensive, invisible production failure in enterprise AI. The gap between a
          functional agentic demo and a production-grade agentic system is wider than in any other
          AI architecture pattern, because agentic systems fail in compounding ways that are nearly
          impossible to surface in controlled evaluation. This paper identifies five architectural
          failure patterns specific to agentic systems, examines why the standard build sequence
          for multi-agent development produces them, and proposes a sequenced approach to agentic
          architecture that closes the gap before it becomes a production incident.
        </div>
        <div className="article-meta-bar">
          <div className="article-meta-item"><div className="article-meta-label">Author</div><div className="article-meta-val">Jay Burgess</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Published</div><div className="article-meta-val">May 2026</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Category</div><div className="article-meta-val">Agentic Systems</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Read Time</div><div className="article-meta-val">9 min</div></div>
        </div>
        <div className="article-keywords">
          {['Agentic AI', 'Multi-Agent Systems', 'Orchestration', 'Production Architecture', 'Tool Use', 'AI Engineering'].map(k => (
            <span key={k} className="article-keyword">{k}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

const FAILURE_PATTERNS = [
  {
    label: 'Failure Pattern 01',
    title: 'Orchestration Collapse Under Real Inputs',
    body: 'Agentic demos run on curated inputs where the intended tool call sequence is predictable and the agent\'s decision-making looks coherent. Under real-world inputs — ambiguous, malformed, or outside the anticipated distribution — orchestration breaks down. Agents call tools in the wrong order, re-attempt failed operations without diagnostic reasoning, or enter decision loops that exhaust context budgets without producing output. Orchestration logic that works in scripted demos is frequently not robust enough to handle the variance of real user behavior.',
  },
  {
    label: 'Failure Pattern 02',
    title: 'Tool Proliferation Without Prioritization',
    body: 'As agent capability requirements are discovered, teams add tools. This is rational at each individual decision, but the cumulative effect is an agent that has too many tools with overlapping functionality and no clear selection logic. At inference time, the agent\'s tool selection becomes unreliable — choosing between semantically similar tools in ways that are unpredictable and difficult to diagnose. Every tool added to a production agent must have an exclusive capability boundary and a documented selection signal. Most don\'t.',
  },
  {
    label: 'Failure Pattern 03',
    title: 'Context Budget Exhaustion',
    body: 'Multi-step agentic tasks accumulate context across tool calls, intermediate reasoning, and retrieved content. In demos, tasks are short enough that context accumulation is not a constraint. In production, agents running multi-step workflows against real-world data regularly approach or exceed context limits — producing truncated reasoning, tool call failures, and output degradation that is invisible at the application layer until a user encounters it. Context budget management is not optional in production agentic systems — it is a core architectural requirement.',
  },
  {
    label: 'Failure Pattern 04',
    title: 'Silent Failure Propagation',
    body: 'When a step in an agentic pipeline fails, a well-designed system surfaces the failure explicitly and halts or escalates. Most production agentic systems are not well-designed in this dimension — they allow failures to propagate silently, with downstream agents operating on corrupted or missing inputs. The outputs of these systems appear structurally complete while being factually wrong. Silent failure propagation is the most dangerous agentic failure mode because it produces confident, well-formatted outputs that are incorrect — and systems without explicit failure handling are architecturally incapable of distinguishing success from silent failure.',
  },
  {
    label: 'Failure Pattern 05',
    title: 'Evaluation Infrastructure Absence',
    body: 'Single-model systems can be evaluated against a fixed set of inputs and expected outputs. Agentic systems cannot — their behavior is path-dependent, and the number of valid execution paths for a given task is combinatorially large. Teams that build agentic systems without purpose-built evaluation infrastructure do not know whether their system is working correctly — they know whether the last demo worked. Production agentic systems require evaluation frameworks that sample across the execution path space, not just the output space. This infrastructure is routinely treated as an afterthought and consistently costs more to retrofit than to build alongside the system.',
  },
]

function FailureCards() {
  const [open, setOpen] = useState(null)
  return (
    <div className="failure-cards">
      {FAILURE_PATTERNS.map((c, i) => (
        <div
          key={i}
          className={`failure-card${open === i ? ' open' : ''}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="failure-card-header">
            <div>
              <div className="failure-card-label">{c.label}</div>
              <div className="failure-card-title">{c.title}</div>
            </div>
            <div className="failure-card-toggle">+</div>
          </div>
          <div className="failure-card-body">{c.body}</div>
        </div>
      ))}
    </div>
  )
}

const SEQUENCE_ROWS = [
  { stage: 'Wrong Order', steps: ['Agent UI', 'Tool Connections', 'Orchestration Logic', 'Evaluation (maybe)', 'Deploy'], wrong: true },
  { stage: 'Right Order', steps: ['Task Boundary Definition', 'Tool Interface Design', 'Single-Agent Validation', 'Orchestration Layer', 'Evaluation Framework', 'Deploy'], wrong: false },
]

function SequenceDiagram() {
  return (
    <div className="article-diagram">
      <div className="article-diagram-title">Fig. 1 — Standard Build Sequence vs. Production-Ready Sequence</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--rule)' }}>
        {SEQUENCE_ROWS.map((row) => (
          <div key={row.stage} style={{ background: 'var(--black)', padding: '1.25rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: row.wrong ? 'rgba(232,98,26,0.5)' : 'var(--orange)', flexShrink: 0, width: '90px', paddingTop: '0.3rem' }}>
              {row.stage}
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', flex: 1 }}>
              {row.steps.map((s, i) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div style={{
                    padding: '0.35rem 0.7rem',
                    border: `1px solid ${row.wrong ? 'var(--rule2)' : 'var(--orange-border)'}`,
                    background: row.wrong ? 'transparent' : 'var(--orange-glow)',
                    fontSize: '0.75rem',
                    color: row.wrong ? 'var(--dim)' : 'var(--mid)',
                  }}>
                    {s}
                  </div>
                  {i < row.steps.length - 1 && (
                    <div style={{ color: 'var(--dim)', fontSize: '0.7rem' }}>→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: '0.75rem', color: 'var(--dim)', fontStyle: 'italic', marginTop: '0.75rem' }}>
        The wrong order builds the interface before defining the task boundary. The failure modes are architectural from the first commit.
      </div>
    </div>
  )
}

function ArticleBody() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal()
  return (
    <div className="article-body">
      <div className="article-section reveal" ref={r1}>
        <div className="article-section-num">§ 1</div>
        <h2>What the Agentic Trap Is</h2>
        <div className="article-prose">
          <p>The agentic trap is not a capability problem. Modern agentic frameworks — multi-agent orchestration systems, tool-use APIs, planning-and-execution architectures — are genuinely capable. The trap is architectural: the conditions under which agentic systems are built and evaluated bear almost no resemblance to the conditions under which they must operate in production, and the gap is significantly wider for agentic systems than for any other AI architecture pattern.</p>
          <p>A single-model AI system fails in predictable, bounded ways. A retrieval system either retrieves or it doesn't. A classification model either classifies or it doesn't. The failure surface is defined and evaluable. An agentic system — one that plans, routes, calls tools, interprets results, and takes multi-step actions — fails in compounding ways across every decision point in its execution path. A tool called at step three with a malformed input produces corrupted state that downstream agents in step seven operate on with full confidence. The output looks right. The process was wrong at step three.</p>
          <p>This is what makes the agentic trap so expensive: it produces confident-looking failures at production scale, in systems that worked correctly in the demos that justified the production investment. The organizations that fall into it are not making poor technology choices. They are making good technology choices with insufficient architectural rigor — and discovering the rigor gap after the system is load-bearing.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r2}>
        <div className="article-section-num">§ 2</div>
        <h2>Why Agentic Demos Lie</h2>
        <div className="article-prose">
          <p>Agentic demos succeed for three structural reasons that disappear in production. <strong>Scripted inputs:</strong> demos are run with inputs the agent was built to handle. The tool call sequence looks logical because it was designed around those inputs. Real user inputs introduce ambiguity, underspecification, and edge cases that the agent was not designed to navigate — and the orchestration logic that looked robust in the demo reveals its brittleness immediately.</p>
          <p><strong>Short task horizons:</strong> demo tasks complete in two to five steps. Production tasks frequently require ten to twenty. Context accumulation, tool call chaining, and intermediate state management are all manageable at five steps. At twenty, they become the primary engineering challenge — and they are entirely invisible in five-step demos. Organizations that evaluate agentic systems on five-step tasks and deploy them against twenty-step workflows are systematically underestimating their architectural requirements.</p>
          <p><strong>Invisible failure handling:</strong> demos do not fail, by design. The paths that lead to failure are not explored during evaluation. In production, those paths are discovered by users — and in agentic systems, failures are not always visible. An agent that encounters a tool failure and continues processing rather than surfacing the error produces outputs that appear complete while being built on corrupted intermediate state. The demo worked. The failure handling was never tested. Production discovered both facts simultaneously.</p>
        </div>
        <div className="article-pullquote">
          <p>"An agentic system that works in a demo is a system that has not yet encountered the conditions under which it will fail. In production, those conditions arrive on day one."</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r3}>
        <div className="article-section-num">§ 3</div>
        <h2>Five Architectural Failure Patterns</h2>
        <div className="article-prose">
          <p>The following five failure patterns account for the majority of agentic production system failures. They are architectural rather than model-level problems — which means they are diagnosable and addressable before deployment, given the right evaluation framework. Select any card to expand the full pattern description.</p>
        </div>
        <FailureCards />
      </div>

      <div className="article-section reveal" ref={r4}>
        <div className="article-section-num">§ 4</div>
        <h2>The Build Sequence Problem</h2>
        <div className="article-prose">
          <p>Most agentic systems are built in the wrong order. The standard development sequence begins with the interface — the agent persona, the conversation design, the user-facing behavior. It then connects tools. Then assembles orchestration logic to coordinate them. Evaluation, if it occurs at all, happens at the end as a pre-deployment check. This sequence produces systems that are architecturally fragile from the first commit, because the fundamental questions of task boundary, tool selection logic, and failure handling are answered implicitly by implementation decisions rather than explicitly by architectural decisions.</p>
        </div>
        <SequenceDiagram />
        <div className="article-prose" style={{ marginTop: '1.5rem' }}>
          <p>The right order inverts the standard sequence. It begins with task boundary definition — a precise specification of what the agent is responsible for, what inputs it will receive, and what outputs constitute success and failure. Tool interface design follows: for each tool the agent will use, what is the exclusive capability it provides, what are the valid input forms, and what does failure look like. Single-agent validation then verifies that each agent in the system performs its isolated function correctly before orchestration is introduced.</p>
          <p>Only after isolated agent validation is the orchestration layer built — because the orchestration layer is only as reliable as the agents it coordinates, and an orchestrator built on top of unvalidated agents inherits every latent failure in each of them. The evaluation framework is built alongside the orchestration layer, not after it. It is the mechanism through which orchestration quality is measurable — and systems deployed without it are not evaluated systems. They are guessed systems.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r5}>
        <div className="article-section-num">§ 5</div>
        <h2>What Production-Ready Agentic Systems Require</h2>
        <div className="article-prose">
          <p>Four requirements distinguish production-ready agentic systems from demo-ready ones. They are not optional enhancements — they are the baseline architectural requirements for a system that will operate reliably under real-world conditions.</p>
          <p><strong>Explicit failure handling at every decision point.</strong> Every tool call must have a documented failure mode and a specified agent behavior on failure. Retry with backoff? Escalate to a human review queue? Surface the failure to the user? The choice is less important than the fact of making it explicitly — because agents without explicit failure handling make the choice implicitly, and the implicit choice is almost always to continue processing on corrupted state.</p>
          <p><strong>Context budget management as a first-class architectural concern.</strong> For every agentic workflow, the maximum context accumulation across all steps must be estimated before deployment. If that estimate approaches the model's context limit under realistic inputs, the workflow must be restructured — through context compression, conversation summarization, or task decomposition — before production deployment. Context budget failure is not graceful. It is silent truncation of agent reasoning at exactly the moment when the task is complex enough to require it.</p>
          <p><strong>Tool selection logic that is exclusive and documented.</strong> Every tool in a production agent's tool set must have an exclusive capability — something it can do that no other tool in the set does. If two tools overlap in capability, the agent's selection between them is arbitrary. Document the selection signal for every tool, and test that the agent's actual selection behavior matches the documented signal under adversarial inputs.</p>
          <p><strong>Path-sampled evaluation, not output-sampled evaluation.</strong> Evaluating an agentic system by inspecting its outputs is insufficient. The same output can be produced by correct execution and by a multi-step failure path that happened to reach the right answer by accident. Evaluation must sample execution paths — what tools were called, in what order, with what inputs — not just whether the final output was correct. Organizations that do not have the infrastructure to evaluate at the path level do not know whether their agentic system is working. They know whether it is producing outputs.</p>
        </div>
        <div className="article-pullquote">
          <p>"The question is not whether your agentic system produces correct outputs in a demo. The question is whether it produces correct outputs reliably across the execution path space that your users will explore on day one."</p>
        </div>
        <div className="article-prose">
          <p>Agentic systems built to these four requirements are more expensive to build than demo-ready agentic systems. They are substantially less expensive than the remediation cycles that follow when demo-ready systems are deployed at production scale. The organizations that understand this invest in the architectural rigor upfront. The organizations that don't discover its value the hard way — in production, under load, when the failures are no longer theoretical.</p>
        </div>
      </div>

      <div className="article-references">
        <h3>References</h3>
        <ol>
          <li>Yao, S. et al. (2023). ReAct: Synergizing Reasoning and Acting in Language Models. <em>arXiv:2210.03629</em>.</li>
          <li>Park, J. et al. (2023). Generative Agents: Interactive Simulacra of Human Behavior. <em>arXiv:2304.03442</em>.</li>
          <li>Wei, J. et al. (2022). Chain-of-Thought Prompting Elicits Reasoning in Large Language Models. <em>arXiv:2201.11903</em>.</li>
          <li>Anthropic. (2024). Building Effective Agents. <em>Anthropic Engineering Blog</em>.</li>
          <li>Burgess, J. (2025). <em>Agentic Engineering: Building Autonomous AI Systems That Actually Work</em>. Independently Published.</li>
        </ol>
      </div>
    </div>
  )
}

function ArticleCTA() {
  return (
    <section className="cs-cta">
      <h3>Building an agentic system<br /><span>that needs to ship?</span></h3>
      <p>I architect and build agentic AI systems for organizations where reliable production behavior is not optional. If you're navigating the gap between demo and production, let's talk.</p>
      <a href="https://calendly.com/jayburgessjr/long-meet" className="cs-cta-btn" target="_blank" rel="noreferrer">
        Schedule a Call →
      </a>
    </section>
  )
}

function ArticleFooter() {
  return (
    <footer>
      <div className="footer-id"><strong>Jay Burgess</strong> · Principal AI Systems Architect · CEO, Revuity Systems</div>
      <div className="footer-id">jay@revuitysys.com</div>
    </footer>
  )
}

export default function ArticleAgenticTrap() {
  usePageMeta({
    title: 'The Agentic Trap — Jay Burgess',
    description: 'Multi-agent AI systems fail in compounding ways that demos cannot surface. Five architectural failure patterns — and how to close them before production.',
  })
  return (
    <>
      <ArticleNav />
      <ArticleHero />
      <ArticleBody />
      <ArticleCTA />
      <ArticleFooter />
    </>
  )
}
