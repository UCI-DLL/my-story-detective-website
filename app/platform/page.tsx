const learningAreas = [
  ["01", "Comprehension through conversation", "During interactive reading, the AI poses questions about explicit information in the story as well as questions that invite inference, perspective-taking, and personal connections."],
  ["02", "Vocabulary in context", "Guided discussion brings attention to useful words within the story itself, helping children explore language as part of meaning-making."],
  ["03", "Decoding connected to text", "Phonics and word-reading practice use decodable words drawn from the storybooks, connecting letter-sound work with the texts children are reading."],
  ["04", "Responsive support", "Questions, follow-up prompts, and feedback are designed to adjust to a child’s responses, providing more practice or support when it is needed."],
];

const experienceSteps = [
  ["Choose a story", "Children enter a library of illustrated ebooks, select a title, and read or listen along."],
  ["Talk about meaning", "Between pages, conversational moments invite children to answer questions and explain their thinking aloud."],
  ["Practice foundational skills", "Story-connected activities provide opportunities to work on vocabulary, letter-sound correspondences, and word reading."],
  ["Build on each response", "The experience is designed to use a child’s answers to offer relevant feedback, follow-up questions, and additional practice."],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function PlatformPage() {
  return <main className="platform-page">
    <header className="platform-page-header">
      <a className="platform-brand" href="/"><span aria-hidden="true"></span><div><b>MY STORY DETECTIVE</b><small>UC Irvine · Digital Learning Lab</small></div></a>
      <a className="platform-back" href="/#platform">Back to home <Arrow /></a>
    </header>

    <section className="platform-hero-detail">
      <p className="eyebrow">THE PLATFORM</p>
      <div><h1>Reading becomes an active conversation.</h1><p>My Story Detective is a web-based, AI-supported literacy experience designed to give K–2 students guided practice with language, comprehension, and word reading—within the meaningful context of illustrated stories.</p></div>
      <aside><span>DESIGNED TO CONNECT</span><strong>Reading for meaning<br />and reading the words.</strong><p>Dialogic reading and systematic phonics work together to support the two essential dimensions of early reading.</p></aside>
    </section>

    <section className="platform-intro">
      <p className="section-kicker">WHAT IT IS</p>
      <div><h2>An AI-supported literacy coach that keeps children thinking, talking, and reading.</h2><p>My Story Detective extends teacher-led dialogic reading with a conversational agent that can prompt children to explain their thinking, build vocabulary, and revisit ideas in a story. It also integrates word-reading practice so children can work on foundational decoding skills in connection with what they read.</p></div>
    </section>

    <section className="platform-flow" aria-labelledby="experience-heading">
      <div className="platform-flow-heading"><p className="section-kicker">HOW THE EXPERIENCE WORKS</p><h2 id="experience-heading">A connected learning loop.</h2><p>Each part of the experience is designed to support the next—from choosing a book to discussing its ideas to practicing the words within it.</p></div>
      <ol>{experienceSteps.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
    </section>

    <section className="platform-learning">
      <div className="platform-learning-copy"><p className="section-kicker">MAJOR COMPONENTS</p><h2>One story experience, multiple paths to learning.</h2><p>My Story Detective brings together the core skills children need for successful reading rather than treating them as separate tasks.</p><a className="platform-home-link" href="/#research">Explore the research foundation <Arrow /></a></div>
      <div className="platform-learning-grid">{learningAreas.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="platform-showcase-detail">
      <div className="showcase-copy"><p className="section-kicker">STORIES + DIALOGUE</p><h2>Every response can become the next learning opportunity.</h2><p>Questions can ask children to recall information, make inferences, consider a character’s perspective, or connect an idea to their own experience. Their responses give the conversational agent a basis for relevant feedback and follow-up.</p><p>The goal is not simply to move through a book. It is to help children actively use language while they build understanding.</p></div>
      <div className="platform-detail-images"><img src="/platform/story-preview.png" alt="Illustrated storybook interface used for interactive co-reading" /><img src="/platform/dialogue-preview.jpg" alt="Examples of AI-supported questions and feedback during story reading" /></div>
    </section>

    <section className="platform-showcase-detail reverse">
      <div className="showcase-copy"><p className="section-kicker">WORDS + SOUNDS</p><h2>Decoding practice grounded in the story.</h2><p>Phonics activities are designed around words in the storybooks. Children can work with letter-sound correspondences, blend sounds to read words, and receive immediate feedback during practice.</p><p>This link between word reading and meaningful text helps make foundational skills part of a larger reading experience.</p></div>
      <div className="platform-detail-images wide"><img src="/platform/decoding-practice.png" alt="Word, sentence, and decodable reading activities" /><img src="/platform/ai-feedback.png" alt="Examples of feedback during word-reading practice" /></div>
    </section>

    <section className="platform-context">
      <div><p className="section-kicker">DESIGNED FOR REAL SETTINGS</p><h2>Built to fit school and extend into home reading.</h2></div>
      <div className="platform-context-cards"><article><span>IN CLASSROOMS</span><h3>Support during literacy time</h3><p>The platform is designed for use in established classroom routines, including independent center time, while teachers remain central to instruction.</p></article><article><span>AT HOME</span><h3>Prompts for shared reading</h3><p>A family-facing experience is planned to help caregivers and children discuss story-related ideas together during at-home reading.</p></article><article><span>AS IT DEVELOPS</span><h3>Informed by use and feedback</h3><p>Planned progress information and learning data are intended to help educators monitor use and to guide ongoing refinement with teachers, families, and students.</p></article></div>
    </section>

    <section className="platform-detail-cta"><p className="section-kicker">MY STORY DETECTIVE</p><h2>Individualized literacy support, grounded in the science of reading.</h2><a className="contact-button" href="/#contact-us">Talk with our team <Arrow /></a></section>
  </main>;
}
