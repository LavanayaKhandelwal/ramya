import React from 'react';
import { project4TopHeroImage, project4Page3Image } from '../../data/artwork';
import { SectionImage } from './SectionImage';

const Arrow = () => (
  <svg className="px4e__arrow" viewBox="0 0 40 12" width="34" height="12" aria-hidden="true">
    <path d="M0 6h34M29 1l6 5-6 5" fill="none" stroke="#7D8177" strokeWidth="1" />
  </svg>
);

const PRODUCTS = [
  {
    name: 'HANA',
    meaning: 'Flower',
    char: '花',
    src: project4TopHeroImage('Page 3 4K.png'),
    stripSrc: project4Page3Image('HANA.png'),
    alt: 'HANA fragrance bottle and pink packaging among cherry blossoms on pale stone',
    tint: '#F0D7D6',
    desc: ['Soft', 'Feminine', 'Calm'],
  },
  {
    name: 'MIZU',
    meaning: 'Water',
    char: '水',
    src: project4TopHeroImage('Page 3 4L.png'),
    stripSrc: project4Page3Image('MIZU.png'),
    alt: 'MIZU fragrance bottle and powder-blue packaging against rippling water and pale sky',
    tint: '#D7E6EE',
    desc: ['Fresh', 'Clean', 'Balanced'],
  },
  {
    name: 'KAZE',
    meaning: 'Wind',
    char: '風',
    src: project4TopHeroImage('Page 3 4M.png'),
    stripSrc: project4Page3Image('KAZE.png'),
    alt: 'KAZE fragrance bottle with botanical green packaging among green leaves and citrus',
    tint: '#DCE3D1',
    desc: ['Fresh', 'Energetic', 'Light'],
  },
  {
    name: 'SORA',
    meaning: 'Sky',
    char: '空',
    src: project4TopHeroImage('Page 3 4N.png'),
    stripSrc: project4Page3Image('SORA.png'),
    alt: 'SORA fragrance bottle and light-blue packaging against an open blue sky',
    tint: '#D3E1EC',
    desc: ['Green', 'Calm', 'Grounded'],
  },
];

const STRIP_IMG = ['#EBC9C8', '#C9DEE9', '#D5DEC6', '#CFE0EC'];

const STAGES = [
  {
    n: '01',
    title: 'Inspiration',
    src: project4Page3Image('Inspiration.png'),
    alt: 'Moodboard of cherry blossoms, blue water, foliage, citrus and blue sky',
    tint: '#EAE1D3',
  },
  {
    n: '02',
    title: 'Colour Story',
    src: project4Page3Image('colour story.png'),
    alt: 'Collection colour palette swatches with nature photographs',
    tint: '#DDE2D8',
  },
  {
    n: '03',
    title: 'Material & Texture',
    src: project4Page3Image('material and texture.png'),
    alt: 'Material and packaging reference collage of ivory fabric and paper grain',
    tint: '#E6DECE',
  },
  {
    n: '04',
    title: 'Sketch Development',
    src: project4Page3Image('sketch development.png'),
    alt: 'Hand-drawn perfume bottle and packaging sketches on warm paper',
    tint: '#ECE6D9',
  },
  {
    n: '05',
    title: 'Final Packaging Direction',
    src: project4Page3Image('Final packaging.png'),
    alt: 'Final packaging design with HANA perfume bottle and matching presentation box',
    tint: '#EBDCD9',
  },
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
        {PRODUCTS.map((p) => (
          <div key={p.name} className="px4e__card">
            <div className="px4e__card-top">
              <span className="px4e__card-name">
                {p.name} <em>{p.char}</em>
              </span>
              <SectionImage src={p.stripSrc} alt={p.alt} className="px4e__card-img" tint={p.tint} />
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
                <SectionImage src={s.src} alt={s.alt} className="px4e__stage-img" tint={s.tint} />
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
