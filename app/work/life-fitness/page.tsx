import type { Metadata } from 'next';
import styles from './project.module.css';

export const metadata: Metadata = {
  title: 'Life Fitness Portfolio | WRKSTREAM',
  description: 'Connected cardio, workplace wellness, and global product leadership across a $420M Life Fitness portfolio.',
  openGraph: {
    title: 'Life Fitness Portfolio | WRKSTREAM',
    description: 'Connected cardio, workplace wellness, and global product leadership across a $420M portfolio.',
    images: [{ url: '/work/life-fitness-treadmill-poster.jpg', width: 1280, height: 720, alt: 'Life Fitness treadmill in motion' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Life Fitness Portfolio | WRKSTREAM',
    description: 'Connected cardio, workplace wellness, and global product leadership across a $420M portfolio.',
    images: ['/work/life-fitness-treadmill-poster.jpg'],
  },
};

const Arrow = () => <span aria-hidden="true">↗</span>;
const BOOK = 'https://tidycal.com/cjmayer/15-minute-intro';
const bookProps = { href: BOOK, target: '_blank', rel: 'noopener noreferrer' };

const portfolio = [
  {
    number: '01',
    title: 'Connected cardio',
    copy: 'Next-generation cardio products brought hardware, integrated software, and digital experiences into one product roadmap for a $100M line.',
  },
  {
    number: '02',
    title: 'InMovement',
    copy: 'A workplace wellness portfolio moved from board approval to launch in nine months, roughly half the typical development timeline.',
  },
  {
    number: '03',
    title: 'Cybex integration',
    copy: 'Product strategy and portfolio decisions helped bring Cybex into the Life Fitness family following the acquisition.',
  },
];

export default function LifeFitnessProject() {
  return <main className={styles.page}>
    <nav className={styles.nav}>
      <a className={styles.wordmark} href="/"><span>WRK</span>STREAM</a>
      <a className={styles.back} href="/#work">← Selected work</a>
      <a className={styles.navCta} {...bookProps}>Book an intro call <Arrow /></a>
    </nav>

    <header className={styles.hero}>
      <div className={styles.meta}><span>Product leadership / Fitness / Hardware</span><span>Case 03</span></div>
      <div className={styles.heroGrid}>
        <div><p className={styles.kicker}>Life Fitness</p><h1>Products built<br/>to <em>move.</em></h1></div>
        <div className={styles.intro}><p>Five years, three promotions, and a product remit spanning connected cardio, workplace wellness, and a major portfolio integration.</p></div>
      </div>

      <div className={styles.film}>
        <img src="/work/life-fitness-treadmill-poster.jpg" alt="Life Fitness treadmill shown in motion"/>
        <div className={styles.filmMark}><span>LF</span><small>Product / Portfolio / 2014–2019</small></div>
      </div>
      <p className={styles.caption}>Life Fitness / Connected cardio product experience</p>

      <div className={styles.metrics}>
        <div><b>$420M</b><span>Global portfolio P&amp;L</span></div>
        <div><b>30+</b><span>Cross-functional team</span></div>
        <div><b>9</b><span>Patents earned</span></div>
        <div><b>50%</b><span>Faster portfolio launch</span></div>
      </div>
    </header>

    <section className={styles.section}>
      <div className={styles.label}>01 / The remit</div>
      <div className={styles.split}>
        <h2>Global scale.<br/><em>Product-level detail.</em></h2>
        <div><p>As Senior Product Manager for Cardio, Justin led a cross-functional team of more than 30 across engineering, design, marketing, supply chain, finance, sales, and regulatory.</p><p>The work connected market insight, product strategy, technology decisions, commercial priorities, and execution across a $420M global portfolio.</p></div>
      </div>
    </section>

    <section className={styles.darkSection}>
      <div className={styles.label}>02 / The portfolio</div>
      <div className={styles.portfolioIntro}><h2>Different categories.<br/><em>One operating discipline.</em></h2><p>The products changed. The job stayed grounded in understanding the market, aligning the organization, making difficult tradeoffs, and getting the right product into the world.</p></div>
      <div className={styles.portfolio}>
        {portfolio.map(item => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.label}>03 / How the work moved</div>
      <div className={styles.process}>
        <div className={styles.processTitle}><p className={styles.kicker}>Product leadership from end to end</p><h2>Research became decisions.<br/>Decisions became <em>products.</em></h2></div>
        <ol>
          <li><span>01</span><div><b>Read the market</b><p>Global research and advanced analytics across Asia, Europe, and the Americas.</p></div></li>
          <li><span>02</span><div><b>Shape the portfolio</b><p>Roadmaps and investment cases tied customer needs to commercial opportunity.</p></div></li>
          <li><span>03</span><div><b>Align the system</b><p>Engineering, design, operations, technology, finance, and sales moved against one plan.</p></div></li>
          <li><span>04</span><div><b>Ship at scale</b><p>Products moved through development, launch, integration, and global commercialization.</p></div></li>
        </ol>
      </div>
    </section>

    <section className={styles.result}>
      <div className={styles.label}>04 / Selected outcomes</div>
      <div className={styles.resultGrid}>
        <h2>Hardware made the work visible. The operating system behind it made the work possible.</h2>
        <div>
          <p>The portfolio work earned board approval for a $3.5M expansion, brought InMovement to market in nine months, produced nine patents, and supported the integration of Cybex into the Life Fitness portfolio.</p>
          <p>That experience still shapes how WRKSTREAM approaches product work today: see the whole system, stay close to the details, and build toward a result the business can carry forward.</p>
        </div>
      </div>
    </section>

    <footer className={styles.footer}>
      <p className={styles.kicker}>Building a product with real-world complexity?</p>
      <h2>Let’s get it<br/><span>moving.</span></h2>
      <a {...bookProps}>Book a 15-minute intro <Arrow /></a><a className={styles.altCta} href="mailto:justin@wrkstream.com?subject=Build%20a%20product">Or email justin@wrkstream.com <Arrow /></a>
      <div><b><span>WRK</span>STREAM</b><small>Product + venture studio / Chicago</small></div>
    </footer>
  </main>;
}
