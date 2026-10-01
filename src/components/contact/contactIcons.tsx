import type { ReactElement } from 'react';

/**
 * Contact icons.
 *
 * These are DRAWN, not supplied — see ../../data/contact.ts for the file-by-file
 * audit. Of the brief's five layers only the 1672x941 checkerboard ground exists
 * in Ramya Portfolio Images; there is no envelope, pin, handset or LinkedIn file,
 * and `item.icon` is therefore null on every row.
 *
 * Left as null, each row renders an empty 64px circle with the text floating
 * after it, which is not the reference. So each id gets a 24x24 line glyph here
 * in the brief's own language: 1.4px stroke, round joins, no fill, in the
 * section's #123F82. That is the same thin-stroke vocabulary skillIcons.tsx
 * already established for the Skills pills, so the two sections read as one
 * design system rather than as two.
 *
 * They sit INSIDE the pale blue circle (#DCE9F8) the brief specifies, drawn by
 * .contact-icon, and the circle is the thing that carries the "icon in a disc"
 * read — so the glyph itself only has to be legible at 24px.
 *
 * `item.icon` still wins when set, so dropping in the real PNGs remains a
 * data-only change and these glyphs are simply bypassed.
 */

/** Keyed by `ContactItemData.id`. Every id in data/contact.ts has an entry. */
export const CONTACT_ICONS: Record<string, ReactElement> = {
  // An envelope, flap open — the address is the subject here, so the mark is
  // the closed letterform with its diagonals rather than a paper plane.
  email: (
    <>
      <rect x="2.6" y="5" width="18.8" height="14" rx="1.6" />
      <path d="m3.4 6.4 8.6 6.6 8.6-6.6" />
    </>
  ),

  // A map pin with a counter, drawn with a tail so it reads as a marker rather
  // than a plain circle at 24px.
  location: (
    <>
      <path d="M12 21.2c4.2-4.6 6.3-7.9 6.3-10.4a6.3 6.3 0 1 0-12.6 0c0 2.5 2.1 5.8 6.3 10.4Z" />
      <circle cx="12" cy="10.6" r="2.2" />
    </>
  ),

  // The classic handset, angled so it sits on the same optical diagonal as the
  // envelope's flap.
  phone: (
    <>
      <path d="M8 3.6 9.9 8a1.4 1.4 0 0 1-.4 1.5L7.9 10.8a11.4 11.4 0 0 0 5.3 5.3l1.3-1.6a1.4 1.4 0 0 1 1.5-.4l4.4 1.9v3.2a1.6 1.6 0 0 1-1.8 1.6C10.3 20.6 3.4 13.7 3.2 5.4A1.6 1.6 0 0 1 4.8 3.6H8Z" />
    </>
  ),

  // LinkedIn: the real mark — square-ish "in" inside a rounded square. The
  // one filled brand mark in the set, because the brief names the platform and
  // the recognisable silhouette is the point.
  linkedin: (
    <>
      <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="2.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="7.4" cy="7.6" r="1.15" fill="currentColor" stroke="none" />
      <path d="M7.4 10.6v6" />
      <path d="M11.4 16.6v-6M11.4 12.6a2.4 2.4 0 0 1 4.8 0v4" />
    </>
  ),
};

/**
 * The glyph for a contact row, or undefined if that id has none drawn.
 * Renders the pale blue disc behind it, which is the brief's icon container.
 */
export function ContactIcon({ id }: { id: string }) {
  const glyph = CONTACT_ICONS[id];

  if (!glyph) return null;

  return (
    <span className="contact-icon" aria-hidden>
      <svg
        className="contact-icon-glyph"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        focusable="false"
      >
        {glyph}
      </svg>
    </span>
  );
}
