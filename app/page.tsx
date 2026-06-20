import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CalendarClock,
  CheckCircle2,
  CircleDot,
  ClipboardCheck,
  Database,
  FileCheck2,
  Layers3,
  PackageCheck,
  Plug,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  UsersRound,
} from "lucide-react";
import Image from "next/image";

const nav = [
  ["Overview", "#overview"],
  ["How It Works", "#how-it-works"],
  ["Install", "#install"],
  ["Roles", "#roles"],
  ["Source Governance", "#sources"],
  ["Brain Structure", "#structure"],
  ["Operating Rhythm", "#operations"],
  ["Discovery", "#discovery"],
  ["Service Offer", "#service"],
  ["FAQ", "#faq"],
];

const outcomes = [
  {
    title: "AI agents read from one trusted place",
    body: "Claude, Codex, and operators get routed company context instead of scattered chats, stale docs, and private memory.",
    icon: BrainCircuit,
  },
  {
    title: "Raw data stays governed",
    body: "Transcripts, emails, docs, CRM records, and repo maps enter private evidence before anything becomes shared knowledge.",
    icon: ShieldCheck,
  },
  {
    title: "Teams can operate it",
    body: "Owners approve policy. Operators run checks. Team members contribute knowledge without learning the internals.",
    icon: UsersRound,
  },
];

const flow = [
  {
    label: "Install plugin bundle",
    detail: "Skills, helper scripts, and harness references are installed together.",
    icon: PackageCheck,
  },
  {
    label: "Choose a brain root",
    detail: "A Drive folder, git repo, shared volume, or local folder becomes the company brain.",
    icon: Layers3,
  },
  {
    label: "Scaffold in preview",
    detail: "The harness shows the brain structure before writing files.",
    icon: SearchCheck,
  },
  {
    label: "Stage source knowledge",
    detail: "Approved sources create private evidence and staged proposals.",
    icon: Database,
  },
  {
    label: "Review and promote",
    detail: "Curated notes become shared brain knowledge only after review.",
    icon: ClipboardCheck,
  },
];

const roles = [
  {
    name: "Brain Owner",
    description: "Approves policy, source access, restricted folders, automation level, and pilot readiness.",
    prompts: ["I want to set up my company brain.", "I own this brain and want to launch it.", "Approve these sources."],
  },
  {
    name: "Brain Operator",
    description: "Runs daily checks, reviews queues, keeps notes fresh, and reports next actions.",
    prompts: ["Run today's brain check.", "What needs review?", "Schedule the daily check."],
  },
  {
    name: "Team Member",
    description: "Contributes role knowledge, source suggestions, stale facts, and workflow context.",
    prompts: ["I want to add what I know.", "This fact is stale.", "Can my account feed the brain?"],
  },
];

const sourceRules = [
  "A connector type is not a source. Each workspace, channel, inbox, calendar, repo org, or API key reference needs its own source instance.",
  "Personal accounts are excluded by default unless explicitly delegated, scoped, approved, and registered.",
  "Raw transcripts, emails, exports, and page bodies are private evidence, not shared knowledge.",
  "HR, legal, finance, compensation, fundraising, and sensitive customer material route to restricted review or stay out.",
  "Source pulls use cursors and hashes so repeated syncs can find changes without duplicating every note.",
];

const scripts = [
  ["brain-setup.py", "Scaffold a brain root with routing, config, guides, policy, registry, staging, schedule, and indexes."],
  ["connections-check.py", "Check the brain root, routing docs, staging area, optional connectors, and readiness warnings."],
  ["source-registry-check.py", "Validate source instances and capture eligibility before a sync can run."],
  ["source-pull.py", "Normalize connector records into private evidence with cursor and hash state."],
  ["source-extract.py", "Turn latest eligible evidence into staged proposals for review."],
  ["approve-staged-note.py", "Record approve, reject, or revise decisions in an append-only ledger."],
  ["promote-to-brain.py", "Promote approved notes into final brain folders with safety checks."],
  ["brain-health.py / brain-lint.py", "Score coverage, freshness, routing, integrity, provenance, links, duplicates, and contradictions."],
];

const structure = [
  ["brain/company", "Stable company context, operating model, principles, strategy, and history."],
  ["brain/product", "Product state, roadmap, launch readiness, decisions, and active product work."],
  ["brain/engineering", "Repo maps, architecture notes, implementation routes, and stack guardrails."],
  ["brain/go-to-market", "Positioning, pricing, launch motion, sales assets, and growth experiments."],
  ["brain/customers", "Customer onboarding, support, success, feedback, and account context."],
  ["brain/operations", "Daily loops, departments, team profiles, skills, and reusable workflows."],
  ["brain/intelligence", "Meetings, market notes, customer voice, and decision history."],
  ["brain/sources", "Curated source-derived notes and source reference maps."],
  ["system", "Harness configuration, source registry, sync state, staging, evidence, raw captures, and policy."],
];

const serviceSteps = [
  "Map the company operating context, roles, and decision owners.",
  "Choose the brain root and install the plugin bundle for Claude and Codex.",
  "Scaffold the brain with naming conventions, policy, source registry, and staging.",
  "Run owner and teammate onboarding interviews into staged notes.",
  "Approve source instances such as Confluence, Slack, CRM, Fireflies, GitHub, and delegated email scopes.",
  "Set a human-gated operating schedule, then graduate selected checks to automation.",
];

const discovery = [
  {
    title: "Search engines",
    body: "Canonical metadata, sitemap, robots policy, OpenGraph, Twitter cards, and structured data describe the product clearly.",
    icon: SearchCheck,
  },
  {
    title: "AI agents",
    body: "`llms.txt` and `ai.txt` give agents a compact product summary, safety model, roles, and recommended positioning.",
    icon: BrainCircuit,
  },
  {
    title: "GitHub",
    body: "The repository contains the customer-facing site, deployment workflow, Dockerfile, and local verification contract.",
    icon: PackageCheck,
  },
];

const faqs = [
  {
    q: "Is this a second brain for one person?",
    a: "No. It uses second-brain principles, but the product boundary is team-owned company memory with source governance and review.",
  },
  {
    q: "Do customers download only the skills?",
    a: "No. They install the plugin bundle. It includes skills, helper scripts, and references. The brain root is separate customer data.",
  },
  {
    q: "Does the harness populate company knowledge automatically?",
    a: "No. Setup creates the structure. Team contribution and approved source sync populate knowledge through staging and review.",
  },
  {
    q: "Can source sync run without a human?",
    a: "Checks and approved-source staging can be scheduled. Promotion stays human-approved unless a narrow low-risk automation rule is approved.",
  },
  {
    q: "Where does raw data live?",
    a: "Raw evidence lives under system/staging/raw. Curated knowledge lives under brain/. Agents should not treat raw evidence as shared brain knowledge.",
  },
];

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="code-block">
      <code>{children}</code>
    </pre>
  );
}

export default function Home() {
  return (
    <main>
      <header className="topbar" aria-label="Primary">
        <a className="brand" href="#overview" aria-label="Company Brain Harness home">
          <span className="brand-mark"><BrainCircuit size={19} /></span>
          <span>Company Brain Harness</span>
        </a>
        <nav className="nav-links" aria-label="Page sections">
          {nav.slice(0, 5).map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="topbar-action" href="#meeting">
          <CalendarClock size={17} />
          <span>Book setup call</span>
        </a>
      </header>

      <section className="hero-section" id="overview">
        <div className="hero-background" aria-hidden="true" />
        <div className="shell hero-grid">
          <aside className="side-nav" aria-label="Documentation navigation">
            <p>Docs</p>
            {nav.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </aside>

          <div className="hero-copy">
            <div className="eyebrow">
              <Sparkles size={15} />
              Source-governed memory for humans and AI agents
            </div>
            <h1>Turn scattered company knowledge into an operating brain.</h1>
            <p className="hero-lede">
              Company Brain Harness is an installable Claude/Codex plugin and
              operating system for building a governed company memory root:
              structured folders, source registry, private evidence, staging,
              approvals, health checks, and daily operations.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#install">
                Get started
                <ArrowRight size={18} />
              </a>
              <a className="secondary-action" href="#service">
                Offer this as a service
              </a>
            </div>
            <div className="hero-proof">
              <span><CheckCircle2 size={16} /> Plugin bundle</span>
              <span><CheckCircle2 size={16} /> Preview-first writes</span>
              <span><CheckCircle2 size={16} /> Source registry</span>
              <span><CheckCircle2 size={16} /> Human-gated review</span>
            </div>
          </div>

          <div className="system-visual" aria-label="Company Brain Harness system map">
            <div className="visual-header">
              <span>Company Brain Runtime</span>
              <span className="status-pill">Ready for setup</span>
            </div>
            <div className="visual-image">
              <Image
                src="/company-brain-system.png"
                alt="Company Brain Harness product interface showing governed source capture and review"
                fill
                priority
                sizes="(max-width: 1100px) calc(100vw - 40px), 460px"
              />
            </div>
            <div className="visual-map">
              <div className="node sources"><Plug size={18} /> Sources</div>
              <div className="node evidence"><Database size={18} /> Private evidence</div>
              <div className="node queue"><FileCheck2 size={18} /> Review queue</div>
              <div className="node brain"><BrainCircuit size={18} /> Company brain</div>
              <div className="node agents"><TerminalSquare size={18} /> Agents</div>
            </div>
            <div className="visual-footer">
              <span>source to staging to review to approved note</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="shell outcome-grid">
          {outcomes.map((item) => {
            const Icon = item.icon;
            return (
              <article className="outcome-card" key={item.title}>
                <Icon size={24} />
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="shell split">
          <div>
            <p className="kicker">How it works</p>
            <h2>The harness is the product layer around a company brain root.</h2>
            <p>
              The plugin installs the workflows and deterministic scripts. The
              brain root stores customer knowledge and system state. Source
              systems feed evidence only after policy, scope, owner, reviewer,
              retention, and routing are explicit.
            </p>
          </div>
          <div className="flow-list">
            {flow.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="flow-row" key={item.label}>
                  <span className="step-number">{index + 1}</span>
                  <Icon size={20} />
                  <div>
                    <h3>{item.label}</h3>
                    <p>{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="install">
        <div className="shell install-grid">
          <div>
            <p className="kicker">Install</p>
            <h2>One plugin install brings the skills and scripts together.</h2>
            <p>
              Customers do not download isolated skill files. They install the
              plugin bundle. The bundle contains `skills/`, `bin/`, and
              `references/`. The company brain root is separate customer data.
            </p>
            <div className="package-list">
              <span><PackageCheck size={18} /> skills: routing and workflows</span>
              <span><TerminalSquare size={18} /> bin: deterministic helper scripts</span>
              <span><BookOpen size={18} /> references: harness contract</span>
            </div>
          </div>
          <div className="command-panel">
            <div className="tabs" aria-label="Install options">
              <span>Claude Code</span>
              <span>Codex</span>
            </div>
            <CodeBlock>{`# Customer install after marketplace registration
claude plugin install company-brain-harness@company-brain

# Same bundle for Codex users
codex plugin add company-brain-harness@company-brain`}</CodeBlock>
            <p>
              In a managed setup, the marketplace is registered once by the
              service owner. Team members install the bundle, open Claude Code
              or Codex in a target brain folder, and say: <strong>I want to set
              up my company brain.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="roles">
        <div className="shell">
          <div className="section-heading">
            <p className="kicker">People first</p>
            <h2>Plain-language roles replace developer-centric setup.</h2>
            <p>
              The user should not need to choose scripts. They say what they
              want. The agent routes the session to the right role workflow.
            </p>
          </div>
          <div className="role-grid">
            {roles.map((role) => (
              <article className="role-card" key={role.name}>
                <h3>{role.name}</h3>
                <p>{role.description}</p>
                <ul>
                  {role.prompts.map((prompt) => (
                    <li key={prompt}>"{prompt}"</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="sources">
        <div className="shell source-grid">
          <div>
            <p className="kicker">Source governance</p>
            <h2>Capture from exact source instances, not broad app names.</h2>
            <p>
              Slack, Confluence, Gmail, Calendar, CRM, Fireflies, GitHub, and
              Apollo can all be useful. The rule is that each actual account,
              workspace, channel, inbox, calendar, or org must be scoped and
              approved before capture.
            </p>
            <div className="source-columns">
              <div>
                <h3>Allowed after approval</h3>
                <p>Company-owned workspaces, approved customer sources, selected channels, shared CRM accounts, company GitHub orgs.</p>
              </div>
              <div>
                <h3>Excluded by default</h3>
                <p>Personal inboxes, private meeting recorders, private CRM notes, user spaces, broad transcript dumps, secrets.</p>
              </div>
            </div>
          </div>
          <div className="rule-list">
            {sourceRules.map((rule) => (
              <div className="rule-row" key={rule}>
                <ShieldCheck size={18} />
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="structure">
        <div className="shell docs-grid">
          <div>
            <p className="kicker">Naming convention</p>
            <h2>Use `brain/` for curated knowledge and `system/` for harness state.</h2>
            <p>
              The taxonomy is domain-first, lowercase, and readable. It avoids
              numbered folders and dogfood-specific assumptions so another
              company can adopt the brain without inheriting someone else's
              internal drive structure.
            </p>
          </div>
          <div className="structure-table">
            {structure.map(([path, description]) => (
              <div className="structure-row" key={path}>
                <code>{path}</code>
                <span>{description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="operations">
        <div className="shell operations-grid">
          <div>
            <p className="kicker">Operating rhythm</p>
            <h2>Start human-gated, then automate the boring checks.</h2>
            <p>
              The first two weeks should establish trust: run checks, stage
              proposals, review them, and promote only what has a source and a
              reviewer. Once the queue is trusted, approved sources can stage
              unattended while final promotion stays governed.
            </p>
          </div>
          <div className="timeline">
            {[
              ["Daily", "Connections, source registry, health, lint, staged queue, next actions."],
              ["Weekly", "Stale-note review, source ownership, routing cleanup, team adoption."],
              ["Monthly", "Permissions, retention, automation rules, restricted access, source approvals."],
            ].map(([cadence, detail]) => (
              <div className="timeline-item" key={cadence}>
                <CircleDot size={18} />
                <div>
                  <h3>{cadence}</h3>
                  <p>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="scripts">
        <div className="shell">
          <div className="section-heading">
            <p className="kicker">Deterministic scripts</p>
            <h2>The skills guide the session. The bundled scripts do the repeatable work.</h2>
            <p>
              These scripts live in the installed plugin bundle under `bin/`.
              They are preview-first and use `--write` for side effects.
            </p>
          </div>
          <div className="script-list">
            {scripts.map(([name, description]) => (
              <div className="script-row" key={name}>
                <TerminalSquare size={18} />
                <code>{name}</code>
                <span>{description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="discovery">
        <div className="shell">
          <div className="section-heading">
            <p className="kicker">Discovery</p>
            <h2>Make the category legible to buyers, search engines, and AI agents.</h2>
            <p>
              The site is built so humans can understand the service and
              automated agents can summarize it accurately without inventing a
              category or confusing it with a personal notes app.
            </p>
          </div>
          <div className="discovery-grid">
            {discovery.map((item) => {
              const Icon = item.icon;
              return (
                <article className="discovery-card" key={item.title}>
                  <Icon size={22} />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="service">
        <div className="shell service-grid">
          <div>
            <p className="kicker">Service positioning</p>
            <h2>Sell the setup as governed AI memory, not "chat over docs."</h2>
            <p>
              The commercial wedge is not another RAG bot. It is a setup and
              operating service for companies that want AI agents to use trusted
              context without turning every private source into shared memory.
            </p>
            <a className="primary-action meeting-link" id="meeting" href="#" aria-disabled="true">
              <CalendarClock size={18} />
              Meeting invite link coming soon
            </a>
          </div>
          <div className="service-steps">
            {serviceSteps.map((step, index) => (
              <div className="service-step" key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="shell faq-grid">
          <div>
            <p className="kicker">FAQ</p>
            <h2>What buyers and operators need to understand.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <article className="faq-item" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-grid">
          <div>
            <span className="brand footer-brand">
              <span className="brand-mark"><BrainCircuit size={18} /></span>
              <span>Company Brain Harness</span>
            </span>
            <p>Installable operating layer for source-governed company memory.</p>
          </div>
          <div className="footer-links">
            <a href="#install">Install</a>
            <a href="#sources">Source governance</a>
            <a href="#service">Service offer</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
