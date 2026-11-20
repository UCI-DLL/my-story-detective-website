import type { Metadata } from "next";
import { Arrow, CtaBand, PageHero, SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Research | My Story Detective",
  description: "The planned research and research foundations of My Story Detective.",
};

const plannedResearch = [
  ["01", "Develop with users", "This project will refine My Story Detective with input from children, educators, and families, with attention to usability, accessibility, engagement, and fit in real learning settings."],
  ["02", "Support reading in school and at home", "The research will examine implementation in classrooms and family reading contexts, alongside resources that help educators and caregivers use the platform."],
  ["03", "Learn from use", "The project will study platform use, implementation, and children’s language and literacy development to guide ongoing improvement."],
];

export default function ResearchPage() {
  return <main className="pg">
    <SiteHeader current="/research" />
    <PageHero kicker="THE RESEARCH" title="Research that guides every story." lede="Building on UCI research in early literacy and AI-supported dialogic learning, My Story Detective brings together Professor Young-Suk Kim’s foundational early-literacy research and the UCI Digital Learning Lab’s work with conversational agents. The project’s planned research will examine how these foundations can support children’s language, comprehension, and word reading.">
      <div className="pg-hero-links"><span>RESEARCH FOUNDATIONS</span><a href="#early-literacy-research">Professor Young-Suk Kim’s Early Literacy Research <span aria-hidden="true">↓</span></a><a href="#converse-to-learn-dialogic-reading-research">Converse to Learn Dialogic Reading Research <span aria-hidden="true">↓</span></a></div>
    </PageHero>

    <section className="pg-section pg-white" aria-labelledby="plan-heading">
      <div className="sec-head"><div><p className="section-kicker">PLANNED RESEARCH FOR MY STORY DETECTIVE</p><h2 id="plan-heading">Research with children, educators, and families.</h2></div><div><p className="sec-lede">My Story Detective will be developed, studied, and refined alongside the educators and families who use it. The project will include stories from the established Story Detective and COMPASS collections, as well as <em>The Science Adventures of Luna and Leo</em>, a science storybook series designed for young children. The planned work will examine oral-language and word-reading supports alongside children’s engagement with stories and comprehension.</p></div></div>
      <ol className="pg-grid pg-grid-3 pg-steps">{plannedResearch.map(([number, title, text]) => <li key={number} className="pg-card pg-card-paper"><span className="pg-step-number">{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </section>

    <section className="pg-section pg-paper" id="early-literacy-research" aria-labelledby="kim-heading">
      <div className="sec-head"><div><p className="section-kicker">PROFESSOR YOUNG-SUK KIM’S EARLY LITERACY RESEARCH</p><h2 id="kim-heading">A foundation for language and literacy development.</h2></div><div><p className="sec-lede">Professor Young-Suk Kim’s research connects the language, knowledge, and word-reading skills that children draw on as they become readers.</p></div></div>
      <div className="pg-grid pg-grid-2">
        <article className="pg-card"><span className="pg-card-kicker">READING DEVELOPMENT</span><h3>Direct and Indirect Effects Model of Reading</h3><p>Kim’s model brings together language comprehension, word reading, vocabulary, background knowledge, and higher-order thinking. It helps guide My Story Detective’s combined focus on making meaning and reading words.</p></article>
        <article className="pg-card"><span className="pg-card-kicker">STORY-BASED LEARNING</span><h3>Story Detective and COMPASS</h3><p>These teacher-led interventions use stories to support vocabulary, grammar, text structure, inference, and comprehension monitoring. Their research-informed materials and prompts provide an important foundation for My Story Detective.</p></article>
      </div>
      <div className="pg-refs"><p className="pg-refs-label">SELECTED PUBLICATIONS</p><ul>
        <li>Kim, Y.-S. G. (2020). <a href="https://doi.org/10.1177/0022219420908239" target="_blank" rel="noreferrer">Toward integrative reading science: The Direct and Indirect Effects Model of Reading.</a> <em>Journal of Learning Disabilities, 53</em>(6), 469–491.</li>
        <li>Kim, Y.-S. G. (2023). <a href="https://www.guilford.com/books/Handbook-on-the-Science-of-Early-Literacy/Cabell-Neuman-Patton-Terry/9781462551545" target="_blank" rel="noreferrer">Simplicity meets complexity: Expanding the Simple View of Reading with the Direct and Indirect Effects Model of Reading.</a> In S. Q. Cabell, S. B. Neuman, &amp; N. Patton Terry (Eds.), <em>Handbook on the science of early literacy</em> (pp. 9–22). Guilford Press.</li>
        <li>Kim, Y.-S. G., &amp; Leachman, M. (2026). <a href="https://www.guilford.com/books/Language-and-Literacy-Beyond-Decoding/Silverman-Keane/9781462559596/contents" target="_blank" rel="noreferrer">From ears to eyes: Supporting reading comprehension through systematic instruction on listening comprehension.</a> In R. D. Silverman &amp; K. Keane (Eds.), <em>Language and Literacy Beyond Decoding: Evidence-Based Instruction in Grades PreK–6</em> (pp. 73–92). Guilford Press.</li>
      </ul></div>
    </section>

    <section className="pg-section pg-white" id="converse-to-learn-dialogic-reading-research" aria-labelledby="ctl-heading">
      <div className="sec-head"><div><p className="section-kicker">CONVERSE TO LEARN DIALOGIC READING RESEARCH</p><h2 id="ctl-heading">Dialogic reading with conversational agents.</h2></div><div><p className="sec-lede">The UCI Digital Learning Lab’s Converse to Learn research explores how conversational agents can support children’s learning with stories, video, and shared reading. This research informs My Story Detective’s dialogue-based reading experience.</p><div className="sec-actions"><a className="pg-outline-btn" href="https://www.conversetolearn.org/" target="_blank" rel="noreferrer">Learn more about the Converse to Learn project <Arrow /></a></div></div></div>
      <div className="pg-grid pg-grid-3">
        <article className="pg-card pg-card-paper"><span className="pg-card-kicker">STORY COMPREHENSION</span><h3>Conversation supports engagement with stories</h3><p>Converse to Learn research examines children’s story comprehension and engagement while reading with a conversational agent.</p></article>
        <article className="pg-card pg-card-paper"><span className="pg-card-kicker">READING PARTNERS</span><h3>Responsive dialogue during reading</h3><p>Studies compare children’s conversations with a conversational agent and a human reading partner, helping inform the design of story-centered exchanges.</p></article>
        <article className="pg-card pg-card-paper"><span className="pg-card-kicker">FAMILY READING</span><h3>Shared reading across languages</h3><p>Bilingual conversational-agent research explores ways to support vocabulary, engagement, and family conversation during shared reading.</p></article>
      </div>
      <div className="pg-refs"><p className="pg-refs-label">SELECTED PUBLICATIONS</p><ul>
        <li>Xu, Y., Aubele, J., Vigil, V., Bustamante, A. S., Kim, Y.-S., &amp; Warschauer, M. (2022). <a href="https://doi.org/10.1111/cdev.13708" target="_blank" rel="noreferrer">Dialogue with a conversational agent promotes children’s story comprehension via enhancing engagement.</a> <em>Child Development, 93</em>(2), e149–e167.</li>
        <li>Xu, Y., Wang, D., Collins, P., Lee, H., &amp; Warschauer, M. (2021). <a href="https://doi.org/10.1016/j.compedu.2020.104059" target="_blank" rel="noreferrer">Same benefits, different communication patterns: Comparing children’s reading with a conversational agent vs. a human partner.</a> <em>Computers &amp; Education, 161</em>, Article 104059.</li>
        <li>He, K., Cervera, K., Levine, J., Xu, Y., Collins, P., &amp; Warschauer, M. (2025). <a href="https://doi.org/10.1016/j.ijhcs.2025.103489" target="_blank" rel="noreferrer">Promoting parent-child shared reading with a bilingual conversational agent.</a> <em>International Journal of Human-Computer Studies, 199</em>, Article 103489.</li>
      </ul></div>
    </section>

    <CtaBand kicker="MY STORY DETECTIVE" title="Research-guided literacy support for young readers." text="Interested in becoming a research and development partner? Learn how to start a conversation with the My Story Detective team." href="/contact" label="Talk with our team" />
    <SiteFooter />
  </main>;
}
