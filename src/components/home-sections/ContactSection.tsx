import { WireBlock } from '../WireBlock';

/** Mirrors lavanaya home-sections/ContactSection (wireframe). */
export function ContactSection() {
  return (
    <WireBlock label="Home — Contact CTA band" minHeight={120}>
      <ul>
        <li>[Heading + short line]</li>
        <li>[Email / phone / socials]</li>
        <li>[CTA → /contact]</li>
      </ul>
    </WireBlock>
  );
}
