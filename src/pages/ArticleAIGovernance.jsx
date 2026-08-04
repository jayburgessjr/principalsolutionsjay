import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import "../casestudy.css";
import Footer from "../components/Footer";

const STATS = [
  {
    num: "7 layers",
    label: "Operating model",
    sub: "mandate to continuous assurance",
  },
  {
    num: "9 stages",
    label: "Governed delivery lifecycle",
    sub: "each with entry and exit criteria",
  },
  {
    num: "10 principles",
    label: "Embedded governance",
    sub: "design rules for the model",
  },
  {
    num: "4 functions",
    label: "NIST AI RMF",
    sub: "Govern, Map, Measure, Manage",
  },
];

function ArticleHero() {
  return (
    <section className="article-hero">
      <div className="article-hero-inner">
        <div className="article-eyebrow">
          Article · AI Governance · July 2026
        </div>
        <h1 className="article-title">
          Governing Forward Deployed AI in Regulated Enterprises: A Delivery
          Framework
        </h1>
        <div className="article-abstract">
          AI governance frameworks say what good looks like. They rarely say who
          approves a model change, what evidence a release needs, or how a human
          override actually works. This is an operating model that closes the
          gap between AI policy and AI delivery for regulated enterprises.
        </div>
        <div className="article-meta-bar">
          <div className="article-meta-item">
            <div className="article-meta-label">Author</div>
            <div className="article-meta-val">Jay Burgess</div>
          </div>
          <div className="article-meta-item">
            <div className="article-meta-label">Published</div>
            <div className="article-meta-val">July 24, 2026</div>
          </div>
          <div className="article-meta-item">
            <div className="article-meta-label">Category</div>
            <div className="article-meta-val">AI Governance</div>
          </div>
          <div className="article-meta-item">
            <div className="article-meta-label">Read Time</div>
            <div className="article-meta-val">16 min</div>
          </div>
        </div>
        <div className="article-keywords">
          {[
            "AI Governance",
            "Forward Deployed AI",
            "Regulated Enterprise",
            "NIST AI RMF",
            "Human Oversight",
            "Model Risk",
            "Continuous Assurance",
          ].map((k) => (
            <span key={k} className="article-keyword">
              {k}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatRow() {
  return (
    <div
      className="article-body"
      style={{ paddingTop: "0", paddingBottom: "0" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1px",
          background: "var(--rule)",
          border: "1px solid var(--rule)",
        }}
      >
        {STATS.map((s) => (
          <div
            key={s.num}
            style={{ background: "var(--black)", padding: "1.75rem" }}
          >
            <div
              style={{
                fontFamily: "IBM Plex Sans, sans-serif",
                fontWeight: 700,
                fontSize: "1.6rem",
                color: "var(--orange)",
                lineHeight: 1.1,
                marginBottom: "0.4rem",
              }}
            >
              {s.num}
            </div>
            <div
              style={{
                fontSize: "0.85rem",
                color: "var(--white)",
                fontWeight: 600,
                marginBottom: "0.2rem",
              }}
            >
              {s.label}
            </div>
            <div style={{ fontSize: "0.78rem", color: "var(--mid)" }}>
              {s.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GapDiagram() {
  const box = (title, sub, highlight) => (
    <div
      style={{
        background: highlight ? "var(--orange-glow)" : "var(--black)",
        border: `1px solid ${highlight ? "var(--orange-border)" : "var(--rule)"}`,
        padding: "1.25rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div
        style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--white)" }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "0.75rem",
          color: "var(--mid)",
          marginTop: "0.3rem",
        }}
      >
        {sub}
      </div>
    </div>
  );
  return (
    <div className="article-diagram">
      <div className="article-diagram-title">
        Fig. 1, The governance-delivery gap, and the operating layer that closes
        it
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
          }}
        >
          {box(
            "AI governance policy",
            "principles, risk appetite, obligations",
          )}
          {box("AI delivery practice", "architecture, prompts, production")}
        </div>
        <div
          style={{
            textAlign: "center",
            fontFamily: "IBM Plex Mono, monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--dim)",
          }}
        >
          the governance-delivery gap
        </div>
        {box(
          "Integrated operating model",
          "controls, evidence, decision rights, continuous assurance",
          true,
        )}
      </div>
    </div>
  );
}

const STAGES = [
  "Opportunity qualification",
  "Context discovery",
  "Risk and obligation mapping",
  "Solution and control design",
  "Controlled development",
  "Verification and validation",
  "Production authorization",
  "Continuous operation and adaptation",
  "Retirement or replacement",
];

function LifecycleDiagram() {
  return (
    <div className="article-diagram">
      <div className="article-diagram-title">
        Fig. 2, The nine-stage governance-integrated delivery lifecycle
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1px",
          background: "var(--rule)",
          border: "1px solid var(--rule)",
        }}
      >
        {STAGES.map((s, i) => (
          <div
            key={s}
            style={{
              background: "var(--black)",
              padding: "0.9rem 1.5rem",
              display: "flex",
              gap: "1.25rem",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "0.75rem",
                color: "var(--orange)",
                flexShrink: 0,
                width: "1.5rem",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--white)" }}>
              {s}
            </div>
          </div>
        ))}
      </div>
      <p
        style={{
          fontSize: "0.78rem",
          color: "var(--mid)",
          lineHeight: 1.7,
          marginTop: "1rem",
        }}
      >
        Continuous operation feeds back into risk and obligation mapping,
        because adaptation is not an exception to governance. It is a
        first-class part of the lifecycle.
      </p>
    </div>
  );
}

const LAYERS = [
  {
    n: "Layer 1",
    t: "Strategic mandate",
    d: "Establishes the intended organizational value, the permitted and prohibited uses, the risk appetite, the applicable obligations, executive accountability, funding authority, and the residual risk the organization is willing to accept. The rule is simple: no AI initiative should proceed solely because a capability exists. It must connect to a legitimate purpose and an accountable business owner.",
  },
  {
    n: "Layer 2",
    t: "Context and consequence classification",
    d: "The system is classified by the factors that actually drive its risk: decision consequence, affected population, degree of autonomy, data sensitivity, regulatory exposure, reversibility, scale, explainability requirements, human dependency, external-system access, and potential for material harm. That classification determines how deep the governance, evaluation, approval, monitoring, and oversight need to be. The same model can carry radically different risk depending on how it is used.",
  },
  {
    n: "Layer 3",
    t: "Governance-integrated delivery lifecycle",
    d: "Delivery runs through nine stages, each with defined entry criteria, required activities, decision authorities, evidence outputs, and exit criteria. Governance is not a gate bolted onto the end. It is present at every stage.",
  },
  {
    n: "Layer 4",
    t: "Control architecture",
    d: "Controls are organized into domains so no material risk area is left without an owner: data governance, privacy, cybersecurity, model and system performance, bias and harmful-impact management, human oversight, explainability, tool and action authorization, logging and traceability, change management, third-party and foundation-model risk, operational resilience, incident management, records retention, and regulatory compliance.",
  },
  {
    n: "Layer 5",
    t: "Evidence architecture",
    d: "Every material claim about the system is supported by evidence: an intended-use statement, a system context map, a regulatory-obligation register, an architecture diagram, a data inventory and lineage, a risk assessment, a control register, an evaluation specification and results, a human-oversight design, a residual-risk acceptance, a release decision, a change history, a monitoring record, an incident record, and a retirement decision. Evidence creates the traceability that makes governance decisions repeatable, reviewable, and auditable.",
  },
  {
    n: "Layer 6",
    t: "Decision rights",
    d: "The model separates authorities that generic responsibility charts blur together: the authority to propose, to design, to validate, to accept risk, to release, to operate, to override, to suspend, and to retire. For a high-consequence system, one person should not be able to design, validate, approve, and accept the risk of the same capability without independent challenge. Separation is a control, not bureaucracy.",
  },
  {
    n: "Layer 7",
    t: "Continuous assurance",
    d: "Production deployment does not conclude governance. Continuous assurance includes performance monitoring, input and output drift detection, policy-conformance testing, human-override analysis, adverse-event monitoring, user-feedback analysis, access review, evaluation regression testing, model-provider change review, prompt and configuration change control, periodic risk reassessment, incident escalation, reauthorization, and controlled retirement.",
  },
];

const PRINCIPLES = [
  [
    "Governance must be executable.",
    "A requirement should resolve into a role, control, test, decision, evidence artifact, or monitoring activity. A requirement that cannot be operationalized cannot be reliably governed.",
  ],
  [
    "Governance must travel with the system.",
    "Controls and evidence stay connected to the system as it moves from discovery to production and through every subsequent change.",
  ],
  [
    "Context determines risk.",
    "The same model can carry very different risk depending on its users, data, purpose, authority, and environment.",
  ],
  [
    "The governed object is the complete system.",
    "The unit of governance is the model together with its data, prompts, tools, integrations, interfaces, users, procedures, and the organizational decisions around it.",
  ],
  [
    "Human oversight must include authority.",
    "A person present in a workflow is not oversight. The human needs enough information, competence, time, independence, and authority to challenge or override the system.",
  ],
  [
    "Controls must be proportionate to consequence.",
    "Governance depth rises with decision consequence, autonomy, irreversibility, scale, sensitivity, and regulatory exposure.",
  ],
  [
    "Changes must be governed by behavioral impact.",
    "A modification is classified by its potential effect on behavior and risk, not by how many lines of code changed.",
  ],
  [
    "Evaluation must reflect operational reality.",
    "Evaluation datasets and scenarios should represent the actual users, policies, edge cases, data conditions, and failure consequences of the deployment environment.",
  ],
  [
    "Accountability cannot be delegated to the model.",
    "A system may generate, recommend, prioritize, or execute, but identifiable human actors remain accountable.",
  ],
  [
    "Delivery velocity and governance are joint design objectives.",
    "Good governance enables controlled delivery. The model should reduce uncertainty and let lower-risk changes proceed efficiently rather than function only as an obstacle.",
  ],
];

const EVAL_DIMS = [
  [
    "Utility",
    "Does it improve the organization's ability to govern and deliver AI?",
  ],
  [
    "Completeness",
    "Does it address the material lifecycle activities and risk domains?",
  ],
  [
    "Usability",
    "Can practitioners understand and apply it without excessive burden?",
  ],
  [
    "Traceability",
    "Can obligations be traced to requirements, controls, tests, evidence, and decisions?",
  ],
  ["Accountability", "Are authority and outcome ownership unambiguous?"],
  [
    "Adaptability",
    "Can it respond to different technologies and regulatory environments?",
  ],
  [
    "Operational effectiveness",
    "Does it support delivery rather than only generate documentation?",
  ],
  [
    "Transferability",
    "Do its design principles apply beyond the original context?",
  ],
];

const FAQS = [
  [
    "What is a forward deployed AI system?",
    "A forward deployed AI system is an AI-enabled socio-technical system that is configured, integrated, evaluated, or adapted inside a customer or operational environment through sustained collaboration among technical specialists, domain experts, governance stakeholders, and end users. What distinguishes it is not location or job title but the degree to which the system is shaped by embedded engagement with a specific operating context, rather than shipped as a finished generic product.",
  ],
  [
    "What is the governance-delivery gap in enterprise AI?",
    "The governance-delivery gap is the organizational distance between an enterprise's stated AI governance expectations and the technical and operational practices through which AI systems are actually delivered and maintained. It shows up when governance reviews happen after key architectural decisions, when regulatory requirements are never translated into testable controls, when responsibility for outputs and monitoring stays ambiguous, and when an organization cannot reconstruct why a consequential decision or design change occurred.",
  ],
  [
    "How is this different from the NIST AI Risk Management Framework?",
    "It does not compete with the NIST AI RMF. The NIST framework organizes AI risk around four functions, Govern, Map, Measure, and Manage, but is intentionally voluntary and use-case agnostic, so it does not prescribe who approves a change or what evidence a release requires. This operating model acts as an implementation and delivery layer: it turns those intended outcomes into concrete roles, lifecycle stages, controls, evidence, and decision rights that produce auditable proof the outcomes are being met.",
  ],
  [
    "What counts as a regulated enterprise for AI governance?",
    "A regulated enterprise is an organization whose technologies, decisions, records, or operating processes are materially constrained by statutory, regulatory, contractual, fiduciary, professional, or public-accountability requirements. This includes conventionally regulated sectors such as healthcare, finance, insurance, education, government, energy, and telecommunications, and it can include any organization running high-consequence systems even where no single AI-specific statute applies.",
  ],
  [
    "How do you govern changes to an AI system after deployment?",
    "Treat a material AI change as broader than a code release. Any change capable of altering system behavior, decision authority, risk exposure, or evidence quality, including prompt edits, retrieval sources, tool permissions, model-provider updates, and orchestration logic, is classified by its potential behavioral impact and reassessed accordingly. Lower-risk changes proceed efficiently under change control, while higher-impact changes trigger re-evaluation, human-oversight review, and reauthorization.",
  ],
  [
    "What does meaningful human oversight actually require?",
    "A person nominally present in a workflow is not meaningful oversight. Meaningful human oversight requires that the person has sufficient information, competence, time, independence, and, critically, the authority to challenge or override the system. Oversight depth should scale with the system's consequence, autonomy, irreversibility, and regulatory exposure.",
  ],
];

function ArticleBody() {
  const r = Array.from({ length: 11 }, () => useReveal());
  return (
    <div className="article-body">
      <div className="article-section reveal" ref={r[0]}>
        <div className="article-section-num">Summary</div>
        <h2>Governance that travels with the system</h2>
        <div className="article-prose">
          <p>
            AI systems are increasingly embedded inside the operational
            environments of regulated enterprises. Unlike conventional software,
            a forward deployed AI system is configured, integrated, evaluated,
            and adapted within the customer's organizational context, often in
            direct collaboration with domain experts, compliance staff,
            operational leaders, and end users. That embedded model can
            accelerate the translation of AI capability into operating value. It
            also creates real governance difficulty, because system behavior,
            data access, human decision authority, regulatory obligations, and
            technical configuration all keep evolving after go-live.
          </p>
          <p>
            Existing governance frameworks provide sound principles for managing
            risk, accountability, transparency, reliability, privacy, fairness,
            and human oversight. But they often operate at a level of
            abstraction that does not tell a multidisciplinary team how to
            govern the daily discovery, design, deployment, evaluation,
            modification, and operation of a context-specific system.
            Contemporary software delivery, meanwhile, is built for speed,
            iteration, and customer collaboration, and usually lacks the
            controls a high-consequence or regulated decision environment
            demands. That separation is the problem this article addresses: it
            proposes an operating model in which governance is embedded directly
            into AI delivery, so requirements, controls, responsibilities,
            evidence, and decision rights travel with the system throughout its
            life.
          </p>
        </div>
      </div>

      <div className="article-section reveal" ref={r[1]}>
        <div className="article-section-num">§ 1</div>
        <h2>The governance-delivery gap</h2>
        <div className="article-prose">
          <p>
            Implementing AI in a regulated environment is not like implementing
            standardized enterprise software. AI systems are probabilistic,
            context-sensitive, and data-dependent, and they can produce outputs
            that were not fully anticipated during development. Their behavior
            can shift when models, prompts, retrieval sources, tools,
            integrations, policies, or operating conditions change. In regulated
            industries, those outputs can affect financial eligibility,
            healthcare decisions, educational access, employment, insurance,
            legal compliance, and public benefits.
          </p>
          <p>
            A regulated enterprise therefore faces two demands at once. It must
            move quickly enough to produce business and public value, and it
            must keep systems lawful, reliable, secure, explainable where
            necessary, appropriately supervised, and auditable. Treating
            governance as a pre-deployment approval exercise is insufficient,
            because material change continues after deployment. Treating
            delivery as unrestricted experimentation is equally insufficient,
            because iterative change can alter the system's risk profile.
          </p>
        </div>
        <GapDiagram />
        <div className="article-prose" style={{ marginTop: "1.5rem" }}>
          <p>
            The absence of an integrated operating model produces a recognizable
            set of failure conditions. Governance reviews land after critical
            architectural decisions are already made. Regulatory requirements
            are never translated into testable technical controls.
            Responsibility for model outputs, data use, human oversight, and
            production monitoring stays ambiguous. Delivery teams optimize for
            functional completion without producing assurance evidence, while
            compliance teams write policy without visibility into system
            behavior. Systems get modified without any formal reassessment of
            risk. Pilots enter production with no defined ownership, monitoring,
            or retirement plan. Human approval mechanisms exist on paper but do
            not meaningfully constrain the system. Evaluations measure technical
            performance without assessing workflow or organizational
            consequences. And when something goes wrong, the organization cannot
            reconstruct why a consequential decision or design change occurred.
          </p>
        </div>
        <div className="article-pullquote">
          <p>
            The governance-delivery gap is rarely closed by writing another
            policy or standing up another committee. It closes when governance
            requirements are embedded in delivery decisions, system
            architecture, lifecycle evidence, and operating accountability.
          </p>
        </div>
      </div>

      <div className="article-section reveal" ref={r[2]}>
        <div className="article-section-num">§ 2</div>
        <h2>What makes forward deployed AI different</h2>
        <div className="article-prose">
          <p>
            A <strong>forward deployed AI system</strong> is an AI-enabled
            socio-technical system that is configured, integrated, evaluated, or
            adapted within a customer or operational environment through
            sustained collaboration among technical specialists, domain experts,
            governance stakeholders, and system users. The distinction is not
            physical location or job title. It is the degree to which the
            system's design is shaped through embedded engagement with a
            specific operating context. That proximity gives forward deployed
            teams access to organizational knowledge a centralized engineering
            team may never see. It also places them at the intersection of
            commercial expectations, technical constraints, regulatory
            obligations, user needs, and real-time operational pressure, which
            means they routinely make decisions that materially affect system
            risk without holding formally assigned governance authority.
          </p>
          <p>
            A <strong>regulated enterprise</strong> is an organization whose
            technologies, decisions, records, or operating processes are
            materially constrained by statutory, regulatory, contractual,
            fiduciary, professional, or public-accountability requirements. That
            includes conventionally regulated sectors such as healthcare,
            finance, insurance, education, government, energy, and
            telecommunications. It can also include any organization operating
            high-consequence systems, even where no single comprehensive
            AI-specific statute applies.
          </p>
          <p>
            The scope here is the enterprise's own use, configuration,
            integration, and operation of AI capability, not the development of
            foundation models. Relevant systems include generative AI, machine
            learning, decision support, intelligent automation, agentic systems,
            retrieval-augmented generation, and AI-enabled workflow
            orchestration. The model does not assume the enterprise controls the
            underlying foundation model.
          </p>
        </div>
      </div>

      <div className="article-section reveal" ref={r[3]}>
        <div className="article-section-num">§ 3</div>
        <h2>Foundations</h2>
        <div className="article-prose">
          <p>
            The operating model draws on several established bodies of work
            rather than inventing governance from scratch.
          </p>
          <p>
            <strong>Design science.</strong> The goal is to build and evaluate
            an artifact that addresses a consequential organizational problem,
            following a clear sequence: identify the problem, define solution
            objectives, design and develop, demonstrate, evaluate, and
            communicate.
          </p>
          <p>
            <strong>AI risk management.</strong> The NIST AI Risk Management
            Framework treats AI risk as contextual, lifecycle-based, and
            socio-technical, and organizes it around four functions: Govern,
            Map, Measure, and Manage. That framework is deliberately voluntary
            and use-case agnostic, which leaves each organization to translate
            the outcomes into concrete practice. The operating model here is
            that missing implementation layer. It does not replace the NIST
            framework. It produces the evidence that the framework's intended
            outcomes are being met.
          </p>
          <p>
            <strong>Socio-technical systems.</strong> AI performance cannot be
            judged by model accuracy alone. Outcomes depend on the interaction
            among models, data, interfaces, users, incentives, policies,
            workflows, escalation procedures, and institutional authority. The
            unit of analysis is not the model. It is the complete decision and
            delivery system the model participates in.
          </p>
          <p>
            <strong>Governance and decision rights.</strong> Governance
            determines who may decide, who is accountable, what evidence is
            required, and how competing objectives get resolved. Generic
            responsibility matrices tend to distribute participation without
            assigning final accountability, which is exactly the ambiguity that
            lets risk fall through the cracks.
          </p>
          <p>
            <strong>Model risk and continuous change.</strong> Traditional
            model-risk practice contributes controls around validation,
            documentation, independent review, change management, and ongoing
            monitoring. Forward deployed AI adds complexity, because behavior
            can move through prompt changes, retrieval content, tool
            permissions, provider updates, orchestration logic, and user
            interaction. A material AI change is therefore broader than a code
            release.
          </p>
        </div>
      </div>

      <div className="article-section reveal" ref={r[4]}>
        <div className="article-section-num">§ 4</div>
        <h2>The operating model: seven layers</h2>
        <div className="article-prose">
          <p>
            The proposed artifact, a forward deployed AI governance and delivery
            operating model, is composed of seven integrated layers. Each
            responds to one or more documented governance, regulatory,
            organizational, or technical requirements.
          </p>
        </div>
        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            background: "var(--rule)",
            border: "1px solid var(--rule)",
          }}
        >
          {LAYERS.map((l) => (
            <div
              key={l.n}
              style={{
                background: "var(--black)",
                padding: "1.5rem",
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  fontFamily: "IBM Plex Mono, monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--orange)",
                  flexShrink: 0,
                  width: "4.5rem",
                  paddingTop: "0.15rem",
                }}
              >
                {l.n}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--white)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {l.t}
                </div>
                <div
                  style={{
                    fontSize: "0.83rem",
                    color: "var(--mid)",
                    lineHeight: 1.75,
                  }}
                >
                  {l.d}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="article-section reveal" ref={r[5]}>
        <div className="article-section-num">§ 5</div>
        <h2>The nine-stage delivery lifecycle</h2>
        <div className="article-prose">
          <p>
            Layer 3 runs delivery through nine stages, each with defined entry
            criteria, required activities, decision authorities, evidence
            outputs, and exit criteria. Governance is present at every stage,
            and continuous operation feeds back into risk mapping rather than
            sitting outside the process.
          </p>
        </div>
        <LifecycleDiagram />
      </div>

      <div className="article-section reveal" ref={r[6]}>
        <div className="article-section-num">§ 6</div>
        <h2>Ten design principles</h2>
        <div className="article-prose">
          <p>
            The layers are built on ten principles. They are the transferable
            part of the model, the ideas that hold even when the technology and
            the regulatory regime change.
          </p>
          <ol className="article-numbered">
            {PRINCIPLES.map(([lead, body]) => (
              <li key={lead}>
                <strong>{lead}</strong> {body}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="article-section reveal" ref={r[7]}>
        <div className="article-section-num">§ 7</div>
        <h2>The core idea</h2>
        <div className="article-pullquote">
          <p>
            Effective enterprise AI governance is not produced by policies,
            committees, or technical safeguards on their own. It emerges from
            the coordinated design of organizational authority, delivery
            process, technical architecture, evidence, and continuous
            operational feedback.
          </p>
        </div>
      </div>

      <div className="article-section reveal" ref={r[8]}>
        <div className="article-section-num">§ 8</div>
        <h2>How you would know it works</h2>
        <div className="article-prose">
          <p>
            An operating model is only worth adopting if its effect can be
            assessed. Eight dimensions make that judgment concrete.
          </p>
        </div>
        <div style={{ overflowX: "auto", marginTop: "1.5rem" }}>
          <table className="article-table">
            <thead>
              <tr>
                <th>Dimension</th>
                <th>The question it answers</th>
              </tr>
            </thead>
            <tbody>
              {EVAL_DIMS.map(([d, q]) => (
                <tr key={d}>
                  <td>
                    <strong>{d}</strong>
                  </td>
                  <td>{q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="article-prose" style={{ marginTop: "1.5rem" }}>
          <p>
            The strongest signal is traceability under pressure. When a
            regulator, an auditor, or an incident review asks why a
            consequential decision or design change happened, the organization
            should be able to answer with evidence rather than recollection.
          </p>
        </div>
      </div>

      <div className="article-section reveal" ref={r[9]}>
        <div className="article-section-num">§ 9</div>
        <h2>The thesis, stated plainly</h2>
        <div className="article-prose">
          <p>
            Regulated enterprises can improve the accountability and operational
            effectiveness of forward deployed AI systems by replacing fragmented
            governance reviews and technically isolated delivery with an
            integrated operating model, one that embeds risk classification,
            decision rights, technical controls, assurance evidence, human
            authority, and continuous evaluation throughout the system
            lifecycle. Governance, in that framing, is not a document produced
            for compliance. It is a delivery-integrated organizational
            capability.
          </p>
          <p>
            That is the same conviction behind how Revuity builds. Forward
            deployed AI is deployment work, not trend work, and the systems that
            hold up in regulated environments are the ones designed with
            operating reality in mind from the first stage: tools, prompts, data
            boundaries, approval logic, observability, evidence, and cost
            control. If you are trying to move an AI system into a regulated or
            high-consequence process and want the governance built into the
            delivery rather than bolted on afterward, that is exactly the shape
            of a Revuity engagement.
          </p>
        </div>
      </div>

      <div className="article-section reveal" ref={r[10]}>
        <div className="article-section-num">FAQ</div>
        <h2>Frequently asked questions</h2>
        <div className="article-prose">
          {FAQS.map(([q, a]) => (
            <div key={q} style={{ marginBottom: "1.75rem" }}>
              <p style={{ color: "var(--white)", fontWeight: 600 }}>{q}</p>
              <p>{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArticleCTA() {
  return (
    <section className="cs-cta">
      <h3>
        Moving AI into a
        <br />
        <span>regulated process?</span>
      </h3>
      <p>
        I build the governance into the delivery, not bolted on afterward.
        Tools, prompts, data boundaries, approval logic, evidence, and cost
        control, designed for operating reality from the first stage. Start with
        a 30-minute discovery call.
      </p>
      <a
        href="https://calendly.com/jayburgessjr/long-meet"
        className="cs-cta-btn"
        target="_blank"
        rel="noreferrer"
      >
        Book a call →
      </a>
    </section>
  );
}

export default function ArticleAIGovernance() {
  usePageMeta({
    title:
      "Governing Forward Deployed AI in Regulated Enterprises, Jay Burgess",
    description:
      "An operating model that closes the gap between AI policy and AI delivery for regulated enterprises: seven layers, a nine-stage governed lifecycle, ten design principles, and the evidence that proves it works.",
  });
  return (
    <>
      <ArticleHero />
      <StatRow />
      <ArticleBody />
      <ArticleCTA />
      <Footer />
    </>
  );
}
