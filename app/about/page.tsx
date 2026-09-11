import type { Metadata } from 'next';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Justin Mayer | WRKSTREAM',
  description:
    'Founder, builder, and product operator. Twenty years across hardware, software, AI, startups, and Fortune 100 businesses.',
  openGraph: {
    title: 'About Justin Mayer | WRKSTREAM',
    description: 'I build my way to better answers.',
    images: [{ url: '/about/justin-mayer-product-lab.jpg', width: 1536, height: 1024, alt: 'Justin Mayer in his product lab' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Justin Mayer | WRKSTREAM',
    description: 'I build my way to better answers.',
    images: ['/about/justin-mayer-product-lab.jpg'],
  },
};

const Arrow = () => <span aria-hidden="true">↗</span>;
const Down = () => <span aria-hidden="true">↓</span>;
const BOOK = 'https://tidycal.com/cjmayer/15-minute-intro';
const bookProps = { href: BOOK, target: '_blank', rel: 'noopener noreferrer' };

const signals = [
  ['20+', 'Years building'],
  ['03', 'Companies founded'],
  ['$420M', 'Global product portfolio'],
  ['09', 'Patents'],
  ['01', 'Venture exit'],
];

const disciplines = [
  ['01', 'Understand', 'Listen for the job people are trying to do, especially when their first answer points in the wrong direction.'],
  ['02', 'Make it visible', 'A prototype, model, or working system gives people something concrete to react to.'],
  ['03', 'Ship and learn', 'Reality produces better information than another month of internal debate.'],
];

export default function AboutPage() {
  return <main className={styles.page}>
    <nav className={styles.nav} aria-label="Primary navigation">
      <a className={styles.wordmark} href="/" aria-label="WRKSTREAM home"><span>WRK</span>STREAM</a>
      <a className={styles.back} href="/#work">← Selected work</a>
      <a className={styles.navCta} {...bookProps}>Book an intro call <Arrow /></a>
    </nav>

    <section className={`${styles.hero} ${styles.shell}`} id="top">
      <div className={styles.eyebrowRow}><p>Founder / Builder / Product operator</p><p>Chicago / Working everywhere</p></div>
      <h1>I build my way to <em>better answers.</em></h1>
      <div className={styles.heroLower}>
        <div className={styles.heroIntro}>
          <h2>Justin Mayer</h2>
          <p>I help companies understand what is worth building, then get close enough to the work to make it real. My career has crossed hardware, software, AI, startups, and Fortune 100 businesses.</p>
          <a className={styles.textLink} href="#oasis">See how I work <Down /></a>
        </div>
        <figure className={styles.heroImage}>
          <div className={styles.portraitFrame}>
            <img fetchPriority="high" src="/about/justin-mayer-product-lab.jpg" alt="Justin Mayer in his product lab"/>
            <div className={styles.portraitNote} aria-hidden="true"><span>MECH ENG</span><b>→</b><span>PRODUCT</span><b>→</b><span>FOUNDER</span></div>
          </div>
          <figcaption><span>Justin Mayer / WRKSTREAM</span><span>Builder since before AI was a button</span></figcaption>
        </figure>
      </div>
    </section>

    <section className={styles.signalBand} aria-label="Career highlights">
      <div className={`${styles.signalGrid} ${styles.shell}`}>
        {signals.map(([value,label])=><div className={styles.signal} key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </div>
    </section>

    <section className={`${styles.caseStudy} ${styles.shell}`} id="oasis">
      <div className={styles.sectionNumber}>01 / The smart water cooler</div>
      <div className={styles.caseHead}>
        <h2>They rejected the label. Their customers wanted the outcome.</h2>
        <p>Oasis, a Culligan company, asked me to help shape its product roadmap. The team opened with a firm constraint: no smart water coolers. Earlier research said the market found them too expensive.</p>
      </div>
      <div className={styles.storyBoard} aria-label="Oasis discovery process">
        <div className={`${styles.storyCell} ${styles.storyQuote}`}><span>The brief</span><blockquote>“We don’t want smart water coolers.”</blockquote></div>
        <div className={`${styles.storyCell} ${styles.painList}`}><span>What the research revealed</span><ul><li>Coolers disappeared inside massive buildings.</li><li>High technician turnover erased field knowledge.</li><li>Service documentation failed the people doing the work.</li></ul></div>
        <div className={`${styles.storyCell} ${styles.diagramCell}`}><span>The job to be done</span><div className={styles.systemMap}><div>COOLER</div><b>→</b><div>GRID</div><b>→</b><div>DATABASE</div></div><p>Find it. Understand it. Service it.</p></div>
        <div className={`${styles.storyCell} ${styles.storyResult}`}><span>The customer response</span><blockquote>“That’s what a smart water cooler is? I want that.”</blockquote></div>
      </div>
      <div className={styles.caseLesson}><p className={styles.kicker}>The lesson</p><p>The first research tested a category name. The second uncovered the work customers needed done. Better questions did not validate the original roadmap. They revealed a more valuable one.</p></div>
    </section>

    <section className={styles.method} id="method"><div className={styles.shell}>
      <div className={styles.sectionNumber}>02 / How I work</div>
      <div className={styles.methodTitle}><h2>Curiosity with a build button.</h2><p>I use Jobs to Be Done, Strategyzer, design thinking, and sprint methods as working tools. The framework matters less than the discipline: understand the problem, make the idea tangible, and learn from reality.</p></div>
      <div className={styles.disciplineGrid}>{disciplines.map(([n,title,text])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className={styles.processLine} aria-label="Product development process"><span>UNDERSTAND</span><b>→</b><span>DESIGN</span><b>→</b><span>BUILD</span><b>→</b><span>SHIP</span><b>→</b><span>LEARN</span></div>
    </div></section>

    <section className={`${styles.range} ${styles.shell}`} id="range">
      <div className={styles.sectionNumber}>03 / Range with a purpose</div>
      <div className={styles.rangeIntro}><h2>Different mediums. The same discipline.</h2><p>Hardware made constraints real. Software showed how every system touches another. Running companies made customer truth impossible to avoid. AI makes all of it move faster, including the mistakes.</p></div>
      <div className={styles.workGrid}>
        <a className={`${styles.workCard} ${styles.workCardPhoto}`} href="/work/life-fitness"><img loading="lazy" decoding="async" src="/work/life-fitness-treadmill-poster.jpg" alt="Life Fitness connected treadmill"/><div className={styles.workCopy}><span>Fortune 100 / Product leadership</span><h3>Life Fitness</h3><p>Led connected cardio and workplace wellness portfolios across a $420M global business.</p></div></a>
        <a className={`${styles.workCard} ${styles.patentCard}`} href="/work/sketch-to-ip"><div className={styles.patentMark}>09</div><div className={styles.workCopy}><span>From sketch to IP</span><h3>InMovement</h3><p>Moved ideas through research, prototypes, manufacturing, launch, and nine patents.</p></div></a>
        <article className={`${styles.workCard} ${styles.darkCard}`}><div className={styles.exitMark}>ACQUIRED<br/>2021</div><div className={styles.workCopy}><span>AI / Startup / Go to market</span><h3>Encube</h3><p>Turned machine-learning technology into a product Fortune 1000 buyers could understand and adopt.</p></div></article>
        <article className={`${styles.workCard} ${styles.cobaltCard}`}><div className={styles.ratioMark}>$200K<br/><small>→ $20K</small></div><div className={styles.workCopy}><span>Software / Operations</span><h3>LivNow</h3><p>Built the operating platform at roughly one-tenth the conventional development estimate.</p></div></article>
      </div>
    </section>

    <section className={styles.designBelief}><div className={`${styles.shell} ${styles.beliefLayout}`}>
      <div className={styles.sectionNumber}>04 / A working belief</div>
      <blockquote>“Great design is rarely decoration. It removes what does not matter and gives the important thing nowhere to hide.”</blockquote>
      <p>That applies to a product interface, a roadmap, a business model, or a room full of executives trying to make a hard decision.</p>
    </div></section>

    <section className={`${styles.personal} ${styles.shell}`}>
      <div><div className={styles.sectionNumber}>05 / The human part</div><h2>Builder is the shortest description.</h2></div>
      <div className={styles.personalCopy}>
        <p>I trained as a mechanical engineer, earned an MBA in supply chain, managed products inside global companies, taught business, founded and co-founded three companies, acquired and operated small businesses, and learned to build software without waiting for permission from a traditional development team.</p>
        <p>The titles changed. The work did not. Find the real problem. Bring the right people into it. Make something useful. See what reality says.</p>
        <div className={styles.influences}><span>Ideas I return to</span><p>Simon Sinek on purpose. Adam Grant on rethinking. Mark Manson on choosing what deserves your attention.</p></div>
      </div>
    </section>

    <footer className={styles.footer}>
      <div className={`${styles.shell} ${styles.footerGrid}`}>
        <div><p>WRKSTREAM / Available for select projects</p><h2>What are you building?</h2></div>
        <div>
          <p>If it needs to become real, useful, sellable, or operational, we should probably talk.</p>
          <a className={styles.footerCta} {...bookProps}>Book a 15-minute intro <Arrow /></a>
          <div className={styles.footerAlt}>
            <a href="mailto:justin@wrkstream.com?subject=Start%20a%20project">Or email justin@wrkstream.com <Arrow /></a>
            <a href="https://www.linkedin.com/in/cjustinmayer/" target="_blank" rel="noopener noreferrer">Justin Mayer on LinkedIn <Arrow /></a>
          </div>
        </div>
      </div>
      <div className={`${styles.shell} ${styles.footerBottom}`}><span>WRKSTREAM</span><span>Product + venture studio</span><span>© 2026 / Chicago</span></div>
    </footer>
  </main>;
}
