import type { Metadata } from "next";
import { Arrow, PageHero, SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Contact | My Story Detective",
  description: "Contact the My Story Detective team for general or partnership inquiries.",
};

export default function ContactPage() {
  return <main className="pg">
    <SiteHeader current="/contact" />
    <PageHero kicker="CONTACT" title="Contact the My Story Detective team." lede="Have a question about the project or want to learn more? We’d be happy to hear from you." />
    <section className="pg-section pg-white">
      <div className="sec-head sec-head-only"><div><p className="section-kicker">GET IN TOUCH</p><h2>Questions, collaboration, and research partnerships.</h2></div><div className="pg-copy"><p>We welcome conversations with educators, researchers, and organizations interested in exploring My Story Detective and its potential place in school and home reading experiences.</p><div className="sec-actions"><a className="primary-cta" href="mailto:markw@uci.edu">Email the team <Arrow /></a></div></div></div>
    </section>
    <SiteFooter />
  </main>;
}
