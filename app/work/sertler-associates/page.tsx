import type { Metadata } from 'next';
import styles from './project.module.css';

export const metadata: Metadata = {
  title: 'Sertler & Associates — WRKSTREAM',
  description: 'A multilingual website and connected lead system for a respected independent insurance agency.',
  openGraph: { images: [] },
  twitter: { images: [] },
};

const Arrow = () => <span aria-hidden="true">↗</span>;
const BOOK = 'https://tidycal.com/cjmayer/15-minute-intro';
const bookProps = { href: BOOK, target: '_blank', rel: 'noopener noreferrer' };

export default function SertlerProject() {
  return <main className={styles.page}>
    <nav className={styles.nav}>
      <a className={styles.wordmark} href="/"><span>WRK</span>STREAM</a>
      <a className={styles.back} href="/#work">← Selected work</a>
      <a className={styles.navCta} {...bookProps}>Book an intro call <Arrow /></a>
    </nav>

    <header className={styles.hero}>
      <div className={styles.meta}><span>Client work / Insurance / Digital systems</span><span>Case 02</span></div>
      <div className={styles.heroGrid}>
        <div><p className={styles.kicker}>Sertler &amp; Associates</p><h1>A reputation this strong should <em>look the part.</em></h1></div>
        <div className={styles.intro}><p>A modern, multilingual digital presence connected directly to the operating system behind the agency.</p><a href="https://www.sdabrokers.com/" target="_blank" rel="noreferrer">View the live site <Arrow /></a></div>
      </div>

      <div className={styles.browser}><img fetchPriority="high" style={{display:'block',width:'100%',height:'auto'}} src="/work/sertler-website.jpg" alt="Sertler & Associates multilingual insurance website displayed on a laptop"/></div>
      <p className={styles.caption}>Sertler &amp; Associates / Live digital experience</p>
    </header>

    <section className={styles.section}>
      <div className={styles.label}>01 / The disconnect</div>
      <div className={styles.split}><h2>The business had earned trust.<br/><em>The website hadn’t.</em></h2><div><p>Sertler &amp; Associates had the reputation, relationships, and producer mindset of a high-performing independent agency. Its website told a different story.</p><p>The experience was dated and static. It did little to reflect the team’s standing in the market—and it stopped at the form instead of connecting new opportunities to the people responsible for them.</p></div></div>
      <div className={styles.beforeAfter}>
        <article><span>BEFORE</span><h3>A digital brochure</h3><ul><li>Dated, static presentation</li><li>No connection to agency systems</li><li>Limited multilingual experience</li><li>Manual lead handling</li></ul></article>
        <div className={styles.transform}>→</div>
        <article className={styles.after}><span>AFTER</span><h3>A connected front door</h3><ul><li>Modern, credible experience</li><li>Multilingual customer journeys</li><li>Structured lead capture</li><li>HarborIQ routing + assignment</li></ul></article>
      </div>
    </section>

    <section className={`${styles.section} ${styles.dark}`}>
      <div className={styles.label}>02 / The idea</div>
      <div className={styles.thesis}><h2>Don’t redesign the website.<br/><em>Connect the business.</em></h2><p>The public experience and the operating system were designed as one system. A prospect can understand the agency in their language, ask for the right kind of help, and enter a workflow that knows where the opportunity should go next.</p></div>
      <div className={styles.flow}>
        {[['01','ATTRACT','A polished, current expression of the agency.'],['02','UNDERSTAND','Clear paths by need, service, and language.'],['03','CAPTURE','Structured forms that collect useful context.'],['04','ROUTE','HarborIQ assigns each lead to the right producer.']].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p><i>→</i></article>)}
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.label}>03 / What we built</div>
      <div className={styles.deliverables}>
        <div><p className={styles.kicker}>One connected engagement</p><h2>Brand expression.<br/>Website.<br/><em>Operating workflow.</em></h2></div>
        <div className={styles.list}>{['Positioning + digital direction','Responsive website experience','Micro-interactions + motion direction','Multilingual content architecture','Quote and lead-generation flows','HarborIQ integration + assignment logic'].map((x,i)=><div key={x}><span>0{i+1}</span>{x}</div>)}</div>
      </div>
    </section>

    <section className={styles.result}>
      <div className={styles.label}>04 / The result</div>
      <div className={styles.resultGrid}><h2>Now the experience reflects the agency behind it.</h2><div><p>The new site is live, multilingual, and connected. It brings the agency’s digital presence up to the standard of its real-world reputation while turning interest into organized, assigned opportunity inside HarborIQ.</p><a href="https://www.sdabrokers.com/" target="_blank" rel="noreferrer">Visit Sertler &amp; Associates <Arrow /></a></div></div>
      <blockquote>“WRKSTREAM gave us more than a new website. They helped us present the agency the way we wanted and connected it to how we actually handle new business across our languages, our people, and our systems.”<small>Andy Sertler / President, Sertler &amp; Associates</small></blockquote>
    </section>

    <footer className={styles.footer}>
      <p className={styles.kicker}>Need more than a new website?</p><h2>Let’s connect the <span>business.</span></h2>
      <a {...bookProps}>Book a 15-minute intro <Arrow /></a><a className={styles.altCta} href="mailto:justin@wrkstream.com?subject=Modernize%20my%20business">Or email justin@wrkstream.com <Arrow /></a>
      <div><b><span>WRK</span>STREAM</b><small>Product + venture studio / Chicago</small></div>
    </footer>
  </main>;
}
