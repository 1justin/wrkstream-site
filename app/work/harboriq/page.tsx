import type { Metadata } from 'next';
import styles from './project.module.css';

export const metadata: Metadata = {
  title: 'HarborIQ — WRKSTREAM',
  description: 'An AI-native operating platform for independent insurance agencies, built and operated by WRKSTREAM.',
  openGraph: { images: [] },
  twitter: { images: [] },
};

const Arrow = () => <span aria-hidden="true">↗</span>;
const BOOK = 'https://tidycal.com/cjmayer/15-minute-intro';
const bookProps = { href: BOOK, target: '_blank', rel: 'noopener noreferrer' };

export default function HarborIQProject() {
  return <main className={styles.page}>
    <nav className={styles.nav}>
      <a className={styles.wordmark} href="/"><span>WRK</span>STREAM</a>
      <a className={styles.back} href="/#work">← Selected work</a>
      <a className={styles.navCta} {...bookProps}>Book an intro call <Arrow /></a>
    </nav>

    <header className={styles.hero}>
      <div className={styles.meta}><span>Venture / Insurance / AI</span><span>Case 01</span></div>
      <div className={styles.heroGrid}>
        <div><p className={styles.kicker}>Operating venture</p><h1>Harbor<span>IQ</span></h1></div>
        <p className={styles.statement}>An AI-native operating platform for independent insurance agencies.</p>
      </div>
      <div className={styles.productFrame}><img style={{display:'block',width:'100%',height:'auto'}} src="/work/harboriq-dashboard.jpg" alt="HarborIQ agency command center showing pipeline, renewals, tasks, and AI-assisted actions"/></div>
      <p className={styles.caption}>HarborIQ / Agency command center</p>
    </header>

    <section className={styles.section}>
      <div className={styles.sectionLabel}>01 / The opportunity</div>
      <div className={styles.twoCol}><h2>Independent agencies run on relationships.<br/><em>Their software rarely does.</em></h2><div><p>Independent insurance agencies sit at the center of a complicated web of clients, carriers, renewals, service work, and growth opportunities.</p><p>HarborIQ is being built as a connected operating layer: one place to understand the agency, surface what matters, and help the team act.</p></div></div>
    </section>

    <section className={`${styles.section} ${styles.blueSection}`}>
      <div className={styles.sectionLabel}>02 / What we’re building</div>
      <div className={styles.buildHead}><h2>From scattered activity<br/>to <em>agency intelligence.</em></h2><p>The goal is not another system people have to feed. It is a system that makes the tools and information they already use more useful.</p></div>
      <div className={styles.capabilities}>
        {[['01','Agency workspace','A clear view of clients, pipeline, work, and performance.'],['02','Relationship intelligence','Signals that help teams see risk and opportunity earlier.'],['03','Workflow orchestration','Connected actions across the systems agencies already depend on.'],['04','Decision support','Practical AI that helps people decide and move—not just generate text.']].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.sectionLabel}>03 / WRKSTREAM’s role</div>
      <div className={styles.roleGrid}><div><p className={styles.kicker}>Owner / operator / product team</p><h2>Not a case study<br/>from the sidelines.</h2></div><div className={styles.roleList}>{['Category thesis + customer insight','Product definition + positioning','Interface and experience direction','Working software + integrations','Go-to-market + ongoing operation'].map((x,i)=><div key={x}><span>0{i+1}</span>{x}</div>)}</div></div>
    </section>

    <section className={styles.proofSection}>
      <div className={styles.proofGrid}><div className={styles.sectionLabel}>04 / Why it matters</div><blockquote>“Building your own company changes the advice you give everyone else.”</blockquote><div className={styles.proofCopy}><p>HarborIQ keeps WRKSTREAM close to the constraints every founder and operating team knows: limited time, real tradeoffs, imperfect information, and the need to ship.</p><p>That experience comes back into every client engagement.</p></div></div>
    </section>

    <footer className={styles.footer}>
      <p className={styles.kicker}>Have something worth building?</p>
      <h2>Let’s make it <span>real.</span></h2>
      <a {...bookProps}>Book a 15-minute intro <Arrow /></a><a className={styles.altCta} href="mailto:justin@wrkstream.com?subject=Start%20a%20project">Or email justin@wrkstream.com <Arrow /></a>
      <div><b><span>WRK</span>STREAM</b><small>Product + venture studio / Chicago</small></div>
    </footer>
  </main>;
}
