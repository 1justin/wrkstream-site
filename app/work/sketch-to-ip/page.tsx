import type { Metadata } from 'next';
import styles from './project.module.css';

export const metadata: Metadata = {
  title: 'From Sketch to IP | WRKSTREAM',
  description: 'InMovement products developed from early concepts through prototypes, patents, manufacturing, and market.',
  openGraph: {
    title: 'From Sketch to IP | WRKSTREAM',
    description: 'A nine-month sprint from idea to shipment inside an immersive product-development system.',
    images: [{ url: '/work/inmovement/treadmill/product.jpg', width: 2752, height: 1536, alt: 'InMovement convergent treadmill workstation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'From Sketch to IP | WRKSTREAM',
    description: 'A nine-month sprint from idea to shipment inside an immersive product-development system.',
    images: ['/work/inmovement/treadmill/product.jpg'],
  },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const products = [
  {
    name: 'Move chair',
    type: 'Active seating',
    root: '/work/inmovement/stool',
    alt: 'InMovement active stool',
  },
  {
    name: 'Treadmill workstation',
    type: 'Shared active workspace',
    root: '/work/inmovement/treadmill',
    alt: 'InMovement convergent treadmill workstation',
  },
  {
    name: 'Mobile workstation',
    type: 'Flexible technology furniture',
    root: '/work/inmovement/workstation',
    alt: 'InMovement mobile workstation',
  },
];

const patents = [
  ['US 9,737,138 B1', 'Converging treadmill workstation', true],
  ['US 9,918,550 B1', 'Mobile workstation', true],
  ['US 10,016,652 B1', 'Converging treadmill workstation', true],
  ['US 10,045,611 B1', 'Table apparatuses', false],
  ['US D769,381 S', 'Convergent treadmill desk', true],
  ['US D769,989 S', 'Convergent treadmill desk', true],
  ['US D817,651 S', 'Stool', false],
  ['US D805,065 S', 'Mobile workstation', true],
  ['US D770,576 S', 'Convergent treadmill desk', true],
];

export default function SketchToIPProject() {
  return <main className={styles.page}>
    <nav className={styles.nav}>
      <a className={styles.wordmark} href="/"><span>WRK</span>STREAM</a>
      <a className={styles.back} href="/#work">← Selected work</a>
      <a className={styles.navCta} href="mailto:hello@wrkstream.com?subject=Build%20a%20physical%20product">Start a project <Arrow /></a>
    </nav>

    <header className={styles.hero}>
      <div className={styles.meta}><span>Product / Hardware / Industrial design / IP</span><span>Case 05</span></div>
      <div className={styles.heroGrid}>
        <div><p className={styles.kicker}>InMovement</p><h1>From sketch<br/>to <em>shipping.</em></h1></div>
        <div className={styles.intro}><p>A startup inside Life Fitness built an immersive product-development system that moved ideas through prototypes, patents, global manufacturing, and market.</p></div>
      </div>
      <div className={styles.heroVisual}>
        <img src="/work/inmovement/treadmill/product.jpg" alt="InMovement convergent treadmill workstation in an office"/>
        <div className={styles.heroMark}><img src="/work/inmovement/logo.webp" alt="InMovement"/><span>Product development / 2014–2019</span></div>
      </div>
      <div className={styles.metrics}>
        <div><b>9 mo.</b><span>DT2 idea to shipment</span></div>
        <div><b>9</b><span>US patents across the portfolio</span></div>
        <div><b>7</b><span>Patents naming Justin as inventor</span></div>
        <div><b>3</b><span>Product systems shown here</span></div>
      </div>
    </header>

    <section className={styles.section}>
      <div className={styles.label}>01 / The mandate</div>
      <div className={styles.split}>
        <h2>Build a startup.<br/><em>Inside the system.</em></h2>
        <div><p>InMovement operated with startup ambition inside Life Fitness, which was owned by Brunswick. The opportunity was to create a new category around movement in the workplace. The reality included multiple organizations, priorities, approval layers, and channels.</p><p>Product leadership meant seeing the whole system: customer insight, industrial design, engineering, IP, sourcing, manufacturing, channel development, commercialization, and the internal coalition required to keep all of it moving.</p></div>
      </div>
      <div className={styles.systemMap}>
        {['Customer research','Concept development','Physical prototyping','Engineering + IP','China manufacturing','Furniture distribution'].map((item,i)=><div key={item}><span>0{i+1}</span>{item}</div>)}
      </div>
    </section>

    <section className={styles.speed}>
      <div className={styles.label}>02 / Speed as a capability</div>
      <div className={styles.speedGrid}>
        <div><p className={styles.kicker}>DT2 desktop workstation</p><h2>Idea to shipment.<br/><em>Nine months.</em></h2><p>The desktop riser was a fast-follower product. The innovation was the operating cadence: identify the opportunity, define the experience, develop the mechanism, source the product, and get it into customers’ hands in nine months.</p></div>
        <figure><img src="/work/inmovement/dt20-standing-desk.webp" alt="InMovement desktop sit-to-stand workstation"/><figcaption>Desktop sit-to-stand workstation / Commercialized product</figcaption></figure>
      </div>
    </section>

    <section className={styles.gallerySection}>
      <div className={styles.label}>03 / The development process</div>
      <div className={styles.galleryIntro}><h2>Concept. CAD. Patent.<br/><em>Product.</em></h2><p>The team built a showroom and innovation lab where ideas could be drawn, modeled, mocked up, tested, challenged, refined, and made real. The process stayed tangible from the first line to the finished object.</p></div>
      <div className={styles.productStories}>
        {products.map((product,productIndex)=><article className={styles.productStory} key={product.name}>
          <div className={styles.productTitle}><span>0{productIndex+1} / {product.type}</span><h3>{product.name}</h3></div>
          <figure className={styles.stage}><img src={`${product.root}/concept.png`} alt={`${product.alt} concept drawing`}/><figcaption>01 / Concept</figcaption></figure>
          <figure className={styles.stage}><img src={`${product.root}/cad.png`} alt={`${product.alt} CAD development`}/><figcaption>02 / CAD</figcaption></figure>
          <figure className={styles.stage}><img src={`${product.root}/patent.png`} alt={`${product.alt} patent drawing`}/><figcaption>03 / Patent</figcaption></figure>
          <figure className={`${styles.stage} ${styles.finalStage}`}><img src={`${product.root}/product.jpg`} alt={`${product.alt} commercialized product`}/><figcaption>04 / Product</figcaption></figure>
        </article>)}
      </div>
    </section>

    <section className={styles.ipSection}>
      <div className={styles.label}>04 / The IP</div>
      <div className={styles.ipIntro}><h2>The portfolio created <em>defensible invention.</em></h2><p>Nine issued US utility and design patents document the breadth of the product effort. Justin is named as an inventor on seven. The other two reflect adjacent team invention within the same portfolio.</p></div>
      <div className={styles.patentList}>
        {patents.map(([number,title,named],i)=><div key={number as string}><span>0{i+1}</span><b>{number as string}</b><p>{title as string}</p><small>{named ? 'Justin named as inventor' : 'Portfolio team patent'}</small></div>)}
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.label}>05 / Beyond the object</div>
      <div className={styles.beyondGrid}>
        <div><p className={styles.kicker}>The product was the visible part</p><h2>Build the system that can <em>build the thing.</em></h2></div>
        <div className={styles.beyondList}>
          <article><span>01</span><h3>Innovation environment</h3><p>Created a dedicated showroom and lab for customer learning, concept development, and rapid physical experimentation.</p></article>
          <article><span>02</span><h3>Global supply chain</h3><p>Justin led the addition and development of new manufacturing partners in China.</p></article>
          <article><span>03</span><h3>New distribution</h3><p>Expanded beyond traditional fitness channels through commercial furniture dealers.</p></article>
          <article><span>04</span><h3>Organizational navigation</h3><p>Aligned a startup team, Life Fitness functions, Brunswick stakeholders, external designers, suppliers, and channel partners.</p></article>
        </div>
      </div>
    </section>

    <section className={styles.result}>
      <div className={styles.label}>06 / The honest result</div>
      <div className={styles.resultGrid}>
        <h2>The products moved fast.<br/>The strategy lost focus.</h2>
        <div><p>InMovement did not become the financial success its product output suggested. The organization pursued B2B and B2C simultaneously while navigating layered priorities across a startup, Life Fitness, and Brunswick.</p><p>The durable wins are still substantial: a product shipped in nine months, nine issued patents across the portfolio, seven naming Justin as an inventor, new manufacturing relationships in China, a new commercial-furniture channel, and a repeatable system for turning ambiguity into physical products.</p></div>
      </div>
    </section>

    <footer className={styles.footer}>
      <p className={styles.kicker}>Have something worth making real?</p>
      <h2>Let’s move it from sketch to <span>shipping.</span></h2>
      <a href="mailto:hello@wrkstream.com?subject=Build%20a%20physical%20product">Start a project <Arrow /></a>
      <div><b><span>WRK</span>STREAM</b><small>Product + venture studio / Chicago</small></div>
    </footer>
  </main>;
}
