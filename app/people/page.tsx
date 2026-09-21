import type { Metadata } from "next";
import { LinkedInIcon, SiteFooter, SiteHeader, WebsiteIcon } from "../../components/SiteChrome";
import { team } from "../../components/team";

export const metadata: Metadata = {
  title: "People | My Story Detective",
  description: "The researchers and educators behind My Story Detective.",
};

export default function PeoplePage() {
  return <main className="people-page">
    <SiteHeader />
    <section className="people-hero"><p className="eyebrow">THE TEAM</p><div><h1>Research team behind the platform.</h1><p>My Story Detective brings together expertise in AI, early reading development, multilingual learning, and classroom practice.</p></div></section>
    <section className="people-directory" aria-labelledby="team-directory-heading"><div className="people-directory-heading"><p className="section-kicker">MY STORY DETECTIVE</p><h2 id="team-directory-heading">Meet the team.</h2></div><div className="people-directory-grid">{team.map(person => <article key={person.name}><div className="portrait"><img src={person.image} alt={`Portrait of ${person.name}`} /></div><h3>{person.name}</h3><h4>{person.title}</h4><p>{person.bio}</p><div className="person-links" aria-label={`${person.name}'s professional links`}>{person.website && <a href={person.website} target="_blank" rel="noreferrer" aria-label={`${person.name}'s website`} title="Website"><WebsiteIcon /></a>}{person.linkedin && <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label={`${person.name}'s LinkedIn profile`} title="LinkedIn"><LinkedInIcon /></a>}</div></article>)}</div></section>
    <SiteFooter />
  </main>;
}
