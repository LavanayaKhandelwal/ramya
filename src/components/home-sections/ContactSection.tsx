import { ContactItem } from '../contact/ContactItem';
import { ContactStar } from '../contact/ContactStar';
import { contact } from '../../data/contact';

/**
 * Contact — the closing section of the home page.
 *
 * This replaces the "Home — Contact CTA band" wireframe block. Like About,
 * Projects and Skills it is a fixed 100vh composition sized against the
 * viewport, which makes it a section rather than a route — and for the same
 * reason as those three it now sits OUTSIDE the 1100px column the remaining
 * home blocks are set in, because inside a centred column its edges would stop
 * being edges and the checkerboard would be boxed in at both sides.
 *
 * The ground is the supplied `contact-section-background.png` (1672x941), used
 * whole: object-fit:cover, one layer, nothing drawn over or behind it. It is
 * the authoritative background and is not adjusted, tinted or re-drawn — no
 * second checkerboard anywhere in this section.
 *
 * Composition is the brief's, written out literally: the card is 58% x 83% at
 * 51% down the page, the heading sits at top 7% of it, the four rows at top 46%,
 * and the three sparkles hang off the left, top-right and bottom edges. The card
 * is an arch — 125px on the two top corners, square at the foot — with the
 * second hairline inset 10px inside the first, both in the brief's #123F82.
 *
 * Four of the brief's five asset layers do not exist in the folder and the
 * heading is set in the project's own Didot face rather than supplied lettering.
 * Every one of those fallbacks is documented where it is made, and each is a
 * one-line data change away from the real artwork. See ../../data/contact.ts.
 *
 * `id="contact"` matches `about`, `projects` and `skills`, so the nav and the
 * footer can point at it.
 */
export function ContactSection() {
  return (
    <main className="contact-page" id="contact" aria-label="Contact">
      <img
        className="contact-background"
        src={contact.backgroundAsset}
        alt=""
        aria-hidden
        draggable={false}
      />

      <section className="contact-card" aria-labelledby="contact-heading">
        {/* the brief's second hairline, 10px inside the card's own border */}
        <div className="contact-card-inner" aria-hidden />

        <h2 className="contact-heading" id="contact-heading">
          {contact.titleAsset ? (
            <img className="contact-heading-image" src={contact.titleAsset} alt={contact.title} draggable={false} />
          ) : (
            contact.title
          )}
        </h2>

        <ul className="contact-list">
          {contact.items.map((item) => (
            <ContactItem key={item.id} item={item} />
          ))}
        </ul>

        <ContactStar className="contact-star--left" />
        <ContactStar className="contact-star--top-right" />
        <ContactStar className="contact-star--bottom-center" />
      </section>
    </main>
  );
}

