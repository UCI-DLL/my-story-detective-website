import Link from "next/link";

const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Platform", "/platform"],
  ["Research", "/research"],
  ["People", "/people"],
  ["Contact Us", "/contact"],
] as const;

const footerNavigation = [
  ["About", "/about"],
  ["Platform", "/platform"],
  ["Research", "/research"],
  ["People", "/people"],
  ["Contact", "/contact"],
] as const;

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function Brand() {
  return <Link className="brand" href="/" aria-label="My Story Detective home"><span className="brand-rule" /><span><b>MY STORY DETECTIVE</b><small>UC Irvine · Digital Learning Lab</small></span></Link>;
}

export function SiteHeader() {
  return <header className="site-header"><Brand /><nav aria-label="Main navigation">{navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav></header>;
}

export function SiteFooter() {
  return <footer><Brand /><p>An AI-supported literacy coach for struggling readers, developed at the UC Irvine Digital Learning Lab.</p><div>{footerNavigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div><aside className="funding-ack"><b>Funding acknowledgment</b><p>The contents of this website were developed under a cooperative agreement with the U.S. Department of Education, Office of Special Education Programs (Award No. H327S260038). However, those contents do not necessarily represent the policy of the Department of Education, and you should not assume endorsement by the Federal Government.</p></aside><small>© 2026 My Story Detective · University of California, Irvine</small></footer>;
}

export function WebsiteIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><path d="M3.8 12h16.4M12 3.5c2.1 2.3 3.2 5.1 3.2 8.5S14.1 18.2 12 20.5C9.9 18.2 8.8 15.4 8.8 12S9.9 5.8 12 3.5Z" /></svg>;
}

export function LinkedInIcon() {
  return <svg className="linkedin-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.12 20.45H3.56V9h3.56v11.45ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28Z" /></svg>;
}
