import React from 'react';
import { project2Image } from '../../data/artwork';
import { SectionImage } from './SectionImage';

// `2AB` is the supplied full mood-board collage artwork.


const EMBROIDERY = [
  { label: 'Beaded embroidery', src: project2Image('2AN'), tint: '#E3DACB' },
  { label: 'Japanese-inspired motifs', src: project2Image('2AO'), tint: '#DED6CA' },
  { label: 'Minimal floral embroidery', src: project2Image('2AP'), tint: '#E6DFD0' },
  { label: 'Threaded embroidery', src: project2Image('2AQ'), tint: '#DCE0CE' },
  { label: 'Textured embroidery', src: project2Image('2AR'), tint: '#E0D8C9' },
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
          <SectionImage src={project2Image('2AA')} alt="Soft pink and blue sky with wispy clouds" tint="#ECD9DA" />
        </div>
      </header>

      <div className="px2e__main">
        <div className="px2e__left">
          <h3 className="px2e__sec-label">Mood Board</h3>
          <div className="px2e__mood">
            <SectionImage
              src={project2Image('2AB')}
              alt="Mood board collage of botanical prints, floral embroidery, soft colour swatches and nature-inspired patterns"
              className="px2e__mood-collage"
              tint="#DED2E4"
            />
          </div>
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
                  <SectionImage src={e.src} alt={e.label} tint={e.tint} />
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
                  src={project2Image('2AS')}
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
                <SectionImage src={project2Image('2AT')} alt="Close-up of a small floral embroidered motif on an ivory shirt" tint="#E4DCCB" />
                <SectionImage src={project2Image('2AU')} alt="Detailed embroidery and stitching on cotton fabric" tint="#E1D9C8" />
                <SectionImage src={project2Image('2AV')} alt="Palm-tree embroidery motif beside a shirt button" tint="#E6DDCE" />
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
