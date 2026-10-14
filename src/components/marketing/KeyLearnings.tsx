import React from 'react';
import { SectionImage } from './SectionImage';

const CARDS = [
  {
    number: '01',
    title: ['Consumer', 'Understanding'],
    bg: '#E6EEF0',
    src: '/ramya-portfolio-images/placeholders/2AW.png',
    alt: 'Overhead fashion research document with garment references, sketches and neutral fabric swatches',
    tint: '#DCE3E2',
    desc: 'Learned how to analyse consumer needs and identify what makes everyday clothing feel more personal and expressive.',
  },
  {
    number: '02',
    title: ['Trend &', 'Design Direction'],
    bg: '#F0E9DE',
    src: '/ramya-portfolio-images/placeholders/2AX.png',
    alt: 'Overlapping natural textile swatches with subtle botanical embroidery',
    tint: '#E4DACB',
    desc: 'Learned to translate macro trends into a focused design direction — minimal floral embroidery for modern, versatile everyday wear.',
  },
  {
    number: '03',
    title: ['Product', 'Development'],
    bg: '#E6EEF0',
    src: '/ramya-portfolio-images/placeholders/2AY.png',
    alt: 'Coordinated row of everyday shirts on simple wooden hangers',
    tint: '#DFE2DA',
    desc: 'Learned the complete process from concept to product — fabric selection, embroidery techniques, silhouette exploration and creating a cohesive collection.',
  },
  {
    number: '04',
    title: ['Merchandising', 'Perspective'],
    bg: '#F0E9DE',
    src: '/ramya-portfolio-images/placeholders/2AZ.png',
    alt: 'Neatly folded everyday garments in clean stacks on a pale stone shelf',
    tint: '#E5DCCD',
    desc: 'Learned how to align a design concept with brand identity, target consumer and market viability, ensuring it fits into a real brand\u2019s product strategy.',
  },
];

export function KeyLearnings() {
  return (
    <section className="px2f" aria-labelledby="px2f-heading">
      <header className="px2f__header">
        <span className="px2f__rule px2f__rule--top" aria-hidden="true" />
        <h2 id="px2f-heading" className="px2f__heading">
          <span className="px2f__key">Key</span>
          <span className="px2f__learn">Learnings</span>
        </h2>
        <span className="px2f__rule px2f__rule--bottom" aria-hidden="true" />
      </header>

      <div className="px2f__cards">
        {CARDS.map((c) => (
          <article className="px2f__card" key={c.number} style={{ background: c.bg }}>
            <SectionImage src={c.src} alt={c.alt} className="px2f__img" tint={c.tint} />
            <div className="px2f__num-row">
              <span className="px2f__num">{c.number}</span>
              <span className="px2f__num-rule" aria-hidden="true" />
            </div>
            <h3 className="px2f__card-title">
              {c.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h3>
            <p className="px2f__card-desc">{c.desc}</p>
          </article>
        ))}
      </div>

      <span className="px2f__divider" aria-hidden="true" />
    </section>
  );
}
