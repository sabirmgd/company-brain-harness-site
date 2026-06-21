import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Building2,
  CalendarClock,
  CheckCircle2,
  CircleDot,
  ClipboardCheck,
  Database,
  FolderTree,
  Layers3,
  Lock,
  PackageCheck,
  Plug,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { AnimateIn } from "./components/animate-in";

const nav = [
  ["How It Works", "#how-it-works"],
  ["Use Cases", "#use-cases"],
  ["Setup", "#setup"],
  ["Governance", "#governance"],
  ["Blog", "/blog"],
  ["FAQ", "#faq"],
];

const problems = [
  {
    icon: Database,
    title: "Knowledge is everywhere and nowhere",
    body: "Meeting notes in Fireflies, decisions in Slack, specs in Confluence, customer feedback in CRM, architecture in GitHub. Your AI agents can\u2019t find what matters.",
  },
  {
    icon: ShieldCheck,
    title: "AI agents read what they shouldn\u2019t",
    body: "Without governance, AI tools ingest private conversations, stale documents, and sensitive data. One bad source turns shared context into a liability.",
  },
  {
    icon: BrainCircuit,
    title: "No single source of truth",
    body: "Every team member has a different version of reality. AI agents hallucinate company facts because there\u2019s no canonical, reviewed knowledge base to draw from.",
  },
];

const steps = [
  {
    icon: PackageCheck,
    title: "Install the plugin bundle",
    body: "One install brings skills, helper scripts, and harness references into Claude Code or Codex.",
  },
  {
    icon: Layers3,
    title: "Choose your brain root",
    body: "A Google Drive folder, git repo, shared volume, or local directory becomes your company brain.",
  },
  {
    icon: SearchCheck,
    title: "Scaffold with preview",
    body: "The harness shows you the full brain structure before writing a single file. Nothing happens without your approval.",
  },
  {
    icon: Plug,
    title: "Register source instances",
    body: "Connect specific workspaces, channels, CRM accounts, and meeting recorders. Each source is scoped and approved individually.",
  },
  {
    icon: ClipboardCheck,
    title: "Review, approve, promote",
    body: "Raw evidence enters private staging. Curated proposals go through review. Only approved knowledge reaches the shared brain.",
  },
];

const useCases = [
  {
    icon: Rocket,
    title: "Startups & small teams",
    subtitle: "5\u201325 people",
    body: "Critical knowledge lives in founders\u2019 heads and Slack DMs. When someone leaves, weeks of context go with them. Company Brain Harness captures tribal knowledge into a structured brain so every AI tool and every new hire gets real company context from day one.",
    highlights: [
      "Capture what your team knows before it walks out the door",
      "Give Claude and Codex real product and strategy context",
      "Onboard new hires with governed institutional knowledge",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growing companies",
    subtitle: "25\u2013200 people",
    body: "As teams multiply, knowledge silos grow faster than headcount. Engineering knows things sales doesn\u2019t. Customer success hears feedback product never sees. Company Brain Harness connects these sources through governed capture.",
    highlights: [
      "Break down knowledge silos across departments",
      "Route customer insights to product decisions automatically",
      "Scale AI adoption without losing control of company data",
    ],
  },
  {
    icon: Building2,
    title: "Enterprise & regulated industries",
    subtitle: "200+ people",
    body: "Enterprises need audit trails, data classification, and compliance controls before AI agents can touch company data. Company Brain Harness provides source-level governance so AI adoption doesn\u2019t become a compliance risk.",
    highlights: [
      "Source-level governance with complete audit trails",
      "Restricted routing for HR, legal, and financial data",
      "Approval ledger satisfies compliance requirements",
    ],
  },
];

const roles = [
  {
    icon: ShieldCheck,
    title: "Brain Owner",
    body: "Sets policy, approves sources, manages restricted access, decides automation levels, and owns pilot readiness.",
    prompts: [
      "Set up my company brain",
      "Approve these sources",
      "Review restricted access",
    ],
  },
  {
    icon: Zap,
    title: "Brain Operator",
    body: "Runs daily health checks, reviews staging queues, handles source syncs, and keeps brain notes accurate and fresh.",
    prompts: [
      "Run today\u2019s brain check",
      "What needs review?",
      "Show health score",
    ],
  },
  {
    icon: Users,
    title: "Team Member",
    body: "Contributes domain knowledge, suggests sources, reports stale facts, and delegates scoped access in plain language.",
    prompts: [
      "Add what I know about our API",
      "This fact is outdated",
      "Connect my work calendar",
    ],
  },
];

const sourceRules = [
  "Each workspace, channel, inbox, calendar, repo org, or API key is a separate source instance. Connector type alone is not enough.",
  "Personal accounts are excluded by default unless explicitly delegated, scoped, approved, and registered.",
  "Raw transcripts, emails, and exports are private evidence, never shared knowledge.",
  "HR, legal, finance, and sensitive customer material routes to restricted review or stays excluded entirely.",
  "Repeated syncs use cursors and hashes to find changes without duplicating notes.",
];

const structure = [
  ["brain/company", "Company context, operating model, principles, and history"],
  ["brain/product", "Product roadmap, decisions, launch readiness, and active work"],
  [
    "brain/engineering",
    "Architecture, repo maps, stack guardrails, and implementation routes",
  ],
  [
    "brain/go-to-market",
    "Positioning, pricing, sales assets, and growth experiments",
  ],
  [
    "brain/customers",
    "Onboarding, support, success, feedback, and account context",
  ],
  [
    "brain/operations",
    "Team profiles, workflows, daily loops, and department context",
  ],
  [
    "brain/intelligence",
    "Meeting notes, market signals, customer voice, and decision history",
  ],
  ["brain/sources", "Source-derived notes and reference maps"],
  [
    "system/",
    "Configuration, source registry, sync state, staging, evidence, and policy",
  ],
];

const cadence = [
  {
    period: "Daily",
    tasks:
      "Connection health, source registry check, staged queue review, brain lint, and next actions.",
  },
  {
    period: "Weekly",
    tasks:
      "Stale note audit, source ownership review, routing cleanup, and team adoption check.",
  },
  {
    period: "Monthly",
    tasks:
      "Permission audit, retention policies, automation rule review, and source approval cycle.",
  },
];

const faqs = [
  {
    q: "Is this a personal second brain app?",
    a: "No. Company Brain Harness uses second-brain principles but the product boundary is team-owned company memory with source governance, review queues, and role-based access.",
  },
  {
    q: "How is this different from a RAG chatbot?",
    a: "RAG tools answer questions by searching documents. Company Brain Harness builds the governed knowledge layer upstream. It handles source registration, evidence capture, staging, review, and promotion so the knowledge AI agents read from is accurate, approved, and current.",
  },
  {
    q: "What do customers actually install?",
    a: "A plugin bundle that includes skills (routing and workflows), bin (deterministic helper scripts), and references (harness contract). The brain root is separate customer data.",
  },
  {
    q: "Does it populate company knowledge automatically?",
    a: "Setup creates the structure. Knowledge comes from team contribution and approved source syncs, always through staging and human review before it reaches the shared brain.",
  },
  {
    q: "Can source syncs run unattended?",
    a: "Health checks and approved-source staging can be scheduled. Final promotion to the shared brain stays human-approved unless a narrow, low-risk automation rule is explicitly approved by the Brain Owner.",
  },
  {
    q: "Where does raw source data live?",
    a: "Under system/staging/raw as private evidence. It never appears in the shared brain/ folders. AI agents are instructed to treat raw evidence as private, not shared knowledge.",
  },
  {
    q: "Which AI tools does it work with?",
    a: "Claude Code and Codex through their plugin systems. The brain root is also readable by any AI agent that can access the filesystem or shared drive.",
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
        <a
          className="brand"
          href="#overview"
          aria-label="Company Brain Harness home"
        >
          <span className="brand-mark">
            <Image
              src="/cbh-logo-icon.png"
              alt="Company Brain Harness"
              width={20}
              height={20}
            />
          </span>
          <span>Company Brain Harness</span>
        </a>
        <nav className="nav-links" aria-label="Page sections">
          {nav.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a
          className="cta-nav"
          href="https://calendly.com/sabirmgd/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CalendarClock size={16} />
          <span>Book a call</span>
        </a>
      </header>

      <section className="hero" id="overview">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container">
          <div className="hero-content">
            <AnimateIn>
              <p className="eyebrow">
                <Sparkles size={14} />
                Governed memory for AI agents and teams
              </p>
              <h1>
                Your company&rsquo;s knowledge.
                <br />
                <span className="text-gradient">
                  Structured. Governed. AI&#8209;ready.
                </span>
              </h1>
              <p className="hero-sub">
                Company Brain Harness turns scattered docs, meetings, Slack
                threads, CRM records, and tribal knowledge into a
                source-governed memory that Claude, Codex, and your entire team
                can trust.
              </p>
            </AnimateIn>
            <AnimateIn delay={150}>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#setup">
                  Get started <ArrowRight size={18} />
                </a>
                <a className="btn btn-outline" href="#book">
                  Book a setup call
                </a>
              </div>
            </AnimateIn>
            <AnimateIn delay={300}>
              <div className="trust-row">
                <span>
                  <CheckCircle2 size={15} /> Claude Code & Codex plugin
                </span>
                <span>
                  <CheckCircle2 size={15} /> Source-level governance
                </span>
                <span>
                  <CheckCircle2 size={15} /> Human-gated review
                </span>
                <span>
                  <CheckCircle2 size={15} /> Preview-first writes
                </span>
              </div>
            </AnimateIn>
            <AnimateIn delay={400}>
              <div className="hero-illustration">
                <Image
                  src="/cbh-hero-knowledge-flow.png"
                  alt="Scattered company knowledge transformed into a structured, governed brain"
                  width={1376}
                  height={768}
                  priority
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="flow-pipeline">
        <div className="container">
          <AnimateIn>
            <div className="pipeline-visual">
              <Image
                src="/cbh-data-pipeline.png"
                alt="Data pipeline: Sources to Evidence to Review to Brain to Agents"
                width={1584}
                height={672}
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section" id="why">
        <div className="container">
          <AnimateIn>
            <div className="section-header center">
              <p className="kicker">The problem</p>
              <h2>
                AI agents are only as good as the knowledge they can access
              </h2>
              <p className="section-sub">
                Most companies have knowledge scattered across a dozen tools
                with no governance, no review process, and no way for AI to find
                what matters.
              </p>
            </div>
          </AnimateIn>
          <div className="grid-3">
            {problems.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateIn key={item.title} delay={i * 100}>
                  <article className="card">
                    <div className="card-icon">
                      <Icon size={22} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="how-it-works">
        <div className="container">
          <div className="split">
            <AnimateIn>
              <div>
                <p className="kicker">How it works</p>
                <h2>
                  From scattered knowledge to governed company brain in five
                  steps
                </h2>
                <p>
                  The plugin installs the workflows and deterministic scripts.
                  The brain root stores your knowledge and system state. Source
                  systems feed evidence only after policy, scope, and reviewers
                  are explicit.
                </p>
              </div>
            </AnimateIn>
            <div className="steps">
              {steps.map((item, i) => {
                const Icon = item.icon;
                return (
                  <AnimateIn key={item.title} delay={i * 80}>
                    <div className="step-row">
                      <span className="step-num">{i + 1}</span>
                      <div className="step-icon">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="use-cases">
        <div className="container">
          <AnimateIn>
            <div className="section-header center">
              <p className="kicker">Who it&rsquo;s for</p>
              <h2>Built for teams at every stage</h2>
              <p className="section-sub">
                Whether you&rsquo;re a 5-person startup or a 500-person
                enterprise, governed company memory solves the same fundamental
                problem at different scales.
              </p>
            </div>
          </AnimateIn>
          <div className="grid-3">
            {useCases.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateIn key={item.title} delay={i * 100}>
                  <article className="use-case-card">
                    <div className="use-case-header">
                      <div className="card-icon">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3>{item.title}</h3>
                        <span className="use-case-size">{item.subtitle}</span>
                      </div>
                    </div>
                    <p>{item.body}</p>
                    <ul className="check-list">
                      {item.highlights.map((h) => (
                        <li key={h}>
                          <CheckCircle2 size={16} /> {h}
                        </li>
                      ))}
                    </ul>
                  </article>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="setup">
        <div className="container">
          <div className="split">
            <AnimateIn>
              <div>
                <p className="kicker">Setup</p>
                <h2>One install. Full operating system.</h2>
                <p>
                  The plugin bundle contains everything: skills for routing
                  workflows, deterministic scripts for repeatable operations, and
                  reference docs for the harness contract. Your brain root is
                  separate customer data.
                </p>
                <div className="package-list">
                  <span>
                    <PackageCheck size={17} /> skills/ &mdash; routing and
                    workflows
                  </span>
                  <span>
                    <TerminalSquare size={17} /> bin/ &mdash; deterministic
                    helper scripts
                  </span>
                  <span>
                    <BookOpen size={17} /> references/ &mdash; harness contract
                  </span>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={150}>
              <div className="code-panel">
                <div className="code-tabs">
                  <span className="tab active">Claude Code</span>
                  <span className="tab">Codex</span>
                </div>
                <CodeBlock>{`# Install the full plugin bundle
claude plugin install company-brain-harness

# Open your brain root folder and say:
# "I want to set up my company brain."

# The harness scaffolds in preview mode first.
# Nothing writes until you approve.`}</CodeBlock>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="section" id="roles">
        <div className="container">
          <AnimateIn>
            <div className="section-header center">
              <p className="kicker">Plain-language roles</p>
              <h2>Say what you want. The agent does the rest.</h2>
              <p className="section-sub">
                No one needs to learn scripts or folder structures. Users state
                their intent in natural language and the harness routes them to
                the right workflow.
              </p>
            </div>
          </AnimateIn>
          <div className="grid-3">
            {roles.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateIn key={item.title} delay={i * 100}>
                  <article className="role-card">
                    <div className="card-icon">
                      <Icon size={22} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <div className="prompt-list">
                      {item.prompts.map((p) => (
                        <span key={p} className="prompt-chip">
                          &ldquo;{p}&rdquo;
                        </span>
                      ))}
                    </div>
                  </article>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="governance">
        <div className="container">
          <div className="split">
            <AnimateIn>
              <div>
                <p className="kicker">Source governance</p>
                <h2>Every source is scoped, approved, and auditable</h2>
                <p>
                  Slack, Confluence, Gmail, CRM, Fireflies, GitHub, and
                  calendars can all be valuable. But each workspace, channel,
                  inbox, and account must be individually registered and approved
                  before capture begins.
                </p>
                <div className="governance-cols">
                  <div className="gov-col gov-allow">
                    <h3>
                      <CheckCircle2 size={16} /> Allowed after approval
                    </h3>
                    <p>
                      Company workspaces, approved channels, shared CRM
                      accounts, company GitHub orgs, meeting recorders for team
                      calls.
                    </p>
                  </div>
                  <div className="gov-col gov-exclude">
                    <h3>
                      <Lock size={16} /> Excluded by default
                    </h3>
                    <p>
                      Personal inboxes, private meeting notes, private CRM data,
                      user spaces, broad transcript dumps, secrets and
                      credentials.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
            <div className="rules">
              {sourceRules.map((rule, i) => (
                <AnimateIn key={rule} delay={i * 80}>
                  <div className="rule-row">
                    <ShieldCheck size={18} />
                    <span>{rule}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="structure">
        <div className="container">
          <div className="split">
            <AnimateIn>
              <div>
                <p className="kicker">Brain structure</p>
                <h2>Clean taxonomy, ready for any company</h2>
                <p>
                  Domain-first, lowercase, readable. No numbered folders or
                  company-specific assumptions. Another organization can adopt
                  the brain structure without inheriting someone else&rsquo;s
                  naming conventions.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="structure-list">
                {structure.map(([path, desc]) => (
                  <div className="structure-row" key={path}>
                    <code>
                      <FolderTree size={15} /> {path}
                    </code>
                    <span>{desc}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="rhythm">
        <div className="container">
          <div className="split">
            <AnimateIn>
              <div>
                <p className="kicker">Operating rhythm</p>
                <h2>Start human-gated. Automate what earns trust.</h2>
                <p>
                  The first two weeks establish trust: run checks, stage
                  proposals, review them, promote only what has a source and
                  reviewer. Once the queue is trusted, approved sources can stage
                  unattended while final promotion stays governed.
                </p>
              </div>
            </AnimateIn>
            <div className="cadence-list">
              {cadence.map((item, i) => (
                <AnimateIn key={item.period} delay={i * 100}>
                  <div className="cadence-row">
                    <CircleDot size={18} />
                    <div>
                      <h3>{item.period}</h3>
                      <p>{item.tasks}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cta" id="book">
        <div className="container">
          <AnimateIn>
            <div className="cta-content">
              <h2>Ready to build your company brain?</h2>
              <p>
                Book a setup call to map your company&rsquo;s operating context,
                choose a brain root, and get the harness installed with governed
                source capture running in your first session.
              </p>
              <a
                className="btn btn-primary btn-lg"
                href="https://calendly.com/sabirmgd/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarClock size={20} />
                Book your setup call
              </a>
              <p className="cta-note">
                Free setup consultation. No commitment required.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <div className="faq-layout">
            <AnimateIn>
              <div>
                <p className="kicker">FAQ</p>
                <h2>Common questions</h2>
              </div>
            </AnimateIn>
            <div className="faq-list">
              {faqs.map((item, i) => (
                <AnimateIn key={item.q} delay={i * 60}>
                  <article className="faq-item">
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </article>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <span className="brand footer-brand">
              <span className="brand-mark">
                <Image
                  src="/cbh-logo-icon.png"
                  alt="Company Brain Harness"
                  width={18}
                  height={18}
                />
              </span>
              <span>Company Brain Harness</span>
            </span>
            <p>
              Governed company memory for AI agents, teams, and operators.
            </p>
          </div>
          <div className="footer-links">
            <a href="#how-it-works">How It Works</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#setup">Setup</a>
            <a href="#governance">Governance</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
