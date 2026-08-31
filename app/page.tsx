const nav = ["About", "Platform", "Research", "People", "Contact Us"];

const platformFeatures = [
  ["01", "Interactive Co-Reading", "Students read illustrated storybooks alongside the AI tutor, building comprehension through guided dialogue and real-time prompts."],
  ["02", "Oral Language & Vocabulary", "Structured conversations build vocabulary and oral language skills—the foundation of strong reading comprehension."],
  ["03", "Word Decoding Practice", "Targeted phonics and decoding activities provide repeated practice with immediate, personalized AI feedback."],
  ["04", "Teacher Progress Dashboard", "Teachers access real-time engagement and progress data for every student, enabling smarter instructional decisions."],
];

const benefits = [
  ["Free Platform Access", "No cost to the district at any stage of the partnership."],
  ["Shape the Platform", "Teachers’ feedback directly drives platform development."],
  ["$1,000 Teacher Stipends", "Each participating teacher receives a $1,000 stipend for their time."],
  ["Professional Learning", "Brief monthly sessions align with existing literacy instruction."],
  ["Student Progress Data", "A real-time dashboard shows engagement and learning outcomes."],
  ["Priority Expansion Access", "Partner districts receive first access as the platform scales."],
];

const team = [
  { initials: "MW", name: "Mark Warschauer", title: "Distinguished Professor of Education, UC Irvine", bio: "Former K–12 bilingual teacher and one of the nation’s leading experts in AI in education. Director of the Digital Learning Lab." },
  { initials: "YK", name: "Young-Suk Kim", title: "Professor of Education, UC Irvine", bio: "One of the top U.S. researchers in early reading development. Her work directly informs the platform’s literacy curriculum." },
  { initials: "VM", name: "Viri Murillo", title: "PhD Student in Education, UC Irvine", bio: "Former elementary dual-immersion teacher with deep expertise in language and literacy development for multilingual learners." },
  { initials: "YX", name: "Ying Xu", title: "Assistant Professor of Education, Harvard University", bio: "A leading expert on the use of AI to promote young children’s learning and a key advisor on the platform’s dialogic reading and decoding supports." },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }
function Brand() { return <a className="brand" href="#top" aria-label="My Story Detective home"><span className="brand-rule" /><span><b>MY STORY DETECTIVE</b><small>UC Irvine · Digital Learning Lab</small></span></a>; }

export default function Home() {
  return <main>
    <header className="site-header"><Brand /><nav aria-label="Main navigation">{nav.map(item => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a>)}</nav><a className="header-cta" href="#contact-us">Partner with us <Arrow /></a></header>

    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">UC IRVINE · DIGITAL LEARNING LAB</p><h1>An AI-supported<br />literacy coach for<br />struggling readers.</h1><p className="hero-lede">Personalized support for every K–2 student, grounded in the science of reading—interactive, patient, and built to work at scale.</p><a className="text-link" href="#platform">Meet My Story Detective <Arrow /></a></div><div className="hero-proof" aria-label="The challenge My Story Detective addresses"><p className="proof-label">THE READING GAP</p><div><strong>~40%</strong><span>of K–2 students struggle with foundational reading skills</span></div><div><strong>1-on-1</strong><span>tutoring works best—but districts cannot deliver it at scale</span></div><p className="proof-note">My Story Detective brings individualized support into existing literacy time.</p></div></section>

    <section className="challenge" id="about"><p className="section-kicker">THE CHALLENGE</p><div><h2>The reading gap is real—and getting harder to address.</h2><p>Research shows that one-to-one tutoring can dramatically improve outcomes. Staffing constraints, however, make individualized support difficult to deliver at scale. My Story Detective extends skilled, responsive literacy support to more learners while keeping teachers at the center.</p></div></section>

    <section className="approach"><div className="approach-title"><p className="section-kicker">PEDAGOGICAL APPROACH</p><h2>Learning through dialogue.</h2><p>Our AI–human dialogue simulates teacher-led dialogic reading, encouraging active verbalization, inference, and reflection.</p></div><div className="approach-cards"><article><span>ASK</span><h3>Socratic Tutoring</h3><p>Instead of providing answers, the AI asks open-ended questions that prompt students to explain their thinking and build metacognitive awareness.</p></article><article><span>ADAPT</span><h3>Adaptive Cues</h3><p>Scaffolding adjusts dynamically to each student’s verbal responses, providing just-in-time support during natural conversation.</p></article></div></section>

    <section className="platform" id="platform"><div className="section-head"><p className="section-kicker">THE PLATFORM</p><h2>Meet My Story Detective.</h2><p>An AI literacy coach that works like a skilled tutor—interactively, patiently, and at scale.</p></div><div className="feature-grid">{platformFeatures.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className="platform-showcase"><div className="showcase-copy"><p className="section-kicker">COMPREHENSION</p><h2>Stories become conversations.</h2><p>Students use text structure and comprehension strategies while a conversational agent checks understanding, supports inferencing, and builds language.</p><ul><li>Comprehension monitoring</li><li>Inferencing and perspective-taking</li><li>Vocabulary and language building</li></ul></div><div className="showcase-images"><img src="/platform/story-preview.png" alt="Illustrated storybook interface used for interactive co-reading" /><img src="/platform/dialogue-preview.jpg" alt="Examples of AI-supported comprehension monitoring, inferencing, and language building" /></div></div>
      <div className="platform-showcase reverse"><div className="showcase-copy"><p className="section-kicker">DECODING</p><h2>Practice from sounds to connected text.</h2><p>Students read individual words, answer sentence-level prompts, and build fluency with decodable texts. AI feedback identifies substitutions, deletions, insertions, and disfluency at the word and sound level.</p></div><div className="showcase-images wide"><img src="/platform/decoding-practice.png" alt="Word, sentence, and decodable reading activities" /><img src="/platform/ai-feedback.png" alt="AI feedback for word-level and sound-level decoding" /></div></div>
      <aside className="story-library"><p><b>Story library</b> · The platform brings together evidence-based Story Detective and COMPASS titles with <strong>The Science Adventures of Luna and Leo</strong>, a bilingual, community-informed science ebook collection.</p></aside>
    </section>

    <section className="research" id="research"><div className="research-copy"><p className="section-kicker">RESEARCH FOUNDATION</p><h2>Built on a decade of UCI research.</h2><p>My Story Detective was developed with support from two of the nation’s leading federal research agencies and is grounded in the science of reading.</p><div className="agency-row"><span>U.S. Department of Education</span><span>National Science Foundation</span></div></div><div className="pillars"><p>SCIENCE OF READING</p><h3>Two pillars drive every feature.</h3><article><span>01</span><div><h4>Oral Language</h4><p>Vocabulary, listening comprehension, and expressive language—the foundation of reading success.</p></div></article><article><span>02</span><div><h4>Decoding</h4><p>Phonics, phonological awareness, and word reading—translating print into meaning.</p></div></article></div></section>

    <section className="people" id="people"><div className="section-head"><p className="section-kicker">THE TEAM</p><h2>Research team behind the platform.</h2><p>Deep expertise in AI, early reading development, multilingual learning, and classroom practice.</p></div><div className="people-grid">{team.map(person => <article key={person.name}><div className="portrait" aria-hidden="true">{person.initials}</div><h3>{person.name}</h3><h4>{person.title}</h4><p>{person.bio}</p></article>)}</div></section>

    <section className="partnership"><div className="partnership-intro"><p className="section-kicker">PARTNERSHIP BENEFITS</p><h2>What your school gets.</h2><p>Teacher participation is voluntary, and the UCI team provides full support at every step.</p></div><div className="benefit-grid">{benefits.map(([title,text],i) => <article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="commitments"><h3>Simple commitments. Meaningful impact.</h3><div><p><b>Identify K–2 teachers</b><br />Approximately six volunteers per school.</p><p><b>Use existing literacy time</b><br />Fits into center time or intervention blocks.</p><p><b>Introduce families</b><br />Bilingual books are available for home use.</p><p><b>Provide feedback</b><br />Quarterly interviews, surveys, and classroom visits.</p></div></div></section>

    <section className="contact" id="contact-us"><div><p className="section-kicker">CONTACT US</p><h2>Bring individualized literacy support to your school.</h2></div><div><p>Interested in becoming a research and development partner? Let’s talk about how My Story Detective can fit your teachers, students, and existing literacy schedule.</p><a className="contact-button" href="mailto:markw@uci.edu">Start a conversation <Arrow /></a></div></section>

    <footer><Brand /><p>An AI-supported literacy coach for struggling readers, developed at the UC Irvine Digital Learning Lab.</p><div><a href="#about">About</a><a href="#platform">Platform</a><a href="#research">Research</a><a href="#people">People</a><a href="#contact-us">Contact</a></div><small>© 2026 My Story Detective · University of California, Irvine</small></footer>
  </main>;
}
