import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research | My Story Detective",
  description: "The planned research and research foundations of My Story Detective.",
};

const plannedResearch = [
  ["01", "Develop with users", "This project will refine My Story Detective with input from children, educators, and families, with attention to usability, accessibility, engagement, and fit in real learning settings."],
  ["02", "Support reading in school and at home", "The research will examine implementation in classrooms and family reading contexts, alongside resources that help educators and caregivers use the platform."],
  ["03", "Learn from use", "The project will study platform use, implementation, and children’s language and literacy development to guide ongoing improvement."],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function ResearchPage() {
  return <main className="research-page">
    <header className="research-page-header">
      <a className="platform-brand" href="/"><span aria-hidden="true"></span><div><b>MY STORY DETECTIVE</b><small>UC Irvine · Digital Learning Lab</small></div></a>
      <a className="platform-back" href="/#research">Back to home <Arrow /></a>
    </header>

    <section className="research-hero-detail">
      <p className="eyebrow">THE RESEARCH</p>
      <div><h1>Research that guides every story.</h1><p>Building on UCI research in early literacy and AI-supported dialogic learning, My Story Detective brings together Young-Suk Kim’s foundational early-literacy research and the UCI Digital Learning Lab’s work with conversational agents. The project’s planned research will examine how these foundations can support children’s language, comprehension, and word reading.</p></div>
      <aside><span>RESEARCH FOUNDATIONS</span><strong>Built on two research foundations.</strong><p><a className="research-framework-link" href="#early-literacy-research">Young-Suk Kim’s Early Literacy Research</a> and <a className="research-framework-link" href="#converse-to-learn-dialogic-reading-research">Converse to Learn Dialogic Reading Research</a> inform the project’s planned work to support children’s language, comprehension, and word reading.</p></aside>
    </section>

    <section className="research-plan" aria-labelledby="plan-heading">
      <div className="research-plan-heading"><p className="section-kicker">PLANNED RESEARCH FOR MY STORY DETECTIVE</p><h2 id="plan-heading">Research with children, educators, and families.</h2><p>My Story Detective will be developed, studied, and refined alongside the educators and families who use it. The project will include stories from the established Story Detective and COMPASS collections, as well as <em>The Science Adventures of Luna and Leo</em>, a science storybook series designed for young children. The planned work will examine oral-language and word-reading supports alongside children’s engagement with stories and comprehension.</p></div>
      <div className="research-plan-list"><p className="research-overview-label">RESEARCH OVERVIEW</p><ol>{plannedResearch.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div>
    </section>

    <section className="research-foundations" id="early-literacy-research" aria-labelledby="kim-heading">
      <div className="research-section-heading"><p className="section-kicker">YOUNG-SUK KIM’S EARLY LITERACY RESEARCH</p><h2 id="kim-heading">A foundation for language and literacy development.</h2><p>Young-Suk Kim’s research connects the language, knowledge, and word-reading skills that children draw on as they become readers.</p><a className="research-section-link" href="#early-literacy-references">Explore selected publications <Arrow /></a></div>
      <p className="research-overview-label">RESEARCH OVERVIEW</p><div className="research-foundation-grid">
        <article><span>READING DEVELOPMENT</span><h3>Direct and Indirect Effects Model of Reading</h3><p>Kim’s model brings together language comprehension, word reading, vocabulary, background knowledge, and higher-order thinking. It helps guide My Story Detective’s combined focus on making meaning and reading words.</p></article>
        <article><span>STORY-BASED LEARNING</span><h3>Story Detective and COMPASS</h3><p>These teacher-led interventions use stories to support vocabulary, grammar, text structure, inference, and comprehension monitoring. Their research-informed materials and prompts provide an important foundation for My Story Detective.</p></article>
      </div>
    </section>

    <section className="research-lineage-detail" id="converse-to-learn-dialogic-reading-research">
      <div><p className="section-kicker">CONVERSE TO LEARN DIALOGIC READING RESEARCH</p><h2>Dialogic reading with conversational agents.</h2><p>The UCI Digital Learning Lab’s Converse to Learn research explores how conversational agents can support children’s learning with stories, video, and shared reading. This research informs My Story Detective’s dialogue-based reading experience.</p><a className="research-section-link research-section-link-light" href="#converse-to-learn-references">Explore selected publications <Arrow /></a></div>
      <div className="research-lineage-card-area"><p className="research-overview-label">RESEARCH OVERVIEW</p><div className="research-lineage-cards">
        <article><span>STORY COMPREHENSION</span><h3>Conversation supports engagement with stories.</h3><p>Converse to Learn research examines children’s story comprehension and engagement while reading with a conversational agent.</p></article>
        <article><span>READING PARTNERS</span><h3>Responsive dialogue during reading.</h3><p>Studies compare children’s conversations with a conversational agent and a human reading partner, helping inform the design of story-centered exchanges.</p></article>
        <article><span>FAMILY READING</span><h3>Shared reading across languages.</h3><p>Bilingual conversational-agent research explores ways to support vocabulary, engagement, and family conversation during shared reading.</p></article>
      </div></div>
    </section>

    <section className="research-references" aria-labelledby="references-heading">
      <div><p className="section-kicker">SELECTED RESEARCH</p><h2 id="references-heading">Explore the research foundations.</h2><p>These selected publications and project records offer a starting point for learning more about the work that informs My Story Detective.</p></div>
      <div className="reference-list">
        <p id="early-literacy-references"><strong>Young-Suk Kim’s Early Literacy Research</strong></p>
        <p>Kim, Y.-S. G. (2020). <a href="https://doi.org/10.1177/0022219420908239" target="_blank" rel="noreferrer">Toward integrative reading science: The Direct and Indirect Effects Model of Reading.</a> <em>Journal of Learning Disabilities, 53</em>(6), 469–491.</p>
        <p>Kim, Y.-S. G. (2023). <a href="https://www.guilford.com/books/Handbook-on-the-Science-of-Early-Literacy/Cabell-Neuman-Patton-Terry/9781462551545" target="_blank" rel="noreferrer">Simplicity meets complexity: Expanding the Simple View of Reading with the Direct and Indirect Effects Model of Reading.</a> In <em>Handbook on the Science of Early Literacy.</em></p>
        <p>Phillips, B. M., Kim, Y.-S. G., Lonigan, C. J., Connor, C. M., Clancy, J., &amp; Al Otaiba, S. (2021). <a href="https://ies.ed.gov/ncee/wwc/Study/90612" target="_blank" rel="noreferrer">Supporting language and literacy development with intensive small-group interventions: An early childhood efficacy study.</a> <em>Early Childhood Research Quarterly, 57</em>, 75–88.</p>
        <p id="converse-to-learn-references"><strong>Converse to Learn Dialogic Reading Research</strong></p>
        <p>Xu, Y., Aubele, J., Vigil, V., Bustamante, A., Kim, Y.-S., &amp; Warschauer, M. (2021). <a href="https://doi.org/10.1111/cdev.13708" target="_blank" rel="noreferrer">Dialogue with a conversational agent promotes children’s story comprehension via enhanced engagement.</a> <em>Child Development.</em></p>
        <p>Xu, Y., &amp; Warschauer, M. (2020). <a href="https://doi.org/10.1016/j.compedu.2020.104059" target="_blank" rel="noreferrer">Same benefits, different communication patterns: Comparing children’s reading with a conversational agent vs. a human partner.</a> <em>Computers &amp; Education.</em></p>
        <p>He, K., Cervera, K., Levine, J., Xu, Y., Collins, P., &amp; Warschauer, M. (2025). <a href="https://doi.org/10.1016/j.ijhcs.2025.103489" target="_blank" rel="noreferrer">Promoting parent-child shared reading with a bilingual conversational agent.</a> <em>International Journal of Human-Computer Studies, 199.</em></p>
        <a className="converse-project-link" href="https://www.conversetolearn.org/" target="_blank" rel="noreferrer">Learn more about the Converse to Learn project <Arrow /></a>
      </div>
    </section>

    <section className="research-detail-cta"><p className="section-kicker">MY STORY DETECTIVE</p><h2>Research-guided literacy support for young readers.</h2><a className="contact-button" href="/#contact-us">Talk with our team <Arrow /></a></section>
  </main>;
}
