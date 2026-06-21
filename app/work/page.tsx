import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileSearch,
  Handshake,
  Layers3,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

import { AnimateIn } from "../components/animate-in";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://companyos.deleg8.dev";

const calendlyUrl = "https://calendly.com/sabirmgd/30min";

const title =
  "Work with Deleg8 | Company OS, installed and operated for your team";
const description =
  "Deleg8 installs, scopes, and runs your Company Brain Harness. Discovery call first, written scoping note within 48 hours, and senior AI engineering on tap once it ships.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    url: "/work",
    title,
    description,
    images: ["/cbh-og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/cbh-og-image.png"],
  },
};

const scopingSteps = [
  {
    icon: MessageSquare,
    title: "Discovery call",
    body: "Thirty minutes, free. We listen, ask sharp questions, and figure out whether what we build is actually right for you.",
  },
  {
    icon: FileSearch,
    title: "Written scoping note",
    body: "Within 48 hours of the call. What we propose to build, who needs to be involved on your side, what we will not touch, and a realistic timeline.",
  },
  {
    icon: ClipboardCheck,
    title: "Fixed-scope proposal",
    body: "One page. Phases, deliverables, a single fixed price, and the boundaries of the engagement. No retainers hidden inside project work.",
  },
  {
    icon: Rocket,
    title: "Kickoff",
    body: "We start the week you sign. Week-one deliverables ship by Friday so you see the brain working with real sources before anything else happens.",
  },
];

const sprintTimeline = [
  {
    week: "Week 1",
    title: "Registry, exclusion list, first three sources",
    body: "We write the exclusion list with you, register your first three low-risk sources, and stand up staging. By the end of the week, raw evidence is flowing into a governed staging area, not into the brain.",
  },
  {
    week: "Week 2",
    title: "Review queue, first promotions, Brain Owner training",
    body: "We add the review queue, walk your nominated Brain Owner through the daily ritual, and promote the first batch of evidence into the curated brain. Your team starts asking real questions and getting real answers.",
  },
  {
    week: "Week 3",
    title: "Expand to ten sources, restricted scopes, first weekly review",
    body: "We carefully widen the source registry to where the value is, draw the first restricted scopes (HR-adjacent, exec-only), and run the first weekly review with you alongside the Brain Owner.",
  },
  {
    week: "Week 4",
    title: "Operating rhythm, handover, written runbook",
    body: "We run the full daily and weekly cadence with your team driving and us coaching. You leave the engagement with a written runbook, a trained Brain Owner, and a brain that works.",
  },
];

const fractionalDeliverables = [
  "Continuous source onboarding as your team grows",
  "Weekly review queue triage alongside your Brain Operator",
  "New agent workflows shipped on a two-week cadence",
  "On-call for incidents and brain-related questions",
  "Quarterly architecture review and registry audit",
  "Direct access to the Deleg8 team on Slack or your tool of choice",
];

const fractionalBenefits = [
  {
    icon: Zap,
    title: "Speed",
    body: "We start in days, not the months it takes to hire a senior AI engineer. The first sprint usually ships within four weeks of the discovery call.",
  },
  {
    icon: Users,
    title: "Senior bench",
    body: "You get a focused team that has shipped this pattern before. No ramp-up, no learning your stack from scratch, no junior engineers learning on your time.",
  },
  {
    icon: ShieldCheck,
    title: "No headcount risk",
    body: "Month to month after a three-month minimum. Wind it down when your internal team can take it over. Wind it up again when something big lands.",
  },
];

const credibilityPoints = [
  {
    icon: Layers3,
    title: "We shipped the harness",
    body: "Company Brain Harness is one of the things we build at Deleg8. We have run the pattern across our own client work before we put it on a public site.",
  },
  {
    icon: Compass,
    title: "We think in depth, publicly",
    body: "Five long-form pieces on the company brain pattern, source governance, the Brain Owner role, the AGENTS.md vs CLAUDE.md standards question, and a 30-day bootstrap plan. All on this site.",
  },
  {
    icon: Handshake,
    title: "We work with senior teams",
    body: "Deleg8 is a small senior team. We do not take engagements where the fit is wrong, the scope is impossible, or the brief is unclear. The discovery call is where we figure that out together.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Work with Deleg8", item: `${siteUrl}/work` },
  ],
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#deleg8`,
      name: "Deleg8",
      description:
        "Senior AI engineering team that installs, scopes, and operates Company Brain Harness for teams adopting AI agents.",
      url: siteUrl,
      logo: `${siteUrl}/cbh-logo-icon.png`,
      founder: {
        "@type": "Person",
        name: "Sabir Moglad",
        sameAs: "https://www.linkedin.com/in/sabir-moglad/",
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/work#company-os-setup`,
      name: "Company OS Setup",
      description:
        "Discovery, scoping, and end-to-end installation of Company Brain Harness for your team. Scoped per company after the discovery call.",
      provider: { "@id": `${siteUrl}/#deleg8` },
      areaServed: "Worldwide",
      serviceType: "AI infrastructure installation",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/work#fractional-ai-engineering`,
      name: "Fractional AI Engineering",
      description:
        "Ongoing senior AI engineering capacity from Deleg8 once your Company OS is live. Source onboarding, agent workflows, quarterly audits.",
      provider: { "@id": `${siteUrl}/#deleg8` },
      areaServed: "Worldwide",
      serviceType: "Fractional AI engineering",
    },
  ],
};

export default function WorkPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <header className="topbar">
        <a href="/" className="brand" aria-label="Company Brain Harness home">
          <span className="brand-mark">
            <img src="/cbh-logo-icon.png" alt="" width={20} height={20} />
          </span>
          <span>Company Brain Harness</span>
        </a>
        <nav className="nav-links" aria-label="Page sections">
          <a href="/#how-it-works">How It Works</a>
          <a href="/#use-cases">Use Cases</a>
          <a href="/blog">Blog</a>
          <a href="/work">Work with us</a>
        </nav>
        <a className="cta-nav" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
          Book a call <ArrowRight size={14} />
        </a>
      </header>

      <section className="hero">
        <div className="hero-bg" />
        <div className="container">
          <div className="hero-content">
            <AnimateIn>
              <div className="eyebrow">
                <Handshake size={14} /> Work with Deleg8
              </div>
              <h1>
                Company OS, <span className="text-gradient">installed and operated</span> by Deleg8
              </h1>
              <p className="hero-sub">
                We install the harness, scope your sources, train your Brain Owner,
                and stay around to keep it running. Every company brain is different,
                so every engagement is scoped after a discovery call. No two
                installations look the same, and the proposal you get back reflects
                that.
              </p>
              <div className="hero-actions">
                <a
                  className="btn btn-primary btn-lg"
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a discovery call <ArrowRight size={16} />
                </a>
                <a className="btn btn-outline btn-lg" href="#how-we-scope">
                  How we scope it
                </a>
              </div>
              <div className="trust-row">
                <span>
                  <CheckCircle2 size={14} /> Thirty-minute discovery call
                </span>
                <span>
                  <CheckCircle2 size={14} /> Written scoping note within 48 hours
                </span>
                <span>
                  <CheckCircle2 size={14} /> One-page fixed-scope proposal
                </span>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="section" id="company-os-setup">
        <div className="container">
          <AnimateIn>
            <div className="section-header">
              <p className="kicker">What we build</p>
              <h2>Company OS Setup, scoped to your team</h2>
              <p>
                The Company OS is the harness installed, configured, and tuned for
                your team. Source registry, exclusion list, staging, review queue,
                curated brain, and the schema that wires it all into Claude Code or
                Codex. We do the build, your team owns the result.
              </p>
            </div>
          </AnimateIn>

          <div id="how-we-scope">
            <AnimateIn>
              <h3 className="subhead">How we scope it</h3>
            </AnimateIn>
            <div className="grid-3 scoping-grid">
              {scopingSteps.map((step, i) => (
                <AnimateIn key={step.title} delay={i * 80}>
                  <div className="card">
                    <span className="card-icon">
                      <step.icon size={20} />
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

          <AnimateIn>
            <h3 className="subhead subhead-spaced">What ships, week by week</h3>
            <p className="subhead-sub">
              The shape of a typical four-week setup engagement. Real timelines
              depend on your sources, your governance posture, and how many people
              are in the room. We scope that on the call.
            </p>
          </AnimateIn>
          <div className="timeline">
            {sprintTimeline.map((row, i) => (
              <AnimateIn key={row.week} delay={i * 60}>
                <div className="timeline-row">
                  <div className="timeline-week">{row.week}</div>
                  <div className="timeline-body">
                    <h3>{row.title}</h3>
                    <p>{row.body}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
            <div className="inline-cta">
              <a
                className="btn btn-primary"
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a discovery call <ArrowRight size={16} />
              </a>
              <span className="inline-cta-note">
                Pricing scoped after the call. Not all company brains are equal.
              </span>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-alt" id="fractional-ai-engineering">
        <div className="container">
          <div className="split">
            <AnimateIn>
              <div>
                <p className="kicker">How we stay involved</p>
                <h2>Fractional AI engineering, after the brain ships</h2>
                <p>
                  Most teams want us to stay around once the setup ends. Sources
                  keep changing, agents need new workflows, and the brain needs an
                  experienced hand on the wheel during the first few months in
                  production. Fractional engagement is how we do that, without
                  forcing you to hire a permanent senior AI engineering team.
                </p>
                <p>
                  We block a sensible amount of senior engineering time each month
                  for your account, charge a flat monthly fee for it, and report on
                  what we shipped. Three-month minimum so we both have time to do
                  real work together, then month-to-month after that.
                </p>
              </div>
            </AnimateIn>
            <div>
              <AnimateIn>
                <div className="deliverables-card">
                  <h3>What you get every month</h3>
                  <ul className="check-list">
                    {fractionalDeliverables.map((d) => (
                      <li key={d}>
                        <CheckCircle2 size={16} /> <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            </div>
          </div>

          <div className="grid-3 fractional-benefits">
            {fractionalBenefits.map((b, i) => (
              <AnimateIn key={b.title} delay={i * 80}>
                <div className="card">
                  <span className="card-icon">
                    <b.icon size={20} />
                  </span>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
            <div className="inline-cta">
              <a
                className="btn btn-primary"
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a discovery call <ArrowRight size={16} />
              </a>
              <span className="inline-cta-note">
                Same call for both. We figure out together which shape fits.
              </span>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section" id="why-deleg8">
        <div className="container">
          <AnimateIn>
            <div className="section-header center">
              <p className="kicker">Why Deleg8</p>
              <h2>A small senior team that has shipped this pattern</h2>
              <p className="section-sub">
                Deleg8 is a small senior team building production-grade AI
                infrastructure for teams adopting agents. Company Brain Harness is
                one of the tools we build.
              </p>
            </div>
          </AnimateIn>

          <div className="grid-3">
            {credibilityPoints.map((p, i) => (
              <AnimateIn key={p.title} delay={i * 80}>
                <div className="card">
                  <span className="card-icon">
                    <p.icon size={20} />
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
            <div className="founder-card">
              <div className="founder-avatar" aria-hidden="true">SM</div>
              <div className="founder-body">
                <div className="founder-name">Sabir Moglad</div>
                <div className="founder-role">Founder, Deleg8</div>
                <p>
                  I run Deleg8 out of a small senior team focused on production AI
                  infrastructure for teams. The discovery call is with me. The
                  scoping note is written by me. If we end up working together, I
                  am the person you talk to.
                </p>
                <a
                  className="founder-link"
                  href="https://www.linkedin.com/in/sabir-moglad/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .78 23.2 0 22.22 0Z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn>
            <div className="reading-list">
              <h3 className="subhead">If you want to read how we think first</h3>
              <ul>
                <li>
                  <Link href="/blog/beyond-karpathys-llm-wiki-source-approval">
                    Beyond Karpathy&apos;s LLM Wiki: Why Your Company Brain Needs a Source-Approval Layer
                  </Link>
                </li>
                <li>
                  <Link href="/blog/what-belongs-outside-your-company-brain">
                    What Belongs Outside Your Company Brain: The Exclusion List Every Founder Should Write This Week
                  </Link>
                </li>
                <li>
                  <Link href="/blog/brain-owner-playbook-daily-weekly-monthly">
                    The Brain Owner Playbook: Daily, Weekly, Monthly Rhythm for Your Company&apos;s AI Memory
                  </Link>
                </li>
                <li>
                  <Link href="/blog/agents-md-vs-claude-md-vs-skill-md-teams">
                    AGENTS.md vs CLAUDE.md vs SKILL.md: The 2026 Field Guide for Teams
                  </Link>
                </li>
                <li>
                  <Link href="/blog/30-day-plan-bootstrap-company-brain">
                    From Onboarding Doc to Org Operating System: A 30-Day Plan to Bootstrap Your Company Brain
                  </Link>
                </li>
              </ul>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cta" id="book">
        <div className="container">
          <div className="cta-content">
            <AnimateIn>
              <h2>Ready to talk?</h2>
              <p>
                Book a 30-minute discovery call. We will listen, ask sharp
                questions, and send you a written scoping note within 48 hours. If
                we are not the right team for what you need, we will tell you.
              </p>
              <a
                className="btn btn-primary btn-lg"
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarClock size={18} /> Book the discovery call
              </a>
              <p className="cta-note">
                Pricing scoped per company. We do not list rate cards because no
                two engagements are the same.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <span className="brand footer-brand">
              <span className="brand-mark">
                <img src="/cbh-logo-icon.png" alt="" width={18} height={18} />
              </span>
              <span>Company Brain Harness</span>
            </span>
            <p>Governed company memory for AI agents, teams, and operators. Built by Deleg8.</p>
          </div>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/work">Work with us</Link>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              Book a call
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
