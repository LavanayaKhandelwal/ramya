import React from 'react';
import { project4Image } from '../../data/artwork';
import { SectionImage } from './SectionImage';

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" width="25" height="25" aria-hidden="true" fill="none" stroke="#41443C" strokeWidth="1.3">
    <path d="M12 20s-7-4.5-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5c0 5-7 9.5-7 9.5Z" strokeLinejoin="round" />
  </svg>
);
const LeafIcon = () => (
  <svg viewBox="0 0 24 24" width="25" height="25" aria-hidden="true" fill="none" stroke="#41443C" strokeWidth="1.3">
    <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14Zm0 0 6-6" strokeLinejoin="round" />
  </svg>
);
const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" width="25" height="25" aria-hidden="true" fill="none" stroke="#41443C" strokeWidth="1.3">
    <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 0a2.5 2.5 0 1 0 0-5M3 20c0-3 3-5 6-5s6 2 6 5M16 15c2 0 5 1.5 5 4.5" strokeLinejoin="round" />
  </svg>
);

const INSIGHTS = [
  { n: '01', pct: '62%', headline: 'PREFERRED CLEAN AND SUBTLE', desc: 'liked clean and subtle fragrances', src: project4Image('4Q'), alt: 'Close-up of pale ivory fabric with soft natural folds', tint: '#EFE7DA' },
  { n: '02', pct: '78%', headline: 'BRAND ALIGNMENT', desc: 'felt the scents matched Uniqlo\u2019s minimal and everyday appeal', src: project4Image('4R'), alt: 'Botanical green leaves casting shadows on pale limestone', tint: '#DCE2D2' },
  { n: '03', pct: '71%', headline: 'FRESH AND CALM NOTES', desc: 'preferred fresh and calming notes for daily use', src: project4Image('4S'), alt: 'Clear blue water with sunlight reflecting on the ripples', tint: '#CFE0EC' },
];

const TAKEAWAYS = [
  { icon: <HeartIcon />, text: 'Positive response towards a fragrance line aligned with Uniqlo\u2019s minimal identity.' },
  { icon: <LeafIcon />, text: 'Consumers associated the scents with freshness, comfort and simplicity.' },
  { icon: <PeopleIcon />, text: 'Packaging quality noted as an area for improvement.' },
];

export function RealPeopleRealInsights() {
  return (
    <section className="px4r" aria-labelledby="px4r-heading">
      <div className="px4r__grid">
        <div className="px4r__left">
          <SectionImage
            src={project4Image('4O')}
            alt="UNIQLO HANA perfume bottle on rough limestone with white blossoms and botanical shadows"
            className="px4r__left-img"
            tint="#EDE4D6"
          />
          <div className="px4r__left-overlay">
            <h2 id="px4r-heading" className="px4r__headline">
              <span>Real</span>
              <span>People,</span>
              <span className="px4r__accent">Real</span>
              <span className="px4r__accent">Insights</span>
            </h2>
            <p className="px4r__subtitle">
              A quick consumer survey to understand preferences, perceptions and overall experience
              with the fragrance concept.
            </p>
            <span className="px4r__divider" aria-hidden="true" />
            <div className="px4r__strips" aria-hidden="true">
              {['HANA', 'MIZU', 'KAZE', 'SORA'].map((n) => (
                <span key={n} className="px4r__strip">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="px4r__center">
          <SectionImage
            src={project4Image('4P')}
            alt="Pale cherry blossoms, natural daylight and soft blue sky"
            className="px4r__support-photo"
            tint="#F0DCDB"
          />
          <SectionImage
            src={project4Image('4AE')}
            alt="Completed UNIQLO product feedback form photographed at an angle"
            className="px4r__form"
            tint="#EFE9DE"
          />
          <div className="px4r__note px4r__note--research">
            Insights from real consumers helped us shape a fragrance line that feels relevant,
            everyday, and true to Uniqlo&rsquo;s identity.
          </div>
        </div>

        <div className="px4r__right">
          <ul className="px4r__insights">
            {INSIGHTS.map((ins) => (
              <li key={ins.n}>
                <SectionImage src={ins.src} alt={ins.alt} className="px4r__insight-img" tint={ins.tint} />
                <div>
                  <span className="px4r__insight-headline">{ins.headline}</span>
                  <span className="px4r__pct">{ins.pct}</span>
                  <p>{ins.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="px4r__note px4r__note--takeaways">
            <h3>Key Takeaways</h3>
            <ul>
              {TAKEAWAYS.map((t, i) => (
                <li key={i}>
                  <span className="px4r__tk-icon">{t.icon}</span>
                  <span>{t.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
