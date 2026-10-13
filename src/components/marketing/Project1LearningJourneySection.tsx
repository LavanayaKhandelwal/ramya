import React from 'react';
import { SectionImage } from './SectionImage';

interface Stage {
  number: string;
  heading: string[];
  description: string;
  imageAlt: string;
  imageSrc?: string;
  numberTone: 'blush' | 'gold';
}

const STAGES: Stage[] = [
  {
    number: '01',
    heading: ['TREND TO PRODUCT'],
    description:
      'Learnt to translate macro trends into a clear product direction and relevant micro trends.',
    imageAlt: 'Resort-wear trend research notebook flat lay with Mediterranean references and palette swatches',
    numberTone: 'blush',
  },
  {
    number: '02',
    heading: ['CUSTOMER-FIRST', 'THINKING'],
    description: 'Learnt to connect consumer needs, lifestyle and occasion with product decisions.',
    imageAlt: 'Butter-yellow convertible tiered dress on a mannequin in a resort-wear showroom',
    numberTone: 'gold',
  },
  {
    number: '03',
    heading: ['RANGE & PRODUCT', 'DIRECTION'],
    description:
      'Learnt how silhouette, versatility, fabric and details work together to shape a commercially relevant garment.',
    imageAlt: 'Product-development flat lay with technical dress sketch, fabric swatches and lace samples',
    numberTone: 'blush',
  },
  {
    number: '04',
    heading: ['PRODUCT', 'DEVELOPMENT'],
    description:
      'Learnt to move from concept and fabric exploration to sampling, construction details and a final product.',
    imageAlt: 'Close-up of yellow garment being stitched with white floral lace trim at a sewing machine',
    numberTone: 'gold',
  },
];

export function Project1LearningJourneySection() {
  return (
    <section className="p1j" aria-labelledby="p1j-heading">
      <div className="p1j__accent p1j__accent--tl" aria-hidden="true" />
      <div className="p1j__accent p1j__accent--bl" aria-hidden="true" />
      <div className="p1j__botanical" aria-hidden="true" />

      <header className="p1j__header">
        <h2 id="p1j-heading" className="p1j__title">
          A Learning Journey
        </h2>
        <span className="p1j__rule" aria-hidden="true" />
      </header>

      <div className="p1j__grid">
        {STAGES.map((stage) => (
          <article className="p1j__col" key={stage.number}>
            <span className={`p1j__num p1j__num--${stage.numberTone}`}>{stage.number}</span>
            <span className="p1j__colrule" aria-hidden="true" />
            <h3 className="p1j__colheading">
              {stage.heading.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h3>
            <p className="p1j__desc">{stage.description}</p>
            <SectionImage
              src={stage.imageSrc}
              alt={stage.imageAlt}
              className="p1j__photo"
              tint="#EFE3D2"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
