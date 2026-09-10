import type { Metadata } from 'next';
import styles from './project.module.css';

export const metadata: Metadata = {
  title: 'Enterprise AI Advisory | WRKSTREAM',
  description: 'Executive-sponsored advisory that reframed a multi-year, seven-figure AI program as a focused MVP that could prove value in weeks.',
  openGraph: {
    title: 'Enterprise AI Advisory | WRKSTREAM',
    description: 'From a multi-year transformation program to a focused, five-figure AI MVP.',
    images: [{ url: '/work/ai-working-session.jpg', width: 1672, height: 941, alt: 'Collaborative AI strategy working session' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise AI Advisory | WRKSTREAM',
    description: 'From a multi-year transformation program to a focused, five-figure AI MVP.',
    images: ['/work/ai-working-session.jpg'],
  },
};

const Arrow = () => <span aria-hidden="true">↗</span>;
const BOOK = 'https://tidycal.com/cjmayer/15-minute-intro';
const bookProps = { href: BOOK, target: '_blank', rel: 'noopener noreferrer' };

const contributions = [
  ['01', 'Pressure-test the diagnosis', 'Validate the patterns emerging across functions and separate individual productivity wins from enterprise capability.'],
  ['02', 'Clarify the leadership gap', 'Make ownership explicit. Tools could not solve the absence of a dedicated champion, governance, and coordinated execution.'],
  ['03', 'Right-size the investment', 'Challenge the multi-year, seven-figure assumption and reframe the opportunity as a five-figure MVP that could prove value in weeks.'],
  ['04', 'Frame secure adoption', 'Address privacy, approved platforms, unstructured knowledge, and sensitive use cases as design constraints from the start.'],
];

const outcomes = [
  ['PEOPLE + SYSTEMS', 'Create safer, more effective workflows and free people for higher-value work.'],
  ['INTERNAL PROCESS', 'Reduce time spent on research, analysis, reporting, and other detail-heavy work.'],
  ['CUSTOMER FOCUS', 'Improve service, knowledge access, communications, and customer-facing experiences.'],
  ['FINANCIAL OUTCOMES', 'Connect the operating gains to differentiation, retention, and growth.'],
];

const phases = [
  ['01', 'FOCUS', 'First', 'Choose one valuable workflow with executive ownership, clear users, and a measurable business outcome.'],
  ['02', 'BUILD', 'Weeks', 'Create a secure, useful MVP without waiting for every enterprise data and integration problem to be solved.'],
  ['03', 'PROVE', 'In use', 'Put it into real work, measure adoption and value, and learn what the organization actually needs next.'],
  ['04', 'SCALE', 'After proof', 'Expand the investment only when evidence supports the next use case, integration, or organizational capability.'],
];

export default function EnterpriseAIAdvisoryProject() {
  return <main className={styles.page}>
    <nav className={styles.nav}>
      <a className={styles.wordmark} href="/"><span>WRK</span>STREAM</a>
      <a className={styles.back} href="/#work">← Selected work</a>
      <a className={styles.navCta} {...bookProps}>Book an intro call <Arrow /></a>
    </nav>

    <header className={styles.hero}>
      <div className={styles.meta}><span>Advisory / Enterprise AI / Business transformation</span><span>Case 04</span></div>
      <div className={styles.heroGrid}>
        <div><p className={styles.kicker}>Clarke / Enterprise AI initiative</p><h1>AI was already everywhere.<br/><em>Strategy wasn’t.</em></h1></div>
        <div className={styles.intro}><p>Brought in with executive sponsorship to turn a sprawling transformation idea into a practical first move the business could fund, build, and learn from.</p></div>
      </div>

      <div className={styles.film}>
        <img src="/work/ai-working-session.jpg" alt="Collaborative AI strategy working session"/>
        <div className={styles.filmMark}><span>AI</span><small>Advisory / Strategy / 2025</small></div>
      </div>
      <p className={styles.caption}>Representative working-session visual</p>

      <div className={styles.metrics}>
        <div><b>7 fig.</b><span>Initial program assumption</span></div>
        <div><b>5 fig.</b><span>Practical MVP investment</span></div>
        <div><b>Years</b><span>Original horizon</span></div>
        <div><b>Weeks</b><span>Path to first value</span></div>
      </div>
    </header>

    <section className={styles.section}>
      <div className={styles.label}>01 / The situation</div>
      <div className={styles.split}>
        <h2>Individual momentum.<br/><em>No enterprise system.</em></h2>
        <div><p>Across Clarke, people were already using ChatGPT, Copilot, Claude, Power BI, and other tools. Some functions were seeing meaningful gains. Others were barely beginning.</p><p>The common problem was not enthusiasm. It was the absence of a coordinated operating model for ownership, data, privacy, training, prioritization, and scale.</p></div>
      </div>
      <div className={styles.signalGrid}>
        <article><span>THE MOMENTUM</span><h3>Organic adoption</h3><p>Useful experimentation was happening in customer care, HR, marketing, IT, operations, finance, R&amp;D, regulatory, sales, and manufacturing.</p></article>
        <article className={styles.barrier}><span>THE BARRIERS</span><h3>Fragmented execution</h3><p>Master data, privacy, change management, inconsistent processes, and the lack of dedicated AI leadership limited organization-wide progress.</p></article>
      </div>
    </section>

    <section className={styles.darkSection}>
      <div className={styles.label}>02 / The advisory role</div>
      <div className={styles.darkIntro}><h2>Turn the research into <em>decisions.</em></h2><p>Clarke’s Chief Customer Experience Officer brought Justin into one of the company’s strategic initiatives as an external advisor. Cross-functional research created the evidence base. The advisory work validated the findings, challenged the scale of the proposed response, and shaped an implementation model the organization could actually carry.</p></div>
      <div className={styles.contributions}>
        {contributions.map(([n,t,p]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.label}>03 / The business frame</div>
      <div className={styles.frameIntro}><p className={styles.kicker}>AI as business infrastructure</p><h2>Four outcomes.<br/><em>One connected system.</em></h2><p>The work deliberately moved past a list of tools. Opportunities were organized around how AI could improve the business while preserving the controls required for responsible adoption.</p></div>
      <div className={styles.outcomes}>
        {outcomes.map(([t,p],i) => <article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></article>)}
      </div>
    </section>

    <section className={styles.documents}>
      <div className={styles.label}>04 / What the project produced</div>
      <div className={styles.documentGrid}>
        <div className={styles.documentIntro}><h2>Advice leaders could <em>use.</em></h2><p>The final package connected diagnosis, choices, guardrails, and next steps. It was designed to support an executive decision, not merely document that AI mattered.</p></div>
        <div className={styles.paperStack} aria-label="Three project deliverables">
          <article className={styles.paper}><span>01 / EXECUTIVE SUMMARY</span><h3>Business Transformation through Generative AI Adoption</h3><p>Current state, strategic opportunity, implementation scenarios, critical success factors, and a recommended path.</p></article>
          <article className={styles.paper}><span>02 / READINESS ASSESSMENT</span><h3>Cross-functional findings</h3><p>Department-level adoption, opportunities, barriers, readiness, and recurring organizational patterns.</p></article>
          <article className={styles.paper}><span>03 / GOVERNANCE</span><h3>Draft workplace AI policy</h3><p>Approved uses, sensitive-data boundaries, human review, training, accountability, and reporting.</p></article>
        </div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.label}>05 / The right-sized path</div>
      <div className={styles.pathIntro}><h2>Start with proof.<br/><em>Not a transformation program.</em></h2><p>The core advisory move was to cut through the assumed scale of the solution. A useful first version did not require a couple million dollars or years. A tightly scoped MVP could be built for tens of thousands and put to work in weeks.</p></div>
      <div className={styles.phases}>
        {phases.map(([n,t,time,p]) => <article key={n}><div><span>{n}</span><small>{time}</small></div><h3>{t}</h3><p>{p}</p></article>)}
      </div>
    </section>

    <section className={styles.result}>
      <div className={styles.label}>06 / The result</div>
      <div className={styles.resultGrid}>
        <h2>Millions became thousands. Years became weeks.</h2>
        <div><p>The advice changed the shape of the decision. Instead of committing to a broad transformation program upfront, Clarke could choose one important use case, prove value quickly, and let evidence determine the next investment.</p><p>The tangible output was a smaller, faster, more credible path into implementation, supported by cross-functional research, governance thinking, and executive sponsorship.</p></div>
      </div>
      <div className={styles.credit}><span>PROJECT CONTEXT</span><p>Clarke enterprise AI initiative, supported by the Chief Customer Experience Officer. The initiative included a DePaul capstone workstream that contributed cross-functional research and supporting deliverables. Justin Mayer advised on business integration, implementation scope, cost, timeline, governance, and the path to an MVP.</p></div>
    </section>

    <footer className={styles.footer}>
      <p className={styles.kicker}>Leading something bigger?</p>
      <h2>Turn AI interest into an <span>operating plan.</span></h2>
      <a {...bookProps}>Book a 15-minute intro <Arrow /></a><a className={styles.altCta} href="mailto:justin@wrkstream.com?subject=Enterprise%20AI%20advisory">Or email justin@wrkstream.com <Arrow /></a>
      <div><b><span>WRK</span>STREAM</b><small>Product + venture studio / Chicago</small></div>
    </footer>
  </main>;
}
