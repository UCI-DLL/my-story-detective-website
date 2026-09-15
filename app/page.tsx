const nav = ["About", "Platform", "Research", "People", "Contact Us"];

const team = [
  { initials: "MW", image: "/team/Mark-Warschauer-headshot2-full.jpg", name: "Mark Warschauer", title: "Distinguished Professor of Education, UC Irvine", bio: "Former K–12 bilingual teacher and one of the nation’s leading experts in AI in education. Director of the Digital Learning Lab." },
  { initials: "YK", image: "/team/young-suk-kim.jpg", name: "Young-Suk Kim", title: "Professor of Education, UC Irvine", bio: "One of the top U.S. researchers in early reading development. Her work directly informs the platform’s literacy curriculum." },
  { initials: "YX", image: "/team/ying-xu.jpg", name: "Ying Xu", title: "Assistant Professor of Education, Harvard University", bio: "A leading expert on the use of AI to promote young children’s learning and a key advisor on the platform’s dialogic reading and decoding supports." },
  { initials: "VM", image: "/team/viri-murillo.jpeg", name: "Viri Murillo", title: "PhD Student in Education, UC Irvine", bio: "Former elementary dual-immersion teacher with deep expertise in language and literacy development for multilingual learners." },
  { initials: "JL", image: "/team/julian-levine.jpg", name: "Julian Levine", title: "PhD Candidate in Education, UC Irvine", bio: "A language and literacy researcher investigating how AI-powered conversational agents and interactive media can support children’s learning and vocabulary development." },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }
function Brand() { return <a className="brand" href="#top" aria-label="My Story Detective home"><span className="brand-rule" /><span><b>MY STORY DETECTIVE</b><small>UC Irvine · Digital Learning Lab</small></span></a>; }

export default function Home() {
  return <main>
    <header className="site-header"><Brand /><nav aria-label="Main navigation">{nav.map(item => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a>)}</nav><a className="header-cta" href="#contact-us">Partner with us <Arrow /></a></header>

    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">UC IRVINE · DIGITAL LEARNING LAB</p><h1>An AI-supported<br />literacy coach for<br />struggling readers.</h1><p className="hero-lede">Personalized support for every K–2 student, grounded in the science of reading—interactive, patient, and built to work at scale.</p><a className="text-link" href="#platform">Meet My Story Detective <Arrow /></a></div><div className="hero-proof" aria-label="The challenge My Story Detective addresses"><p className="proof-label">THE READING GAP</p><div><strong>~40%</strong><span>of K–2 students struggle with foundational reading skills</span></div><div><strong>1-on-1</strong><span>tutoring works best—but districts cannot deliver it at scale</span></div><p className="proof-note">My Story Detective brings individualized support into existing literacy time.</p></div></section>

    <section className="challenge" id="about"><p className="section-kicker">THE CHALLENGE</p><div><h2>The reading gap is real—and getting harder to address.</h2><p>Research shows that one-to-one tutoring can dramatically improve outcomes. Staffing constraints, however, make individualized support difficult to deliver at scale. My Story Detective extends skilled, responsive literacy support to more learners while keeping teachers at the center.</p></div></section>

    <section className="approach"><div className="approach-title"><p className="section-kicker">PEDAGOGICAL APPROACH</p><h2>Learning through dialogue.</h2><p>Our AI–human dialogue simulates teacher-led dialogic reading, encouraging active verbalization, inference, and reflection.</p></div><div className="approach-cards"><article><span>ASK</span><h3>Socratic Tutoring</h3><p>Instead of providing answers, the AI asks open-ended questions that prompt students to explain their thinking and build metacognitive awareness.</p></article><article><span>ADAPT</span><h3>Adaptive Cues</h3><p>Scaffolding adjusts dynamically to each student’s verbal responses, providing just-in-time support during natural conversation.</p></article></div></section>

    <section className="platform" id="platform"><div className="section-head"><p className="section-kicker">THE PLATFORM</p><h2>Meet My Story Detective.</h2><p>An AI literacy coach that works like a skilled tutor—interactively, patiently, and at scale.</p></div>
      <div className="platform-home-overview"><div><p>My Story Detective brings illustrated stories, guided conversation, and word-reading practice into one connected experience. Children build meaning as they talk about stories and practice the skills that help them read independently.</p><a className="primary-cta" href="/platform">Explore the platform <Arrow /></a></div><img src="/platform/story-preview.png" alt="Illustrated storybook interface used for interactive co-reading" /></div>
    </section>

    <section className="research" id="research">
      <div className="research-copy">
        <p className="section-kicker">RESEARCH FOUNDATION</p>
        <h2>Built on a decade of UCI research.</h2>
        <p>My Story Detective builds on two UCI research foundations: early-literacy research led by Professor Young-Suk Kim and the UCI Digital Learning Lab’s Converse to Learn project, which explores AI-supported dialogic learning.</p>
        <div className="research-home-foundations"><article><span>EARLY LITERACY RESEARCH</span><h3>Language, comprehension, and word reading</h3><p>Professor Young-Suk Kim’s research and the Story Detective and COMPASS interventions inform the project’s focus on the connected skills children use as they become readers.</p></article><article><span>CONVERSE TO LEARN</span><h3>Dialogic reading with conversational agents</h3><p>The UCI Digital Learning Lab’s Converse to Learn project explores how conversational agents can support children’s engagement, comprehension, and vocabulary during story-based learning.</p></article></div>
        <div className="cta-group"><a className="primary-cta" href="/research">Explore the research <Arrow /></a><a className="secondary-cta" href="https://drive.google.com/file/d/1ctN0dnZ_LHgHw8Fqo_cQmauMs7ADeHUx/view" target="_blank" rel="noreferrer">View Grant Proposal <Arrow /></a></div>
      </div>
      <div className="research-support">
        <p>PROJECT FUNDING &amp; RELATED SUPPORT</p>
        <div className="agency-row"><span><b>U.S. Department of Education</b><small>Supports My Story Detective</small></span><span><b>National Science Foundation</b><small>Supports related storybook development</small></span></div>
      </div>
    </section>

    <section className="people" id="people"><div className="section-head"><p className="section-kicker">THE TEAM</p><h2>Research team behind the platform.</h2><p>Deep expertise in AI, early reading development, multilingual learning, and classroom practice.</p></div><div className="people-grid">{team.map(person => <article key={person.name}><div className="portrait" aria-hidden="true">{person.image ? <img src={person.image} alt="" /> : person.initials}</div><h3>{person.name}</h3><h4>{person.title}</h4><p>{person.bio}</p></article>)}</div></section>

    <section className="use-cases"><div className="use-cases-intro"><p className="section-kicker">WHERE LEARNING HAPPENS</p><h2>Designed for school. Accessible at home.</h2><p>My Story Detective extends individualized literacy support beyond a single setting, helping children stay engaged wherever they read.</p></div><div className="use-case-grid"><article><span>01 · FOR SCHOOL</span><h3>Personalized learning that fits the classroom.</h3><p>Designed for individual learning during center rotations and other independent-work periods. Dialogic questions keep students actively engaged, check understanding, and deepen learning as each child reads.</p></article><article><span>02 · FOR HOME</span><h3>Reading support on any connected device.</h3><p>Stories are accessible from any internet-connected phone, tablet, or computer. Family discussion questions at the end of each story bring parents and caregivers into the learning process.</p></article></div></section>

    <section className="contact" id="contact-us"><div><p className="section-kicker">CONTACT US</p><h2>Bring individualized literacy support to your school.</h2></div><div><p>Interested in becoming a research and development partner? Let’s talk about how My Story Detective can fit your teachers, students, and existing literacy schedule.</p><a className="contact-button" href="mailto:markw@uci.edu">Start a conversation <Arrow /></a></div></section>

    <footer><Brand /><p>An AI-supported literacy coach for struggling readers, developed at the UC Irvine Digital Learning Lab.</p><div><a href="#about">About</a><a href="#platform">Platform</a><a href="#research">Research</a><a href="#people">People</a><a href="#contact-us">Contact</a></div><aside className="funding-ack"><b>Funding acknowledgment</b><p>My Story Detective is supported by a cooperative agreement with the U.S. Department of Education, Office of Special Education Programs, within the Office of Special Education and Rehabilitative Services (OSERS), under Grant No. H327S260038.</p><p>The contents of this website were developed under a cooperative agreement from the U.S. Department of Education. However, these contents do not necessarily represent the policy of the Department of Education, and you should not assume endorsement by the Federal Government.</p></aside><small>© 2026 My Story Detective · University of California, Irvine</small></footer>
  </main>;
}
