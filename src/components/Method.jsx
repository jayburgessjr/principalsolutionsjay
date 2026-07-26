import { useReveal } from "../hooks/useReveal";

const steps = [
  {
    num: "01",
    verb: "Scope",
    title: "Turn a symptom into a build plan.",
    body: "I sit with the business partner who describes a symptom, not a system, and pull out what they actually need, decomposed into a real build plan, in the room. I hold the line when the request needs to change.",
    proof:
      "→ Higher Ed Compliance Software: diagnosed compliance failures as zero structured knowledge, not staff error",
  },
  {
    num: "02",
    verb: "Prototype",
    title: "Build it fast with Claude Code.",
    body: "I build the whole stack, data layer, backend, UI, and the LLM pieces, using AI-assisted development. Working software in days and weeks, not quarters.",
    proof:
      "→ Higher Ed Compliance Software: RAG pipeline, anti-hallucination prompting, MCP tool orchestration, staged ahead of schedule",
  },
  {
    num: "03",
    verb: "Harden",
    title: "Make it production-grade.",
    body: "Eval suites with pass thresholds, guardrails, structured logging, audit trails, rollback, row-level security verified with negative tests. The phase regulated and rights-sensitive shops probe hardest.",
    proof:
      "→ Higher Ed Compliance Software: governed human review, deterministic policy execution, full audit logging in a Title IV environment",
  },
  {
    num: "04",
    verb: "Hand off",
    title: "Ship it so the team owns it.",
    body: "Every build ships with a handoff package, README, runbook, ADRs, plus a pairing session so the receiving team stays self-sufficient, including with AI-assisted development after I leave.",
    proof:
      "→ Client: built OpsFlow, trained the team, runs independently, zero dependency on me",
  },
  {
    num: "05",
    verb: "Harvest",
    title: "Push the pattern back into the platform.",
    body: "After each build, the reusable patterns go into a shared library so the next engagement starts further along. Every system compounds into the next.",
    proof:
      "→ Revuity: reusable reference architectures and the open-source Eligibility-Agent, patterns the next build inherits",
  },
];

export default function Method() {
  const stepsRef = useReveal();

  return (
    <section className="method" id="method">
      <div className="method-inner">
        <div className="section-label">How I operate</div>
        <h2 className="method-h2">
          Five moves.
          <br />
          <em>Every system. Every time.</em>
        </h2>
        <div className="ol-stages">
          <span>Scope</span>
          <span className="ol-arrow">→</span>
          <span>Prototype</span>
          <span className="ol-arrow">→</span>
          <span>Harden</span>
          <span className="ol-arrow">→</span>
          <span>Hand off</span>
          <span className="ol-arrow">→</span>
          <span>Harvest</span>
        </div>
        <p className="method-intro">
          Most engineers scope with a ticket and ship the AI part. I run the
          whole loop, and I don't move on until the team can run it without me
          in the room.
        </p>

        <div className="steps reveal" ref={stepsRef}>
          {steps.map((s) => (
            <div className="step" key={s.num}>
              <div className="step-num">{s.num}</div>
              <span className="step-verb">{s.verb}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="step-proof">{s.proof}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
