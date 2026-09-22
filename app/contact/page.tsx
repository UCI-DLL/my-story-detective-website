import type { Metadata } from "next";
import { Arrow, SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Contact | My Story Detective",
  description: "Contact the My Story Detective team for general or partnership inquiries.",
};

export default function ContactPage() {
  return <main className="contact-page">
    <SiteHeader />
    <section className="contact-hero"><p className="eyebrow">CONTACT</p><div><h1>Contact the My Story Detective team.</h1><p>Have a question about the project or want to learn more? We’d be happy to hear from you.</p></div></section>
    <section className="contact-detail"><div><p className="section-kicker">GET IN TOUCH</p><h2>Questions, collaboration, and research partnerships.</h2></div><div><p>We welcome conversations with educators, researchers, and organizations interested in exploring My Story Detective and its potential place in school and home reading experiences.</p><a className="contact-button" href="mailto:markw@uci.edu">Email the team <Arrow /></a></div></section>
    <SiteFooter />
  </main>;
}
