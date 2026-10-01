/**
 * Skills header — the whole lockup in one transparent PNG.
 *
 * `skills-title.png` (2087x753) is the supplied heading and it arrives as one
 * piece, not as parts: the left vertical rule and its four-point sparkle, the
 * "SKILLS" wordmark, the right horizontal rule and its sparkle, and the
 * "A BLEND OF STRATEGY, CREATIVITY / AND DIGITAL FLUENCY" subtitle are all ink
 * in the one file. Measured as connected components it is exactly three column
 * regions — x58..151 (left rule + star), x235..1338 (wordmark), x1354..2032
 * (right rule + star) — with the subtitle filling y505..669 inside the middle
 * one. Every corner is (0,0,0,0), so there is no background to remove.
 *
 * That is why this component is now one <img> and nothing else: the star is no
 * longer cropped out of `design-elements-flower-ribbon-star.png`, the rule is no
 * longer a div, and the subtitle is no longer HTML type. All three were
 * approximations standing in for artwork that has now arrived, so all three go
 * rather than being drawn a second time on top of the real thing. The matching
 * `.skills-title-line`, `.skills-title-star` and `.skills-subtitle` rules in
 * index.css are deleted with them.
 *
 * `alt` carries the words the artwork prints, because an image is opaque to a
 * screen reader and this is the page's <h1>-equivalent label.
 */

const TITLE = '/ramya-portfolio-images/skills-title.png';

export function SkillsHeader() {
  return (
    <header className="skills-header">
      <img
        className="skills-title"
        src={TITLE}
        alt="Skills — a blend of strategy, creativity and digital fluency"
        draggable={false}
      />
    </header>
  );
}