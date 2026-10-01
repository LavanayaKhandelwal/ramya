// Contact section data — the four rows on the home page's contact card.
//
// The list is rendered from this array rather than from duplicated markup:
// ContactItem maps one row, ContactList maps the set. Adding a row is a line
// here and nothing else.
//
// ——— WHAT IS AND IS NOT SUPPLIED ———
//
// `backgroundAsset` IS supplied and is the one real file in this section:
//
//   contact-section-background.png (1672x941)   copied from the source folder's
//                                              `contact section-background.png`.
//                                              The pale blue / warm ivory warped
//                                              checkerboard, used whole, one layer.
//
// Everything else the brief asks for as artwork is ABSENT from Ramya Portfolio
// Images. The folder holds 16 entries and was audited file by file; of the
// brief's five layers only the ground exists:
//
//   ✓ contact-background     contact section-background.png
//   ✗ lets-connect title     no file
//   ✗ curved-line            no file
//   ✗ star                   no file
//   ✗ four contact icons     no file
//
// The near-misses were checked and rejected rather than assumed. The three
// 1536x1024 files (`design-element-top-right.png`, `design-top-right.png`,
// `hero-section-top design element.png`) are all the DARK hero corner treatment
// — the first two bake the blue tile collage and a grey shadow gradient into
// themselves, the third is a near-black arc. None is the light transparent
// double-line curve, and dropping any of them over a pale checkerboard would
// bring a dark vignette with it. `design elements-three-flower-ribbon-star.png`
// is a 2172x724 composite — ribbon, flowers and sparkles in one sheet, not a
// standalone four-point star, and cropping a star out of it is how the Skills
// header used to get one before `skills-title.png` arrived with its own.
//
// So the same treatment the Skills section already uses is applied here, and
// for the same reason:
//
//   - `icon` is null on every row. That is a statement about the folder, not a
//     placeholder waiting to be filled in with a guess. The four marks are
//     drawn in ../components/contact/contactIcons.tsx, in the same thin-stroke
//     line language skillIcons.tsx uses, and a real PNG takes precedence the
//     moment `icon` is set. Nothing invents a filename.
//   - `titleAsset` is null for the same reason. `title` is the fallback and is
//     set in the project's own Didot display face, not a generic sans — the
//     closest honest stand-in until the lettering arrives.
//
// Phone and LinkedIn are deliberately blank. Their values were not supplied,
// so those two rows render the brief's placeholder rule rather than a fabricated
// number or a guessed profile URL. Email and location are the two real values.

export interface ContactItemData {
  /** Stable key; also the alt-text handle for the icon. */
  id: string;
  /** Icon file. null until the asset is supplied — see contactIcons.tsx. */
  icon: string | null;
  /** Alt text for the icon, kept on the data so it arrives with the file. */
  iconDescription: string;
  /** Visible text. null renders the placeholder rule instead. */
  text: string | null;
  /** `mailto:` target, when the row is a link. */
  href: string | null;
}

export interface ContactData {
  /** The section's ground, as supplied. */
  backgroundAsset: string;
  /** Heading as a supplied transparent PNG. null falls back to `title`. */
  titleAsset: string | null;
  /** Fallback heading text, used when `titleAsset` is null. */
  title: string;
  /** The four rows, top to bottom. */
  items: ContactItemData[];
}

const EMAIL = 'ramyaupadhyay0-71@gmail.com';

export const contact: ContactData = {
  backgroundAsset: '/ramya-portfolio-images/contact-section-background.png',
  titleAsset: null,
  title: 'Let’s Connect',
  items: [
    {
      id: 'email',
      icon: null,
      iconDescription: 'email',
      text: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      id: 'location',
      icon: null,
      iconDescription: 'location',
      text: 'New Delhi, India',
      href: null,
    },
    {
      id: 'phone',
      icon: null,
      iconDescription: 'phone',
      // Not supplied. Renders the brief's placeholder rule.
      text: null,
      href: null,
    },
    {
      id: 'linkedin',
      icon: null,
      iconDescription: 'LinkedIn',
      // Not supplied. Renders the brief's placeholder rule.
      text: null,
      href: null,
    },
  ],
};
