import { SkillsPanel } from './SkillsPanel';
import { creativeToolkit } from '../../data/skills';

/**
 * Right panel of the Skills page. Mirrors ExpertisePanel: same component, same
 * measure, its own record and its own side of the page (`.skills-panel-toolkit`).
 */
export function ToolkitPanel() {
  return (
    <SkillsPanel
      panel={creativeToolkit}
      panelClass="skills-panel-toolkit"
      headingId="skills-toolkit-heading"
    />
  );
}