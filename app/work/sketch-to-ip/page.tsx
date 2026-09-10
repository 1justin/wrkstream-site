import type { Metadata } from 'next';
import styles from './project.module.css';
import refinements from './refinements.module.css';

export const metadata: Metadata = {
  title: 'From Sketch to IP | WRKSTREAM',
  description: 'InMovement products developed from early concepts through prototypes, patents, manufacturing, and market.',
  openGraph: {
    title: 'From Sketch to IP | WRKSTREAM',
    description: 'A portfolio of original workplace products developed from first sketch through issued IP and market.',
    images: [{ url: '/work/inmovement/workstation/product.jpg', width: 2752, height: 1536, alt: 'InMovement mobile workstation in use' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'From Sketch to IP | WRKSTREAM',
    description: 'A portfolio of original workplace products developed from first sketch through issued IP and market.',
    images: ['/work/inmovement/workstation/product.jpg'],
  },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const products = [
  {
    name: 'Treadmill workstation',
    type: 'Shared active workspace',
    root: '/work/inmovement/treadmill',
    alt: 'InMovement convergent treadmill workstation',
    premise: 'Walking meetings offered movement and conversation, but depended on weather, location, and access to information. We explored how that experience could move indoors, accommodate multiple people, and provide lightweight access to shared data while the conversation continued.',
  },
  {
    name: 'Mobile workstation',
    type: 'Flexible technology furniture',
    root: '/work/inmovement/workstation',
    alt: 'InMovement mobile workstation',
    premise: 'Open offices and sit-to-stand desks changed how people worked, but the furniture remained surprisingly rigid. We designed a mobile workstation for teams that hotel, gather spontaneously, and reconfigure their environment around the work.',
  },
  {
    name: 'Move chair',
    type: 'Active seating',
    root: '/work/inmovement/stool',
    alt: 'InMovement active stool',
    final: '/work/inmovement/stool/product-clean.jpg',
    premise: 'Some people think better when they can move. Move supported conventional seating at a high conference table, then rotated into a more active posture for quick huddles, presentations, and sharing a laptop or tablet.',
  },
];

const patents = [
  ['US 9,737,138 B1', 'Converging treadmill workstation', 'Utility', true],
  ['US 9,918,550 B1', 'Mobile workstation', 'Utility', true],
  ['US 10,016,652 B1', 'Converging treadmill workstation', 'Utility', true],
  ['US 10,045,611 B1', 'Table apparatuses', 'Utility', false],
  ['US D769,381 S', 'Convergent treadmill desk', 'Design', true],
  ['US D769,989 S', 'Convergent treadmill desk', 'Design', true],
  ['US D817,651 S', 'Stool', 'Design', false],
  ['US D805,065 S', 'Mobile workstation', 'Design', true],
  ['US D770,576 S', 'Convergent treadmill desk', 'Design', true],
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
        <div><p className={styles.kicker}>InMovement</p><h1>From first sketch<br/>to <em>issued IP.</em></h1></div>
        <div className={styles.intro}><p>A startup inside Life Fitness built original workplace products and the system required to move them through prototypes, patents, global manufacturing, and market.</p></div>
      </div>
      <div className={styles.heroVisual}>
        <img className={refinements.heroMainImage} src="/work/inmovement/workstation/product.jpg" alt="A person using the InMovement mobile workstation"/>
        <div className={styles.heroMark}><img className={refinements.logoImage} src="/work/inmovement/logo.webp" alt="InMovement"/><span>Product development / 2014–2019</span></div>
      </div>
      <div className={styles.metrics}>
        <div><b>3</b><span>Utility patents naming Justin</span></div>
        <div><b>4</b><span>Design patents naming Justin</span></div>
        <div><b>9 mo.</b><span>DT2 idea to shipment</span></div>
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

    <section className={styles.gallerySection}>
      <div className={styles.label}>02 / The inventions</div>
      <div className={styles.galleryIntro}><h2>Concept. CAD. Patent.<br/><em>Product.</em></h2><p>The deepest innovation lived in the original product portfolio. The team built a showroom and innovation lab where ideas could be drawn, modeled, mocked up, tested, challenged, refined, and made real.</p></div>
      <div className={styles.productStories}>
        {products.map((product,productIndex)=><article className={`${styles.productStory} ${refinements.productStoryGrid}`} key={product.name}>
          <div className={styles.productTitle}><span>0{productIndex+1} / {product.type}</span><div className={refinements.productHeading}><h3>{product.name}</h3><p>{product.premise}</p></div></div>
          <figure className={styles.stage}><img src={`${product.root}/concept.png`} alt={`${product.alt} concept drawing`}/><figcaption>01 / Concept</figcaption></figure>
          <figure className={styles.stage}><img src={`${product.root}/cad.png`} alt={`${product.alt} CAD development`}/><figcaption>02 / CAD</figcaption></figure>
          <figure className={styles.stage}><img src={`${product.root}/patent.png`} alt={`${product.alt} patent drawing`}/><figcaption>03 / Patent</figcaption></figure>
          <figure className={`${styles.stage} ${styles.finalStage}`}><img className={product.final ? refinements.moveFinalImage : undefined} src={product.final ?? `${product.root}/product.jpg`} alt={`${product.alt} commercialized product`}/><figcaption>04 / Product</figcaption></figure>
        </article>)}
      </div>
    </section>

    <section className={styles.ipSection}>
      <div className={styles.label}>03 / The IP</div>
      <div className={styles.ipIntro}><h2>The portfolio created <em>defensible invention.</em></h2><p>Nine issued US patents document the breadth of the product effort. Justin is named on three utility patents and four design patents. The other two reflect adjacent team invention within the same portfolio.</p></div>
      <div className={styles.patentList}>
        {patents.map(([number,title,kind,named],i)=><div key={number as string}><span>0{i+1}</span><b>{number as string}</b><p>{title as string}</p><small>{kind as string} / {named ? 'Justin named' : 'Portfolio team'}</small></div>)}
      </div>
    </section>

    <section className={styles.speed}>
      <div className={styles.label}>04 / Speed as a capability</div>
      <div className={styles.speedGrid}>
        <div><p className={styles.kicker}>DT2 desktop workstation</p><h2>Idea to shipment.<br/><em>Nine months.</em></h2><p>DT2 was the fast-follower story in the portfolio. Its value was execution speed: identify the opportunity, define the experience, develop the mechanism, source the product, and get it into customers’ hands in nine months.</p></div>
        <figure><img src="/work/inmovement/dt20-standing-desk.webp" alt="InMovement desktop sit-to-stand workstation"/><figcaption>Desktop sit-to-stand workstation / Commercialized product</figcaption></figure>
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
        <h2>Product capability outpaced distribution commitment.</h2>
        <div><p>InMovement pursued B2B and B2C at the same time, without the sustained distribution investment required to make both work. Life Fitness and Brunswick ultimately chose not to keep funding that path. The portfolio was acquired and continued as a smaller independent business.</p><p>The durable wins are substantial: original products taken from sketches to market, three utility and four design patents naming Justin, a fast-follower product shipped in nine months, new manufacturing relationships in China, a commercial-furniture channel, and a repeatable system for turning ambiguity into physical products.</p></div>
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
