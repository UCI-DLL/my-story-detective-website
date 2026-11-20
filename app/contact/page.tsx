import type { Metadata } from "next";
import { Arrow, PageHero, SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Contact | My Story Detective",
  description: "Contact the My Story Detective team for general or partnership inquiries.",
};

export default function ContactPage() {
  return <main className="pg pg-contact">
    <SiteHeader current="/contact" />
    <PageHero kicker="CONTACT" title="Contact the My Story Detective team." lede="Have a question about the project or want to learn more? We’d be happy to hear from you.">
      <p className="sec-lede pg-hero-more">We welcome conversations with educators, researchers, and organizations interested in exploring My Story Detective and its potential place in school and home reading experiences.</p>
      <div className="sec-actions"><a className="contact-button pg-hero-btn" href="mailto:markw@uci.edu">Email the team <Arrow /></a></div>
    </PageHero>
    <SiteFooter />
  </main>;
}
