import type { Metadata } from 'next';
import styles from './project.module.css';

export const metadata: Metadata = {
  title: 'Building the technology team behind a non-technical startup — WRKSTREAM',
  description: 'How WRKSTREAM helped a senior relocation startup turn a complex service business into a connected software platform, without hiring an internal technology department.',
  openGraph: { images: [] },
  twitter: { images: [] },
};

const Arrow = () => <span aria-hidden="true">↗</span>;
const BOOK = 'https://tidycal.com/cjmayer/15-minute-intro';
const bookProps = { href: BOOK, target: '_blank', rel: 'noopener noreferrer' };

// Flip to true once the render and its poster frame land in
// public/work/senior-relocation/. Until then the frame holds its own space so
// the hero never collapses or points at a missing file.
const FILM_READY = false;
const FILM = '/work/senior-relocation/c01-the-technology-team.mp4';
const POSTER = '/work/senior-relocation/c01-poster.jpg';

const FAQS: [string, string][] = [
  ['Can a non-technical founder build a software startup without a CTO?', 'Yes. A non-technical founder can work with a fractional product and technology partner to define requirements, select an architecture, manage development, and bring a software product to market. In this engagement, WRKSTREAM provided product leadership and coordinated technical execution without the startup hiring a full internal engineering department.'],
  ['What does a fractional product and technology partner do?', 'A fractional product and technology partner helps businesses translate goals into software decisions and working products. Responsibilities can include product strategy, roadmaps, vendor selection, workflow design, technical architecture, development management, and ongoing product evolution. Unlike a traditional development agency, the relationship extends into deciding what should be built and why.'],
  ['Can Glide be used to build a complex business application?', 'Glide can be an effective starting point for business applications involving structured data, permissions, operational workflows, and integrations. Its suitability depends on the requirements. In this project, Glide helped support the initial platform, while evolving technical requirements led to work on a more flexible architecture using Xano and WeWeb.'],
  ['When should a startup move beyond a no-code MVP?', 'A startup should evaluate its architecture when product requirements begin exceeding the flexibility, performance, integration, or data-management capabilities of its initial tools. That does not mean every successful MVP needs to be rebuilt. The decision should follow actual business and technical requirements.'],
];

export default function SeniorRelocationProject() {
  return <main className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    }) }} />

    <nav className={styles.nav}>
      <a className={styles.wordmark} href="/"><span>WRK</span>STREAM</a>
      <a className={styles.back} href="/#work">← Selected work</a>
      <a className={styles.navCta} {...bookProps}>Book an intro call <Arrow /></a>
    </nav>

    <header className={styles.hero}>
      <div className={styles.meta}><span>Client work / Senior living / Product + platform</span><span>Case 06</span></div>
      <div className={styles.heroGrid}>
        <div><p className={styles.kicker}>Fractional product &amp; technology leadership</p><h1>They had the relationships.<br/>They needed a <em>technology team.</em></h1></div>
        <div className={styles.intro}>
          <p>A senior relocation startup turned a complex service business into a connected software platform—without hiring an engineering department.</p>
          <small>Industry: senior living &amp; relocation<br/>Capabilities: product strategy · MVP development · workflow automation · systems architecture<br/>Technology: Glide · Airtable · Make · Xano · WeWeb</small>
        </div>
      </div>

      <div className={styles.film}>
        {FILM_READY
          ? <video controls preload="metadata" poster={POSTER} playsInline><source src={FILM} type="video/mp4"/></video>
          : <div className={styles.filmPending}><span>Case film</span><b>The Technology Team</b><span>82 seconds · in production</span></div>}
      </div>
      <p className={styles.caption}>Senior relocation platform / Product walkthrough</p>
    </header>

    <section className={styles.section}>
      <div className={styles.label}>01 / The challenge</div>
      <div className={styles.split}>
        <h2>A business built on relationships.<br/><em>An operation that needed technology.</em></h2>
        <div>
          <p>Helping someone transition into senior living involves far more than coordinating a move. Families, senior living communities, relocation specialists, and third-party service providers all need to work together.</p>
          <p>Every relocation creates a network of decisions, tasks, schedules, communication, and financial transactions. For an emerging startup, those relationships were the business—but managing them efficiently would require more than spreadsheets, email, and disconnected software.</p>
          <p>The founders understood the opportunity. They needed a partner who could translate that vision into a functioning product. They didn&rsquo;t need to hire an entire engineering department. They needed the capabilities of one.</p>
        </div>
      </div>
      <div className={styles.network}>
        {[['01','Families','Making a hard decision under time pressure, with questions at every step.'],['02','Communities','Referring residents in, and needing visibility once a relocation is underway.'],['03','Specialists','Coordinating the work, owning the schedule, and keeping everyone informed.'],['04','Suppliers','Bidding on, scheduling, and completing the services each move requires.']].map(([n,t,p])=>
          <article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}
      </div>
    </section>

    <section className={`${styles.section} ${styles.dark}`}>
      <div className={styles.label}>02 / Our role</div>
      <div className={styles.thesis}>
        <h2>More than developers.<br/><em>An extension of the founding team.</em></h2>
        <p>WRKSTREAM served as a fractional product and technology partner, bridging the founders&rsquo; business expertise and the technical execution needed to bring the platform to life. We defined the product, mapped the operational workflows, set technical priorities, and coordinated execution with our development partner, GoLittleBig. The goal wasn&rsquo;t to build an application—it was to create digital infrastructure that could support how the business operated and evolved.</p>
      </div>
      <div className={styles.flow}>
        {[['01','PRODUCT STRATEGY','Translating business needs into a roadmap, requirements, and practical priorities.'],['02','WORKFLOW ARCHITECTURE','Designing how residents, communities, specialists, and suppliers would interact.'],['03','PLATFORM DELIVERY','Coordinating an interconnected application built around the business’s operations.'],['04','SYSTEMS INTEGRATION','Connecting external services and automating repetitive processes.']].map(([n,t,p])=>
          <article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p><i>→</i></article>)}
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.label}>03 / The platform</div>
      <div className={styles.deliverables}>
        <div><p className={styles.kicker}>One platform. Multiple stakeholders.</p><h2>Not a collection of tools.<br/><em>A connected operation.</em></h2></div>
        <div className={styles.list}>
          {[['Resident and relationship management','A centralized system for resident profiles, family contacts, communities, and referral sources.'],['Relocation project management','A structured workflow for tracking relocations, assigning responsibilities, and monitoring progress.'],['Supplier coordination and bidding','Tools for organizing providers, defining service requirements, collecting bids, and coordinating work.'],['Community collaboration','Experiences that let participating communities initiate referrals and follow relocation progress.'],['Automation and connected systems','Integrations that moved information between systems instead of people retyping it.']].map(([t,d],i)=>
            <div key={t}><span>{`0${i+1}`}</span><div>{t}<small>{d}</small></div></div>)}
        </div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.label}>04 / The evolution</div>
      <div className={styles.evolution}>
        <h2>Build for today.<br/><em>Prepare for what&rsquo;s next.</em></h2>
        <div>
          <p>Early-stage software development is a balancing act. Build too little and the product can&rsquo;t support the business. Build too much and capital is consumed before the company has validated its assumptions.</p>
          <p>The initial platform used no-code and low-code technologies to deliver meaningful capability without the cost or lead time of conventional custom development. As requirements became more sophisticated, we began transitioning toward a more flexible architecture—preserving the business logic and operational knowledge established in the first platform.</p>
          <p>Technology choices were driven by business requirements, not attachment to a particular tool.</p>
        </div>
      </div>
      <div className={styles.stack}>
        <article><span>INITIAL PLATFORM</span><h3>Ship the operation</h3><ul><li>Glide application layer</li><li>Airtable as the data core</li><li>Make for automation</li><li>Third-party service integrations</li></ul></article>
        <div className={styles.arrow}>→</div>
        <article className={styles.next}><span>NEXT ARCHITECTURE</span><h3>Create room to grow</h3><ul><li>Xano backend services</li><li>WeWeb frontend</li><li>Same business logic, preserved</li><li>Greater flexibility and control</li></ul></article>
      </div>
    </section>

    <section className={styles.result}>
      <div className={styles.label}>05 / The outcome</div>
      <div className={styles.resultGrid}>
        <h2>Sophisticated technology.<br/>Lean execution.</h2>
        <div><p>The engagement demonstrated what a small, experienced product and engineering team can accomplish when business strategy and technical execution work together.</p></div>
      </div>
      <div className={styles.outcomes}>
        {[['01','A working platform','A connected application supporting residents, communities, specialists, suppliers, and the workflows linking them.'],['02','A team without the hires','Product leadership, architecture, engineering, and integrations through a flexible external partnership.'],['03','Capital efficiency','Delivered at a fraction of the investment estimated for conventional custom development.'],['04','A foundation to build on','An architecture and roadmap that evolved alongside the business.']].map(([n,t,p])=>
          <article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}
      </div>
      <blockquote>The real accomplishment wasn&rsquo;t the number of screens, integrations, or workflows. It was turning a business concept into working software—and giving a non-technical founding team a practical way to make technology decisions and move forward.<small>Delivered in collaboration with GoLittleBig, our independent development partner. Client identity withheld for confidentiality.</small></blockquote>
    </section>

    <section className={styles.section}>
      <div className={styles.label}>06 / Common questions</div>
      <div className={styles.faq}>
        {FAQS.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </div>
    </section>

    <footer className={styles.footer}>
      <p className={styles.kicker}>Have the business idea, but not the technology team?</p>
      <h2>Let&rsquo;s make it <span>real.</span></h2>
      <a {...bookProps}>Book a 15-minute intro <Arrow /></a><a className={styles.altCta} href="mailto:justin@wrkstream.com?subject=Build%20my%20product">Or email justin@wrkstream.com <Arrow /></a>
      <div><b><span>WRK</span>STREAM</b><small>Product + venture studio / Chicago</small></div>
    </footer>
  </main>;
}
