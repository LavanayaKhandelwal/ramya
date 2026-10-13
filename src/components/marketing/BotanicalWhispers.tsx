import React from 'react';
import { SectionImage } from './SectionImage';

const MOOD = [
  { alt: 'Delicate lavender blossoms', cls: 'portrait', tint: '#DED2E4' },
  { alt: 'Neutral linen fabric texture', cls: 'portrait', tint: '#E1D8C8' },
  { alt: 'Soft pink botanical flower arrangement', cls: 'portrait', tint: '#EBD5D6' },
  { alt: 'Green tree canopy and natural sunlight', cls: 'landscape', tint: '#D7DEC6' },
  { alt: 'Flowering branches against a blue sky', cls: 'portrait', tint: '#D5E0EA' },
  { alt: 'Close-up of pastel floral embroidery on linen', cls: 'square', tint: '#E4DBC9' },
  { alt: 'Botanical landscape with flowering trees', cls: 'portrait', tint: '#D9DFC9' },
  { alt: 'Embroidery hoop with delicate flower stitching', cls: 'square', tint: '#E3DCCB' },
  { alt: 'Soft iridescent fabric in pastel colours', cls: 'landscape', tint: '#DCD8E2' },
  { alt: 'Pastel embroidery threads and sewing materials', cls: 'portrait', tint: '#E6D4D0' },
  { alt: 'Floral embroidery sketches on paper', cls: 'portrait', tint: '#E4DECE' },
  { alt: 'Small botanical colour swatches and pressed flowers', cls: 'portrait', tint: '#DFD9C7' },
];

const EMBROIDERY = [
  { label: 'Beaded embroidery', tint: '#E3DACB' },
  { label: 'Japanese-inspired motifs', tint: '#DED6CA' },
  { label: 'Minimal floral embroidery', tint: '#E6DFD0' },
  { label: 'Threaded embroidery', tint: '#DCE0CE' },
  { label: 'Textured embroidery', tint: '#E0D8C9' },
];

const PRINCIPLES = [
  { title: 'Minimal floral placement', desc: 'Small, deliberate embroidery placement that preserves the clean garment silhouette.' },
  { title: 'Botanical motifs', desc: 'Subtle floral and leaf-inspired details influenced by nature.' },
  { title: 'Light, everyday fabrics', desc: 'Comfortable fabrics suitable for regular everyday wear.' },
  { title: 'Clean silhouettes', desc: 'Maintain the familiar simplicity and functionality of LifeWear.' },
  { title: 'Subtle colour accents', desc: 'Use restrained botanical colours that complement neutral garments.' },
];

const FEEDBACK = [
  { value: 72, label: 'found the collection very appealing', ring: '#E5A4A7' },
  { value: 83.8, label: 'men liked the tropical embroidery', ring: '#7CA9C4' },
  { value: 72, label: 'women were extremely likely to buy the shirt', ring: '#AEB69A' },
  { value: 81, label: 'men were extremely likely to buy the shirt', ring: '#C8A9CC' },
];

function Ring({ value, colour }: { value: number; colour: string }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  const filled = (value / 100) * c;
  return (
    <svg viewBox="0 0 80 80" className="px2e__ring">
      <circle cx="40" cy="40" r={r} className="px2e__ring-track" />
      <circle
        cx="40"
        cy="40"
        r={r}
        fill="none"
        stroke={colour}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={`${filled} ${c - filled}`}
        transform="rotate(-90 40 40)"
      />
      <text x="40" y="44" className="px2e__ring-value">
        {Number.isInteger(value) ? `${value}%` : `${value}%`}
      </text>
    </svg>
  );
}

export function BotanicalWhispers() {
  return (
    <section className="px2e" aria-labelledby="px2e-heading">
      <header className="px2e__header">
        <div className="px2e__brand">
          <span className="px2e__logo" aria-hidden="true">
            UNIQLO
          </span>
          <span className="px2e__lifewear">LifeWear</span>
        </div>
        <div className="px2e__titles">
          <h2 id="px2e-heading" className="px2e__heading">
            From Insight <em>to Everyday</em>
          </h2>
          <p className="px2e__subtitle">Botanical Whispers</p>
          <p className="px2e__collection">A UNIQLO LifeWear Capsule Collection</p>
        </div>
        <div className="px2e__header-botanical">
          <SectionImage alt="Delicate flowering branches with soft pink blossoms" tint="#ECD9DA" />
        </div>
      </header>

      <div className="px2e__main">
        <div className="px2e__left">
          <h3 className="px2e__sec-label">Mood Board</h3>
          <div className="px2e__mood">
            {MOOD.map((m) => (
              <SectionImage key={m.alt} alt={m.alt} className={`px2e__mood-img ${m.cls}`} tint={m.tint} />
            ))}
          </div>
          <p className="px2e__mood-note">
            The mood board brings together soft floral elements, earthy tones, and nature-inspired patterns.
          </p>
        </div>

        <div className="px2e__right">
          <div className="px2e__concept">
            <h3 className="px2e__sec-label">Concept</h3>
            <p>
              A subtle botanical-inspired capsule that adds softness, individuality and visual interest
              to everyday Uniqlo clothing while keeping its minimalistic character.
            </p>
          </div>

          <div className="px2e__embroidery">
            <h3 className="px2e__sec-label">Why Floral Embroidery?</h3>
            <ul className="px2e__embroidery-row">
              {EMBROIDERY.map((e) => (
                <li key={e.label}>
                  <SectionImage alt={e.label} tint={e.tint} />
                  <span>{e.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="px2e__product">
            <div className="px2e__product-head">
              <h3 className="px2e__sec-label">Final Product Direction</h3>
              <span className="px2e__product-sub">For Men and Women</span>
            </div>
            <div className="px2e__product-grid">
              <div className="px2e__product-hero">
                <SectionImage
                  alt="Two neutral everyday cotton shirts on mannequins with subtle botanical embroidery"
                  tint="#E7DED0"
                />
              </div>
              <ul className="px2e__principles">
                {PRINCIPLES.map((p) => (
                  <li key={p.title}>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </li>
                ))}
              </ul>
              <div className="px2e__product-details">
                <SectionImage alt="Close-up of a small floral embroidered motif on an ivory shirt" tint="#E4DCCB" />
                <SectionImage alt="Detailed embroidery and stitching on cotton fabric" tint="#E1D9C8" />
                <SectionImage alt="Small botanical embroidery motif on a shirt cuff" tint="#E6DDCE" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px2e__bottom">
        <div className="px2e__feedback">
          <h3 className="px2e__sec-label">User Feedback</h3>
          <ul className="px2e__feedback-row">
            {FEEDBACK.map((f) => (
              <li key={f.label}>
                <Ring value={f.value} colour={f.ring} />
                <p>{f.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="px2e__takeaway">
          <h3 className="px2e__sec-label">Final Takeaway</h3>
          <p>
            Small details can transform everyday basics into products that feel personal, expressive
            and desirable — without losing Uniqlo&rsquo;s simplicity.
          </p>
          <span className="px2e__takeaway-botanical" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
