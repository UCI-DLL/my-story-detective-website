import { Arrow, SiteFooter, SiteHeader } from "../components/SiteChrome";
import { team } from "../components/team";

export default function Home() {
  return <main>
    <section className="project-banner" aria-label="My Story Detective">
      <p className="banner-eyebrow">UC Irvine · Digital Learning Lab · Language Literacy Learning Lab</p>
      <h1>MY STORY DETECTIVE</h1>
    </section>
    <SiteHeader />
    <section className="hero" id="top"><div className="hero-copy"><h2 className="hero-title">An AI-supported literacy coach for struggling readers.</h2><p className="hero-lede">Personalized support for every K⁠–⁠2 student, grounded in the science of reading—interactive, patient, and built to work at scale.</p></div><div className="hero-proof" aria-label="The challenge My Story Detective addresses"><p className="proof-label">THE READING GAP</p><div><strong>~40%</strong><span>of K⁠–⁠2 students struggle with foundational reading skills</span></div><div><strong>1-on-1</strong><span>tutoring works best—but districts cannot deliver it at scale</span></div><p className="proof-note">My Story Detective brings individualized support into existing literacy time.</p></div></section>

    <section className="challenge home-about"><div className="sec-head sec-head-only"><div><p className="section-kicker">ABOUT MY STORY DETECTIVE</p><h2>Responsive literacy support for more young readers.</h2></div><div><p className="sec-lede">My Story Detective is a web-based, AI-supported literacy experience that helps K⁠–⁠2 students build language, comprehension, and word-reading skills through illustrated stories. It extends skilled, responsive support while keeping teachers at the center.</p><div className="sec-actions"><a className="primary-cta" href="/about">Learn about the project <Arrow /></a></div></div></div></section>

    <section className="pillars-band"><div><p className="section-kicker">SCIENCE OF READING</p><h2>Two pillars drive every feature.</h2></div><ol><li><span>01</span><div><h3>Oral Language</h3><p>Vocabulary, listening comprehension, and expressive language—the foundation of reading success.</p></div></li><li><span>02</span><div><h3>Decoding</h3><p>Phonics, phonological awareness, and word reading—translating print into meaning.</p></div></li></ol></section>

    <section className="platform"><div className="lang-showcase"><div className="sec-head"><div><p className="section-kicker">THE PLATFORM</p><h2>A connected reading experience.</h2></div><div><p className="sec-lede">An AI literacy coach that works like a skilled tutor—interactively, patiently, and at scale.</p><div className="sec-actions"><a className="primary-cta" href="/platform">Explore the platform <Arrow /></a></div></div></div>
<div className="pf-toolbar"><span className="pf-toolbar-label">Example screens</span><div className="lang-toggle-row">
<span className="lang-label-en">English</span>
<input className="lang-input" id="lang-toggle" type="checkbox" role="switch" aria-label="Toggle example images between English and Spanish" />
<label className="lang-switch" htmlFor="lang-toggle"><span className="lang-switch-thumb" /></label>
<span className="lang-label-es">Español</span>
</div></div>
<div className="pf-row">
<div className="pf-head"><p className="section-kicker">01 · ORAL LANGUAGE &amp; COMPREHENSION</p><h3>Stories become conversations.</h3></div>
<p className="pf-text">Students use text structure and comprehension strategies while a conversational agent checks understanding, supports inferencing, and builds language.</p>
<div className="showcase-grid pf-media">
<figure className="showcase-card">
<div className="showcase-media">
<img className="lang-en" src="/platform/story-preview.png" alt="Illustrated storybook page used for interactive co-reading" />
<div className="lang-es showcase-placeholder" role="img" aria-label="Spanish version coming soon"><span>ES</span><p>Versión en español próximamente</p><small>Spanish screenshot coming soon</small></div>
</div>
<figcaption><span className="lang-en">Interactive Storybooks</span><span className="lang-es">Cuentos interactivos</span></figcaption>
</figure>
<figure className="showcase-card">
<div className="showcase-media">
<img className="lang-en" src="/platform/dialogue-preview.jpg" alt="Conversation interface with comprehension, inferencing, and language-building prompts" />
<div className="lang-es showcase-placeholder" role="img" aria-label="Spanish version coming soon"><span>ES</span><p>Versión en español próximamente</p><small>Spanish screenshot coming soon</small></div>
</div>
<figcaption><span className="lang-en">Guided Conversations</span><span className="lang-es">Conversaciones guiadas</span></figcaption>
</figure>
</div>
</div>
<div className="pf-row">
<div className="pf-head"><p className="section-kicker">02 · DECODING</p><h3>Practice from sounds to connected text.</h3></div>
<p className="pf-text">Students read individual words, answer sentence-level prompts, and build fluency with decodable texts. AI feedback identifies substitutions, deletions, insertions, and disfluency at the word and sound level.</p>
<div className="showcase-grid pf-media">
<figure className="showcase-card">
<div className="showcase-media">
<img className="lang-en" src="/platform/ai-feedback.png" alt="AI feedback screen that adapts to each student" />
<div className="lang-es showcase-placeholder" role="img" aria-label="Spanish version coming soon"><span>ES</span><p>Versión en español próximamente</p><small>Spanish screenshot coming soon</small></div>
</div>
<figcaption><span className="lang-en">Real-Time Feedback</span><span className="lang-es">Retroalimentación en tiempo real</span></figcaption>
</figure>
<figure className="showcase-card">
<div className="showcase-media">
<img className="lang-en" src="/platform/decoding-practice.png" alt="Word-reading and decoding practice activity" />
<div className="lang-es showcase-placeholder" role="img" aria-label="Spanish version coming soon"><span>ES</span><p>Versión en español próximamente</p><small>Spanish screenshot coming soon</small></div>
</div>
<figcaption><span className="lang-en">Word-Reading Practice</span><span className="lang-es">Práctica de lectura de palabras</span></figcaption>
</figure>
</div>
</div>

</div></section>

    <section className="research-home" id="research"><div className="sec-head"><div><p className="section-kicker">RESEARCH FOUNDATION</p><h2>Built on a decade of UCI research.</h2></div><div><p className="sec-lede">My Story Detective grows out of two lines of UCI research—an evidence-based reading intervention and studies of AI-supported dialogic reading.</p><div className="sec-actions"><a className="primary-cta" href="/research">Explore the research <Arrow /></a></div></div></div><div className="rh-lineage"><article className="rh-card"><span className="rh-kicker">PROVEN INTERVENTION</span><h3>From Story Detective to My Story Detective</h3><p>My Story Detective transforms Professor Young-Suk Kim’s Story Detective—a teacher-led dialogic reading intervention shown to improve students’ oral language skills and vocabulary—into a personalized, AI-driven reading coach that children can use at school or at home.</p></article><a className="rh-card rh-card-link" href="https://www.conversetolearn.org/" target="_blank" rel="noreferrer"><span className="rh-kicker">RESEARCH LINEAGE</span><h3>Building on Converse to Learn</h3><p>My Story Detective extends the UCI Digital Learning Lab’s research on AI-enabled dialogic reading—combining conversational agents with books and videos to support young children’s learning.</p><span className="rh-card-cta">Visit the Converse to Learn website <Arrow /></span></a></div><div className="rh-funding"><p className="rh-funding-label">FUNDING</p><div className="rh-funding-items"><div><b>U.S. Department of Education</b><p>Funds the development of My Story Detective through the Office of Special Education Programs (Award No. H327S260038).</p><a className="rh-text-link" href="https://drive.google.com/file/d/1ctN0dnZ_LHgHw8Fqo_cQmauMs7ADeHUx/view" target="_blank" rel="noreferrer">View the grant proposal <Arrow /></a></div><div><b>National Science Foundation</b><p>Supports the development of related interactive storybooks.</p></div></div></div></section>

    <section className="people people-teaser"><div className="sec-head"><div><p className="section-kicker">THE TEAM</p><h2>Research team behind the platform.</h2></div><div><p className="sec-lede">Deep expertise in AI, early reading development, multilingual learning, and classroom practice.</p><div className="sec-actions"><a className="primary-cta" href="/people">Meet the team <Arrow /></a></div></div></div><div className="people-teaser-copy"><div className="team-card-grid">{team.filter(person => person.group !== "undergraduate").map(person => <article className="team-card" key={person.name}><span className={`team-portrait${person.name === "Tamara Tate" ? " tamara-portrait" : ""}`} aria-hidden="true">{person.image ? <img src={person.image} alt="" /> : <span className="portrait-initials">{person.name.split(" ").map(w => w[0]).join("")}</span>}</span><h3>{person.name}</h3><p className="team-card-title">{person.title}</p><p className="team-card-bio">{person.bio}</p></article>)}</div></div></section>

    <section className="where-learning"><div className="sec-head"><div><p className="section-kicker">WHERE LEARNING HAPPENS</p><h2><span>Designed for school.</span> <span>Accessible at home.</span></h2></div><div><p className="sec-lede">My Story Detective extends individualized literacy support beyond a single setting, helping children stay engaged wherever they read.</p></div></div><div className="wl-settings"><article><p className="wl-tag"><span className="wl-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.5 12 5l9 5.5"/><path d="M5 10v8.5h14V10"/><path d="M10 18.5v-4h4v4"/></svg></span>FOR SCHOOL</p><h3>Personalized learning that fits the classroom.</h3><p>Designed for individual learning during center rotations and other independent-work periods. Dialogic questions keep students actively engaged, check understanding, and deepen learning as each child reads.</p></article><article><p className="wl-tag"><span className="wl-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3.5" width="12" height="17" rx="2.2"/><path d="M10.5 17.5h3"/></svg></span>FOR HOME</p><h3>Reading support on any connected device.</h3><p>Stories are accessible from any internet-connected phone, tablet, or computer. Family discussion questions at the end of each story bring parents and caregivers into the learning process.</p></article></div></section>

    <section className="contact contact-teaser"><div><p className="section-kicker">CONTACT US</p><h2>Bring individualized literacy support to your school.</h2></div><div><p>Interested in becoming a research and development partner? Learn how to start a conversation with the My Story Detective team.</p><a className="contact-button" href="/contact">Start a conversation <Arrow /></a></div></section>
    <SiteFooter />
  </main>;
}
