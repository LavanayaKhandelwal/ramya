import { CommerceBoard } from '../components/internship/CommerceBoard';
import { SocialBoard } from '../components/internship/SocialBoard';
import { WireBlock } from '../components/WireBlock';

/** Mirrors lavanaya InternshipExperiencePage: two boards, one scroll (wireframe). */
export function InternshipExperiencePage() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 16px' }}>
      <WireBlock label="Internship experience — header (company / role / overview)" minHeight={100} />
      <SocialBoard />
      <CommerceBoard />
      <WireBlock label="Internship experience — footer CTA → /internship/learnings" minHeight={80} />
    </div>
  );
}
