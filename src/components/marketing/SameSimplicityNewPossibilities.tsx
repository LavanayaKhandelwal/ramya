import React from 'react';
import { project2Image } from '../../data/artwork';
import { SectionImage } from './SectionImage';

const WHYS = [
  { n: '01', q: 'Why are consumers choosing fast fashion?', c: '#E8D1CE', src: project2Image('2Q'), tint: '#E5DAC9' },
  { n: '02', q: 'Why do they prefer trends over basics?', c: '#D7E0EC', src: project2Image('2R'), tint: '#E6D9D6' },
  { n: '03', q: 'Why do they switch brands often?', c: '#D9E3D5', src: project2Image('2S'), tint: '#E0DDD2' },
  { n: '04', q: 'Why do they seek more expression?', c: '#EADFAD', src: project2Image('2T'), tint: '#E2DDCF' },
  { n: '05', q: 'Why is this an opportunity for Uniqlo?', c: '#DDD5E8', src: project2Image('2U'), tint: '#DFDBD0' },
];

const IDEAS = [
  {
    title: 'Seasonal Colour Drops',
    concept:
      'Introduce restrained seasonal colour variations while retaining a recognisable everyday wardrobe.',
    src: project2Image('2V'),
    swatches: ['#D7A4A0', '#C4B4D2', '#91AFBD', '#B9BE9C'],
    tint: '#E6D8D2',
  },
  {
    title: 'Textured Detailing',
    concept: 'Use tactile fabric variations to add understated interest to otherwise simple garments.',
    src: project2Image('2W'),
    tint: '#E1DACB',
  },
  {
    title: 'Minimal Embroidery',
    concept: 'Introduce subtle botanical embroidery as a small expression of personality.',
    src: project2Image('2X'),
    tint: '#E2DDD0',
  },
  {
    title: 'Young Designer Collaborations',
    concept:
      'Explore limited collaborations with emerging designers to introduce fresh perspectives without losing brand simplicity.',
    src: project2Image('2Y'),
    tint: '#DEDCD3',
  },
  {
    title: 'Small Capsule Collections',
    concept:
      'Create small coordinated collections that explore personal expression through limited design details.',
    src: project2Image('2Z'),
    tint: '#E3DACF',
  },
];

export function SameSimplicityNewPossibilities() {
  return (
    <section className="px2d" aria-labelledby="px2d-heading">
      <header className="px2d__header">
        <h2 id="px2d-heading" className="px2d__heading">
          Same Simplicity,
          <br />
          <em>New Possibilities.</em>
        </h2>
      </header>

      <div className="px2d__cols">
        <div className="px2d__whys">
          <div className="px2d__whys-head">
            <h3>The 5 Why&rsquo;s</h3>
            <span className="px2d__rule" aria-hidden="true" />
          </div>
          <ul className="px2d__whys-list">
            {WHYS.map((w, i) => (
              <li key={w.n} className="px2d__why">
                <div className="px2d__why-left">
                  <span className="px2d__why-num" style={{ background: w.c }}>
                    {w.n}
                  </span>
                  <p>{w.q}</p>
                </div>
                <SectionImage src={w.src} alt={`Research image for: ${w.q}`} className="px2d__why-img" tint={w.tint} />
                {i < WHYS.length - 1 && <span className="px2d__why-arrow" aria-hidden="true">&darr;</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="px2d__question">
          <div className="px2d__paper">
            <div className="px2d__paper-layer px2d__paper-layer--a" aria-hidden="true" />
            <div className="px2d__paper-layer px2d__paper-layer--b" aria-hidden="true" />
            <div className="px2d__paper-layer px2d__paper-layer--c" aria-hidden="true" />
            <div className="px2d__paper-card">
              <h3 className="px2d__question-label">The Big Question</h3>
              <span className="px2d__question-rule" aria-hidden="true" />
              <p className="px2d__question-text">
                How might we make Uniqlo&rsquo;s timeless simplicity feel{' '}
                <mark className="px2d__hl px2d__hl--lav">expressive and</mark>{' '}
                <mark className="px2d__hl px2d__hl--sage">trend-forward</mark> while maintaining
                comfort and global functionality?
              </p>
            </div>
            <div className="px2d__arrows" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} viewBox="0 0 60 24" className="px2d__arrow">
                  <path d="M2 20 Q 26 2 50 14" />
                  <path d="M44 9 L51 14 L43 16" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div className="px2d__ideas">
          <div className="px2d__ideas-head">
            <h3>Ideas That Add a Little More</h3>
            <span className="px2d__rule" aria-hidden="true" />
          </div>
          <ul className="px2d__ideas-list">
            {IDEAS.map((idea) => (
              <li key={idea.title} className="px2d__idea">
                <SectionImage src={idea.src} alt={idea.title} className="px2d__idea-img" tint={idea.tint} />
                <div className="px2d__idea-text">
                  <h4>{idea.title}</h4>
                  <p>{idea.concept}</p>
                </div>
                {idea.swatches && (
                  <div className="px2d__swatches" aria-hidden="true">
                    {idea.swatches.map((c) => (
                      <span key={c} style={{ background: c }} />
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
