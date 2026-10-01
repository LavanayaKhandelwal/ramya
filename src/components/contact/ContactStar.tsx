/**
 * The section's decorative sparkle.
 *
 * The brief wants three navy four-point stars hugging the card's edges, and
 * there is no star file in Ramya Portfolio Images — the only candidate is the
 * 2172x724 `design elements-three-flower-ribbon-star.png` composite, which is
 * ribbon, flowers and several sparkles in one sheet, not a standalone mark. See
 * ../../data/contact.ts for the full audit.
 *
 * So it is drawn: a four-point star as two opposing quadratic pairs, concave at
 * the waist, which is the sparkle the Skills lockup and the Projects section
 * both use. One component fills all three positions — the size and placement
 * live in `.contact-star--left`, `--top-right` and `--bottom-center` — so the
 * three cannot drift apart in shape, and the rotation modifier is what turns the
 * bottom one on its side the way the reference has it.
 *
 * It is aria-hidden: the section's own heading carries the meaning, and three
 * decorative sparkles announced as images would be noise.
 */
export function ContactStar({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`contact-star ${className}`.trim()}
      viewBox="0 0 24 24"
      aria-hidden
      focusable="false"
    >
      <path
        d="M12 0c.7 6.4 5.6 11.3 12 12-6.4.7-11.3 5.6-12 12-.7-6.4-5.6-11.3-12-12 6.4-.7 11.3-5.6 12-12Z"
        fill="currentColor"
      />
    </svg>
  );
}
