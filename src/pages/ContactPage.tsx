import { PageShell } from '../components/PageShell';
import { WireBlock } from '../components/WireBlock';
import { siteData } from '../data/site';

/** Mirrors lavanaya ContactPage two-column spread (wireframe). */
export function ContactPage() {
  return (
    <PageShell
      breadcrumb="HOME / CONTACT"
      eyebrow="STUDIO INTAKE & DIALOGUE"
      title="Contact & Inquiries"
      intro="[Open to opportunities line]"
    >
      <WireBlock label="Contact — direct correspondence (email / location / phone)" minHeight={160}>
        <ul>
          <li>[{siteData.contact.email}]</li>
          <li>[{siteData.contact.location}]</li>
          <li>[{siteData.contact.phone}]</li>
        </ul>
      </WireBlock>
      <WireBlock label="Contact — socials list" minHeight={100}>
        <ul>
          {siteData.contact.socials.map((s) => (
            <li key={s.name}>[{s.name} — {s.handle}]</li>
          ))}
        </ul>
      </WireBlock>
      <WireBlock label="Contact — portrait image + link → /about" minHeight={140} />
    </PageShell>
  );
}
