import type { Metadata } from "next";
import { Arrow, CtaBand, PageHero, SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "About | My Story Detective",
  description: "An overview of the purpose and approach behind My Story Detective.",
};

export default function AboutPage() {
  return <main className="pg">
    <SiteHeader current="/about" />
    <PageHero kicker="ABOUT MY STORY DETECTIVE" title="Extending responsive literacy support for young readers." lede="My Story Detective is an AI-supported literacy project for K⁠–⁠2 students, developed at the UC Irvine Digital Learning Lab and Language Literacy Learning Lab." />

    <section className="pg-section pg-white">
      <div className="sec-head sec-head-only"><div><p className="section-kicker">THE PROJECT</p><h2>Supporting the connected skills that early reading requires.</h2></div><div className="pg-copy"><p>Learning to read calls on connected skills: understanding language, making meaning from text, and reading words. My Story Detective is designed to support these dimensions together as children develop as readers.</p><p>The project extends skilled, responsive literacy support to more learners while keeping teachers at the center of instruction.</p></div></div>
    </section>

    <section className="pg-section pg-paper">
      <div className="sec-head"><div><p className="section-kicker">PEDAGOGICAL APPROACH</p><h2>Learning through dialogue.</h2></div><div><p className="sec-lede">Our AI–human dialogue simulates teacher-led dialogic reading, encouraging active verbalization, inference, and reflection.</p></div></div>
      <div className="pg-grid pg-grid-2">
        <article className="pg-card"><span className="pg-card-kicker">ASK</span><h3>Socratic Tutoring</h3><p>Instead of providing answers, the AI asks open-ended questions that prompt students to explain their thinking and build metacognitive awareness.</p></article>
        <article className="pg-card"><span className="pg-card-kicker">ADAPT</span><h3>Adaptive Cues</h3><p>Scaffolding adjusts dynamically to each student’s verbal responses, providing just-in-time support during natural conversation.</p></article>
      </div>
    </section>

    <section className="pg-section pg-white">
      <div className="sec-head sec-head-only"><div><p className="section-kicker">WHY IT MATTERS</p><h2>Individualized support is difficult to deliver at scale.</h2></div><div className="pg-copy"><p>Research shows that one-to-one tutoring can dramatically improve outcomes. Staffing constraints, however, make individualized support difficult to deliver at scale.</p><p>My Story Detective is intended to bring more opportunities for guided literacy support into existing learning time while preserving the central role of educators.</p></div></div>
    </section>

    <section className="pg-section pg-paper">
      <div className="sec-head sec-head-only"><div><p className="section-kicker">WHAT GUIDES THE PROJECT</p><h2>Grounded in early-literacy and dialogic-learning research.</h2></div><div className="pg-copy"><p>My Story Detective builds on Professor Young-Suk Kim’s work in early literacy and the UCI Digital Learning Lab’s research on conversational agents and dialogic learning. These foundations guide the project’s focus on language, comprehension, and word reading.</p><div className="sec-actions"><a className="primary-cta" href="/platform">Explore the platform <Arrow /></a><a className="pg-outline-btn" href="/research">Explore the research <Arrow /></a></div></div></div>
    </section>

    <CtaBand kicker="CONTACT US" title="Bring individualized literacy support to your school." text="Interested in becoming a research and development partner? Learn how to start a conversation with the My Story Detective team." href="/contact" label="Start a conversation" />
    <SiteFooter />
  </main>;
}
