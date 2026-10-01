import { SkillsPanel } from './SkillsPanel';
import { strategicExpertise } from '../../data/skills';

/**
 * Left panel of the Skills page. Placement (left: 6.5%, 43% wide) is CSS —
 * `.skills-panel-expertise` — so the record alone decides what is in it.
 */
export function ExpertisePanel() {
  return (
    <SkillsPanel
      panel={strategicExpertise}
      panelClass="skills-panel-expertise"
      headingId="skills-expertise-heading"
    />
  );
}