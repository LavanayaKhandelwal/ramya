import type { ContactItemData } from '../../data/contact';
import { ContactIcon } from './contactIcons';

/**
 * One contact row — a disc mark, then either the value or the placeholder rule.
 *
 * The row is the same component whether it holds an address, a city or nothing
 * at all: only the `text` field differs, and a null `text` swaps the span for the
 * brief's 1px rule. That is what keeps the phone and LinkedIn rows from being a
 * special case in the markup — they are the same shape, waiting on their values.
 *
 * `href` decides whether the row is a link. Email is a real `mailto:`; location
 * is plain text because a city is not a destination. The link covers the whole
 * row rather than just the address, so the target is the comfortable size, and
 * the underline is suppressed in CSS because the brief sets the value as plain
 * type. The address is duplicated into .contact-item-text so the accessible name
 * is the value itself and not "email".
 */
export function ContactItem({ item }: { item: ContactItemData }) {
  const body = item.text ? (
    <span className="contact-item-text">{item.text}</span>
  ) : (
    /* No value supplied yet — the brief's placeholder rule, not a blank gap. */
    <span className="contact-item-placeholder" aria-hidden />
  );

  return (
    <li className="contact-item">
      <ContactIcon id={item.id} />

      {item.href ? (
        <a className="contact-item-link" href={item.href}>
          {body}
        </a>
      ) : (
        body
      )}
    </li>
  );
}
