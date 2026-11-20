import type { Metadata } from "next";
import { LinkedInIcon, PageHero, SiteFooter, SiteHeader, WebsiteIcon } from "../../components/SiteChrome";
import { team, type TeamMember } from "../../components/team";

export const metadata: Metadata = {
  title: "People | My Story Detective",
  description: "The researchers and educators behind My Story Detective.",
};

const renderPerson = (person: TeamMember) => <article className="team-card" key={person.name}>
  <span className={`team-portrait${person.name === "Tamara Tate" ? " tamara-portrait" : ""}`}>{person.image ? <img src={person.image} alt={`Portrait of ${person.name}`} /> : <span className="portrait-initials" aria-hidden="true">{person.name.split(" ").map(w => w[0]).join("")}</span>}</span>
  <p className="team-card-role">{person.projectRole}</p>
  <h3>{person.name}</h3>
  <p className="team-card-title">{person.title}</p>
  <p className="team-card-bio">{person.bio}</p>
  {(person.website || person.linkedin) && <div className="person-links" aria-label={`${person.name}'s professional links`}>{person.website && <a href={person.website} target="_blank" rel="noreferrer" aria-label={`${person.name}'s website`} title="Website"><WebsiteIcon /></a>}{person.linkedin && <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label={`${person.name}'s LinkedIn profile`} title="LinkedIn"><LinkedInIcon /></a>}</div>}
</article>;

export default function PeoplePage() {
  return <main className="pg">
    <SiteHeader current="/people" />
    <PageHero kicker="THE TEAM" title="Research team behind the platform." lede="My Story Detective brings together expertise in AI, early reading development, multilingual learning, and classroom practice." />
    <section className="pg-section pg-white" aria-labelledby="team-directory-heading">
      <div className="sec-head"><div><p className="section-kicker">MY STORY DETECTIVE</p><h2 id="team-directory-heading">Meet the team.</h2></div><div /></div>
      <div className="team-card-grid">{team.map(renderPerson)}</div>
    </section>
    <SiteFooter />
  </main>;
}
