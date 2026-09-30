import { WireBlock } from '../WireBlock';

/** Mirrors lavanaya home-sections/SkillsSection (wireframe). */
export function SkillsSection() {
  return (
    <WireBlock label="Home — Skills matrix (Business / Digital / Certifications)" minHeight={160}>
      <ul>
        <li>[Business skills list]</li>
        <li>[Digital skills list]</li>
        <li>[Certifications list]</li>
      </ul>
    </WireBlock>
  );
}
