import React from 'react';
import { SectionImage } from './SectionImage';

const Arrow = () => (
  <svg className="px4e__arrow" viewBox="0 0 40 12" width="34" height="12" aria-hidden="true">
    <path d="M0 6h34M29 1l6 5-6 5" fill="none" stroke="#7D8177" strokeWidth="1" />
  </svg>
);

const PRODUCTS = [
  { name: 'HANA', meaning: 'Flower', char: '花', src: '/ramya-portfolio-images/placeholders/4K.png', alt: 'HANA fragrance bottle and pink packaging among cherry blossoms on pale stone', tint: '#F0D7D6', desc: ['Soft', 'Feminine', 'Calm'] },
  { name: 'MIZU', meaning: 'Water', char: '水', src: '/ramya-portfolio-images/placeholders/4L.png', alt: 'MIZU fragrance bottle and powder-blue packaging against rippling water and pale sky', tint: '#D7E6EE', desc: ['Fresh', 'Clean', 'Balanced'] },
  { name: 'KAZE', meaning: 'Wind', char: '風', src: '/ramya-portfolio-images/placeholders/4M.png', alt: 'KAZE fragrance bottle with botanical green packaging among green leaves and citrus', tint: '#DCE3D1', desc: ['Fresh', 'Energetic', 'Light'] },
  { name: 'SORA', meaning: 'Sky', char: '空', src: '/ramya-portfolio-images/placeholders/4N.png', alt: 'SORA fragrance bottle and light-blue packaging against an open blue sky', tint: '#D3E1EC', desc: ['Green', 'Calm', 'Grounded'] },
];

const STRIP_IMG = ['#EBC9C8', '#C9DEE9', '#D5DEC6', '#CFE0EC'];

const STAGES = [
  { n: '01', title: 'Inspiration', alt: 'Moodboard of cherry blossoms, blue water, foliage, citrus and blue sky', tiles: 6 },
  { n: '02', title: 'Colour Story', alt: 'Collection colour palette swatches with small nature photographs', tiles: 4 },
  { n: '03', title: 'Material & Texture', alt: 'Material and packaging reference collage of ivory fabric and paper grain', tiles: 4 },
  { n: '04', title: 'Sketch Development', alt: 'Hand-drawn perfume bottle and packaging sketches on warm paper', tiles: 3 },
  { n: '05', title: 'Final Packaging Direction', alt: 'HANA perfume bottle and matching box on a pale stone surface with cherry blossoms', tiles: 1 },
];

export function FragranceExpression() {
  return (
    <section className="px4e" aria-labelledby="px4e-heading">
      <div className="px4e__hero">
        <div className="px4e__title">
          <p className="px4e__eyebrow">The</p>
          <h2 id="px4e-heading" className="px4e__headline">
            <span className="px4e__h1">Fragrance</span>
            <span className="px4e__h2">Expression</span>
          </h2>
          <span className="px4e__divider" aria-hidden="true" />
          <p className="px4e__desc">
            Four scents, inspired by nature&rsquo;s calm elements, translating Uniqlo&rsquo;s
            simplicity into an everyday sensory experience.
          </p>
        </div>
        <div className="px4e__products">
          {PRODUCTS.map((p) => (
            <figure key={p.name} className="px4e__product">
              <SectionImage src={p.src} alt={p.alt} className="px4e__product-img" tint={p.tint} />
              <figcaption>
                <span className="px4e__pname">{p.name}</span>
                <span className="px4e__pmeaning">{p.meaning}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="px4e__strip">
        {PRODUCTS.map((p, i) => (
          <div key={p.name} className="px4e__card">
            <div className="px4e__card-top">
              <span className="px4e__card-name">
                {p.name} <em>{p.char}</em>
              </span>
              <span className="px4e__card-img" style={{ background: STRIP_IMG[i] }} aria-hidden="true" />
            </div>
            <div className="px4e__card-desc">
              {p.desc.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="px4e__process">
        <div className="px4e__intro">
          <h3>
            From
            <br />
            Inspiration
            <br />
            to Creation
          </h3>
          <span className="px4e__pdivider" aria-hidden="true" />
        </div>
        <div className="px4e__stages">
          {STAGES.map((s) => (
            <React.Fragment key={s.n}>
              <figure className="px4e__stage">
                <span className="px4e__stage-img px4e__stage-img--map">
                  {Array.from({ length: s.tiles }).map((_, i) => (
                    <span key={i} style={{ background: STRIP_IMG[i % STRIP_IMG.length] }} />
                  ))}
                </span>
                <figcaption>
                  <span className="px4e__stage-n">{s.n}</span>
                  {s.title}
                </figcaption>
              </figure>
              {s.n !== '05' && <Arrow />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
