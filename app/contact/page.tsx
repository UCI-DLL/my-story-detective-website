import type { Metadata } from "next";
import { Arrow, SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Contact | My Story Detective",
  description: "Contact the My Story Detective team for general or partnership inquiries.",
};

export default function ContactPage() {
  return <main className="contact-page">
    <SiteHeader />
    <section className="contact-hero"><p className="eyebrow">CONTACT</p><div><h1>Start a conversation.</h1><p>Connect with the My Story Detective team for general inquiries or to explore how the project can fit your teachers, students, and existing literacy schedule.</p></div></section>
    <section className="contact-detail"><div><p className="section-kicker">GET IN TOUCH</p><h2>Questions, collaboration, and research partnerships.</h2></div><div><p>Interested in becoming a research and development partner? We welcome a conversation about My Story Detective and its potential place in school and home reading experiences.</p><a className="contact-button" href="mailto:markw@uci.edu">Email the team <Arrow /></a></div></section>
    <SiteFooter />
  </main>;
}
