import React from 'react';
import { SectionImage } from './SectionImage';

const Icon = ({ name }: { name: string }) => {
  const p = { fill: 'none', stroke: '#424640', strokeWidth: 1.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const icons: Record<string, React.ReactNode> = {
    People: <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 0a2.5 2.5 0 1 0 0-5M3 20c0-3 3-5 6-5s6 2 6 5M16 15c2 0 5 1.5 5 4.5" {...p} />,
    Bulb: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.3 1 2.5h6c0-1.2.3-1.8 1-2.5A6 6 0 0 0 12 3Z" {...p} />,
    Gear: <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm8 3-2 .5.5 1.5-1.5.5-1-1.5-2 .5L14 21h-4l-.5-2-2-.5-1 1.5-1.5-.5.5-1.5-2-.5v-4l2-.5-.5-1.5 1.5-.5 1 1.5 2-.5.5-2h4l.5 2" {...p} />,
    Chart: <path d="M4 20V4M4 20h16M8 20v-6M12 20v-9M16 20v-4" {...p} />,
  };
  return <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">{icons[name]}</svg>;
};

const CONTRIBUTIONS = [
  {
    n: '01',
    heading: ['Consumer', 'Understanding'],
    icon: 'People',
    iconBg: '#E9D7B9',
    src: '/ramya-portfolio-images/placeholders/4T.png',
    alt: 'Close-up of pale ivory fabric with natural folds and a small white flower',
    tint: '#EFE7DA',
    body: [
      'Understood consumer preferences and lifestyle cues through real-time research.',
      'Learned how to translate insights into a design direction.',
    ],
  },
  {
    n: '02',
    heading: ['Brand', 'Translation'],
    icon: 'Bulb',
    iconBg: '#E9C9C7',
    src: '/ramya-portfolio-images/placeholders/4U.png',
    alt: 'Neutral-colored garments on wooden hangers with soft cherry blossoms',
    tint: '#ECDCD8',
    body: [
      "Explored how Uniqlo's minimal and functional identity can be extended into fragrances.",
      'Maintained simplicity while adding a sensory dimension to the brand.',
    ],
  },
  {
    n: '03',
    heading: ['Product', 'Development'],
    icon: 'Gear',
    iconBg: '#DDE0D1',
    src: '/ramya-portfolio-images/placeholders/4V.png',
    alt: 'Pale pink cherry blossoms with dark green leaves in warm sunlight',
    tint: '#E7DED0',
    body: [
      'Worked on fragrance concepts, ingredient direction, packaging development and visualisation.',
      'Learnt to balance aesthetics with functionality and sustainability.',
    ],
  },
  {
    n: '04',
    heading: ['Market', 'Perspective'],
    icon: 'Chart',
    iconBg: '#D8E4E8',
    src: '/ramya-portfolio-images/placeholders/4W.png',
    alt: 'Clear blue water with bright sunlight creating rippling reflections',
    tint: '#D3E1EC',
    body: [
      'Analysed competition and identified a white space for Uniqlo.',
      "Recognised the potential of fragrances as a meaningful extension of Uniqlo's lifestyle brand.",
    ],
  },
];

const SKILLS = [
  { n: '01', heading: ['Market', 'Research'], src: '/ramya-portfolio-images/placeholders/4X.png', alt: 'Magnifying glass resting on printed market research documents', tint: '#E7E0D2', body: 'Analysing trends and competition to identify opportunities.' },
  { n: '02', heading: ['Consumer', 'Insight'], src: '/ramya-portfolio-images/placeholders/4Y.png', alt: 'Minimal scene with small human figurines on soft pink surfaces', tint: '#EEDAD8', body: 'Understanding consumer behaviour and translating insights into concepts.' },
  { n: '03', heading: ['Concept', 'Development'], src: '/ramya-portfolio-images/placeholders/4Z.png', alt: 'Fragrance concept sketch and perfume bottle study on a design desk', tint: '#EAE3D6', body: 'Ideating and developing fragrance concepts aligned with brand identity.' },
  { n: '04', heading: ['Visual', 'Storytelling'], src: '/ramya-portfolio-images/placeholders/4AA.png', alt: 'Open design notebook with visual references and a pencil', tint: '#E7DFD2', body: 'Presenting ideas through mood boards, visuals and compelling design narratives.' },
  { n: '05', heading: ['Product', 'Planning'], src: '/ramya-portfolio-images/placeholders/4AB.png', alt: 'Neutral fabric swatches arranged in a material development workspace', tint: '#E4DCCE', body: 'Working on ingredient direction, packaging development and visualisation.' },
  { n: '06', heading: ['Strategic', 'Thinking'], src: '/ramya-portfolio-images/placeholders/4AC.png', alt: 'Printed market analysis report with a simple bar chart and a pencil', tint: '#DEE1DD', body: 'Evaluating market potential and aligning creativity with business objectives.' },
];

export function TurningInsightsIntoImpact() {
  return (
    <section className="px4t" aria-label="Turning insights into impact">
      <div className="px4t__upper">
        <h2 className="px4t__headline">
          <span>Turning</span>
          <span>Insights</span>
          <span className="px4t__accent">into Impact</span>
        </h2>
        <div className="px4t__cols">
          {CONTRIBUTIONS.map((c) => (
            <div key={c.n} className="px4t__col">
              <div className="px4t__col-imgwrap">
                <SectionImage src={c.src} alt={c.alt} className="px4t__arch" tint={c.tint} />
                <span className="px4t__badge" style={{ background: c.iconBg }}>
                  <Icon name={c.icon} />
                </span>
              </div>
              <h3 className="px4t__col-heading">
                {c.heading[0]}
                <br />
                {c.heading[1]}
              </h3>
              <ul className="px4t__col-body">
                {c.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <span className="px4t__divider" aria-hidden="true" />

      <div className="px4t__lower">
        <h2 className="px4t__headline px4t__headline--lower">
          <span>Building</span>
          <span>Skills for</span>
          <span className="px4t__accent">a Broader Lens</span>
        </h2>
        <ul className="px4t__skills">
          {SKILLS.map((s) => (
            <li key={s.n}>
              <SectionImage src={s.src} alt={s.alt} className="px4t__skill-img" tint={s.tint} />
              <h3>
                {s.heading[0]}
                <br />
                {s.heading[1]}
              </h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
