import { CtaBand, PageHero, SiteFooter, SiteHeader } from "../../components/SiteChrome";

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

const settings = [
  ["IN CLASSROOMS", "Support during literacy time", "The platform is designed for use in established classroom routines, including independent center time, while teachers remain central to instruction."],
  ["AT HOME", "Prompts for shared reading", "A family-facing experience is planned to help caregivers and children discuss story-related ideas together during at-home reading."],
];

export default function PlatformPage() {
  return <main className="pg">
    <SiteHeader current="/platform" />
    <PageHero kicker="THE PLATFORM" title="Reading becomes an active conversation." lede="My Story Detective is a web-based, AI-supported literacy experience designed to give K⁠–⁠2 students guided practice with language, comprehension, and word reading—within the meaningful context of illustrated stories.">
      <div className="pg-hero-note"><span>DESIGNED TO CONNECT</span><strong>Reading for meaning and reading the words.</strong><p>Dialogic reading and systematic phonics work together to support the two essential dimensions of early reading.</p></div>
    </PageHero>

    <section className="pg-section pg-white">
      <div className="sec-head sec-head-only"><div><p className="section-kicker">WHAT IT IS</p><h2>An AI-supported literacy coach that keeps children thinking, talking, and reading.</h2></div><div className="pg-copy"><p>My Story Detective extends teacher-led dialogic reading with a conversational agent that can prompt children to explain their thinking, build vocabulary, and revisit ideas in a story. It also integrates word-reading practice so children can work on foundational decoding skills in connection with what they read.</p><p className="pg-note"><b>Story library</b> · The platform brings together evidence-based Story Detective and COMPASS titles with <strong>The Science Adventures of Luna and Leo</strong>, a bilingual, community-informed science ebook collection.</p></div></div>
    </section>

    <section className="pg-section pg-paper" aria-labelledby="experience-heading">
      <div className="sec-head"><div><p className="section-kicker">HOW THE EXPERIENCE WORKS</p><h2 id="experience-heading">A connected learning loop.</h2></div><div><p className="sec-lede">Each part of the experience is designed to support the next—from choosing a book to discussing its ideas to practicing the words within it.</p></div></div>
      <ol className="pg-grid pg-grid-4 pg-steps">{experienceSteps.map(([title, text], index) => <li key={title} className="pg-card"><span className="pg-step-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </section>

    <section className="pg-section pg-white">
      <div className="sec-head"><div><p className="section-kicker">MAJOR COMPONENTS</p><h2>One story experience, multiple paths to learning.</h2></div><div><p className="sec-lede">My Story Detective brings together the core skills children need for successful reading rather than treating them as separate tasks.</p><p className="pg-note"><b>Instructional framework</b> · <b>Oral language</b> supports vocabulary, listening comprehension, and expressive language. <b>Decoding</b> supports phonics, phonological awareness, and word reading.</p></div></div>
      <div className="pg-grid pg-grid-2">{learningAreas.map(([number, title, text]) => <article key={number} className="pg-card"><span className="pg-card-kicker">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="pg-section pg-white pg-tight-top"><div className="lang-showcase">
      <div className="pf-toolbar"><span className="pf-toolbar-label">Example screens</span><div className="lang-toggle-row"><span className="lang-label-en">English</span><input className="lang-input" id="lang-toggle" type="checkbox" role="switch" aria-label="Toggle example images between English and Spanish" /><label className="lang-switch" htmlFor="lang-toggle"><span className="lang-switch-thumb" /></label><span className="lang-label-es">Español</span></div></div>
      <div className="pf-row">
        <div className="pf-head"><p className="section-kicker">STORIES + DIALOGUE</p><h3>Every response can become the next learning opportunity.</h3></div>
        <div className="pg-copy pg-copy-wide"><p>Questions can ask children to recall information, make inferences, consider a character’s perspective, or connect an idea to their own experience. Their responses give the conversational agent a basis for relevant feedback and follow-up.</p><p>The goal is not simply to move through a book. It is to help children actively use language while they build understanding.</p></div>
        <div className="pg-shots"><div className="pg-shot"><img className="lang-en" src="/platform/story-preview.png" alt="Illustrated storybook interface used for interactive co-reading" /><div className="lang-es showcase-placeholder" role="img" aria-label="Spanish version coming soon"><span>ES</span><p>Versión en español próximamente</p><small>Spanish screenshot coming soon</small></div></div><div className="pg-shot"><img className="lang-en" src="/platform/dialogue-preview.jpg" alt="Examples of AI-supported questions and feedback during story reading" /><div className="lang-es showcase-placeholder" role="img" aria-label="Spanish version coming soon"><span>ES</span><p>Versión en español próximamente</p><small>Spanish screenshot coming soon</small></div></div></div>
      </div>
      <div className="pf-row">
        <div className="pf-head"><p className="section-kicker">WORDS + SOUNDS</p><h3>Decoding practice grounded in the story.</h3></div>
        <div className="pg-copy pg-copy-wide"><p>Phonics activities are designed around words in the storybooks. Children can work with letter-sound correspondences, blend sounds to read words, and receive immediate feedback during practice.</p><p>This link between word reading and meaningful text helps make foundational skills part of a larger reading experience.</p></div>
        <div className="pg-shots"><div className="pg-shot"><img className="lang-en" src="/platform/decoding-practice.png" alt="Word, sentence, and decodable reading activities" /><div className="lang-es showcase-placeholder" role="img" aria-label="Spanish version coming soon"><span>ES</span><p>Versión en español próximamente</p><small>Spanish screenshot coming soon</small></div></div><div className="pg-shot"><img className="lang-en" src="/platform/ai-feedback.png" alt="Examples of feedback during word-reading practice" /><div className="lang-es showcase-placeholder" role="img" aria-label="Spanish version coming soon"><span>ES</span><p>Versión en español próximamente</p><small>Spanish screenshot coming soon</small></div></div></div>
      </div>
    </div></section>

    <section className="pg-section pg-paper">
      <div className="sec-head"><div><p className="section-kicker">DESIGNED FOR REAL SETTINGS</p><h2>Built to fit school and extend into home reading.</h2></div><div /></div>
      <div className="pg-grid pg-grid-2">{settings.map(([kicker, title, text]) => <article key={kicker} className="pg-card"><span className="pg-card-kicker">{kicker}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <CtaBand kicker="MY STORY DETECTIVE" title="Individualized literacy support, grounded in the science of reading." text="Interested in becoming a research and development partner? Learn how to start a conversation with the My Story Detective team." href="/contact" label="Talk with our team" />
    <SiteFooter />
  </main>;
}
