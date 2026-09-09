import type { Metadata } from 'next';
import styles from './project.module.css';

export const metadata: Metadata = {
  title: 'Enterprise AI Advisory | WRKSTREAM',
  description: 'External advisory support that helped turn cross-functional AI research into an enterprise roadmap for Clarke.',
  openGraph: {
    title: 'Enterprise AI Advisory | WRKSTREAM',
    description: 'From fragmented adoption to a decision-ready enterprise AI roadmap.',
    images: [{ url: '/work/ai-working-session.jpg', width: 1672, height: 941, alt: 'Collaborative AI strategy working session' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise AI Advisory | WRKSTREAM',
    description: 'From fragmented adoption to a decision-ready enterprise AI roadmap.',
    images: ['/work/ai-working-session.jpg'],
  },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const contributions = [
  ['01', 'Pressure-test the diagnosis', 'Validate the patterns emerging across functions and separate individual productivity wins from enterprise capability.'],
  ['02', 'Clarify the leadership gap', 'Make ownership explicit. Tools could not solve the absence of a dedicated champion, governance, and coordinated execution.'],
  ['03', 'Sequence the investment', 'Move from a broad transformation mandate to a phased path that could generate learning before the hardest integrations.'],
  ['04', 'Frame secure adoption', 'Address privacy, approved platforms, unstructured knowledge, and sensitive use cases as design constraints from the start.'],
];

const outcomes = [
  ['PEOPLE + SYSTEMS', 'Create safer, more effective workflows and free people for higher-value work.'],
  ['INTERNAL PROCESS', 'Reduce time spent on research, analysis, reporting, and other detail-heavy work.'],
  ['CUSTOMER FOCUS', 'Improve service, knowledge access, communications, and customer-facing experiences.'],
  ['FINANCIAL OUTCOMES', 'Connect the operating gains to differentiation, retention, and growth.'],
];

const phases = [
  ['01', 'FOUNDATION', 'Months 1–4', 'Leadership, enterprise tools, an internal knowledge layer, and usage governance.'],
  ['02', 'CUSTOMER', 'Months 5–10', 'Customer-facing applications, marketing capabilities, and regulatory validation.'],
  ['03', 'INTEGRATION', 'Months 11–16', 'Predictive analytics, advanced workflows, and cross-functional data coordination.'],
  ['04', 'ADVANTAGE', 'Months 17+', 'A repeatable innovation system that turns learning into ongoing business advantage.'],
];

export default function EnterpriseAIAdvisoryProject() {
  return <main className={styles.page}>
    <nav className={styles.nav}>
      <a className={styles.wordmark} href="/"><span>WRK</span>STREAM</a>
      <a className={styles.back} href="/#work">← Selected work</a>
      <a className={styles.navCta} href="mailto:hello@wrkstream.com?subject=Enterprise%20AI%20advisory">Start a conversation <Arrow /></a>
    </nav>

    <header className={styles.hero}>
      <div className={styles.meta}><span>Advisory / Enterprise AI / Business transformation</span><span>Case 04</span></div>
      <div className={styles.heroGrid}>
        <div><p className={styles.kicker}>Clarke / DePaul leadership capstone</p><h1>AI was already everywhere.<br/><em>Strategy wasn’t.</em></h1></div>
        <div className={styles.intro}><p>External advisory support helped turn cross-functional research into a practical enterprise AI roadmap with clear leadership, governance, and sequencing.</p></div>
      </div>

      <div className={styles.film}>
        <img src="/work/ai-working-session.jpg" alt="Collaborative AI strategy working session"/>
        <div className={styles.filmMark}><span>AI</span><small>Advisory / Strategy / 2025</small></div>
      </div>
      <p className={styles.caption}>Representative working-session visual</p>

      <div className={styles.metrics}>
        <div><b>10</b><span>Functions studied</span></div>
        <div><b>26+</b><span>Clarke coworkers engaged</span></div>
        <div><b>3</b><span>Implementation scenarios</span></div>
        <div><b>18</b><span>Months in the recommended path</span></div>
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
      <div className={styles.darkIntro}><h2>Turn the research into <em>decisions.</em></h2><p>A DePaul leadership capstone team led the internal discovery and departmental analysis. Justin joined as an external advisor to validate the findings, challenge the assumptions, and help shape an implementation model the organization could actually carry.</p></div>
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
      <div className={styles.label}>05 / The recommended path</div>
      <div className={styles.pathIntro}><h2>Crawl. Walk. Run.<br/><em>Then keep learning.</em></h2><p>The recommendation favored a phased 18-month program over a high-risk big bang or a pilot too small to demonstrate enterprise value.</p></div>
      <div className={styles.phases}>
        {phases.map(([n,t,time,p]) => <article key={n}><div><span>{n}</span><small>{time}</small></div><h3>{t}</h3><p>{p}</p></article>)}
      </div>
    </section>

    <section className={styles.result}>
      <div className={styles.label}>06 / The result</div>
      <div className={styles.resultGrid}>
        <h2>A broad AI mandate became a decision-ready plan.</h2>
        <div><p>Clarke’s leadership received a researched view of current adoption, three implementation choices, a recommended sequence, and a draft governance foundation.</p><p>This was an advisory engagement. The result was clarity, alignment, and a practical route into implementation. It was not a claim that enterprise transformation had already occurred.</p></div>
      </div>
      <div className={styles.credit}><span>PROJECT CONTEXT</span><p>DePaul leadership capstone with Clarke. Cross-functional research and deliverables developed by the capstone team with executive sponsorship from Clarke and external AI integration guidance from Justin Mayer.</p></div>
    </section>

    <footer className={styles.footer}>
      <p className={styles.kicker}>Leading something bigger?</p>
      <h2>Turn AI interest into an <span>operating plan.</span></h2>
      <a href="mailto:hello@wrkstream.com?subject=Enterprise%20AI%20advisory">Start a conversation <Arrow /></a>
      <div><b><span>WRK</span>STREAM</b><small>Product + venture studio / Chicago</small></div>
    </footer>
  </main>;
}
