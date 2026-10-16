import React from 'react';
import { project2Image } from '../../data/artwork';
import { SectionImage } from './SectionImage';

type IconName = 'hanger' | 'heart' | 'magnify' | 'bag' | 'laptop' | 'speaker' | 'bulb' | 'cloud' | 'trousers' | 'sparkle';

function Icon({ name }: { name: IconName }) {
  const common = { viewBox: '0 0 24 24', 'aria-hidden': true } as const;
  switch (name) {
    case 'hanger':
      return (
        <svg {...common}>
          <path d="M12 4a2 2 0 1 1 2 2c0 1-1 1.3-1 2.2V10m0 0 8 5.4a1 1 0 0 1-.6 1.8H3.6a1 1 0 0 1-.6-1.8L11 10h1Z" />
        </svg>
      );
    case 'heart':
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.4-7-9.4A3.9 3.9 0 0 1 12 7a3.9 3.9 0 0 1 7 3.6c0 5-7 9.4-7 9.4Z" />
        </svg>
      );
    case 'magnify':
      return (
        <svg {...common}>
          <circle cx="10.5" cy="10.5" r="6" />
          <path d="m15 15 4.5 4.5" />
        </svg>
      );
    case 'bag':
      return (
        <svg {...common}>
          <path d="M5 8h14l-1 12H6L5 8Zm3 0a4 4 0 0 1 8 0" />
        </svg>
      );
    case 'laptop':
      return (
        <svg {...common}>
          <rect x="4" y="6" width="16" height="10" rx="1" />
          <path d="M2.5 19h19" />
        </svg>
      );
    case 'speaker':
      return (
        <svg {...common}>
          <path d="M4 10h3l4-3v10l-4-3H4v-4Z" />
          <path d="M15 9a4 4 0 0 1 0 6" />
        </svg>
      );
    case 'bulb':
      return (
        <svg {...common}>
          <path d="M9 17a6 6 0 1 1 6 0c-.6.5-1 1.2-1 2h-4c0-.8-.4-1.5-1-2Z" />
          <path d="M10 21h4" />
        </svg>
      );
    case 'cloud':
      return (
        <svg {...common}>
          <path d="M7 17a4 4 0 0 1 .4-8A5 5 0 0 1 17 10a3.5 3.5 0 0 1 0 7Z" />
        </svg>
      );
    case 'trousers':
      return (
        <svg {...common}>
          <path d="M8 3h8l-1 8 .5 9h-3L12 13l-.5 7h-3L9 11 8 3Z" />
        </svg>
      );
    case 'sparkle':
    default:
      return (
        <svg {...common}>
          <path d="M12 3c.6 4 1.6 5 5.6 6-4 1-5 2-5.6 6-.6-4-1.6-5-5.6-6 4-1 5-2 5.6-6Z" />
        </svg>
      );
  }
}

interface Profile {
  number: string;
  circleBg: string;
  imageSrc: string;
  imageAlt: string;
  tint: string;
  question: string;
  insights: { icon: IconName; title: string; desc: string; wash: string }[];
  banner: string;
  bannerBg: string;
}

const PROFILES: Profile[] = [
  {
    number: '01',
    circleBg: '#F0D9D5',
    imageSrc: project2Image('2J'),
    imageAlt: 'Row of neutral everyday garments on wooden hangers along a natural rail',
    tint: '#E6DCCB',
    question: 'Why are consumers choosing fast fashion?',
    insights: [
      { icon: 'hanger', title: 'Fashionable Basics', desc: 'Looks for fashionable basics', wash: '#F0D9D5' },
      { icon: 'heart', title: 'Safety', desc: 'Finds plain basics too safe', wash: '#EADDE2' },
      { icon: 'magnify', title: 'Subtle Details', desc: 'Values subtle details', wash: '#DFEAF0' },
      { icon: 'bag', title: 'Personality', desc: 'Wants everyday clothes with personality', wash: '#E9E7D8' },
    ],
    banner: 'Everyday, but make it mine.',
    bannerBg: '#CFA29D',
  },
  {
    number: '02',
    circleBg: '#DCEAF0',
    imageSrc: project2Image('2K'),
    imageAlt: 'Calm lifestyle workspace with laptop, notebook, coffee cup and rattan chair',
    tint: '#E4DFD4',
    question: 'Why do they prefer trends over basics?',
    insights: [
      { icon: 'laptop', title: 'Refinement', desc: 'Prefers sophisticated and comfortable clothing', wash: '#DCEAF0' },
      { icon: 'speaker', title: 'Print Preference', desc: 'Avoids loud prints', wash: '#F0E4D1' },
      { icon: 'hanger', title: 'Functional Basics', desc: 'Basics feel comfortable but too similar', wash: '#E9E7D8' },
      { icon: 'bulb', title: 'Subtle Difference', desc: 'Wants something subtle yet different', wash: '#F5E7C9' },
    ],
    banner: 'Function meets refinement.',
    bannerBg: '#A9AA91',
  },
  {
    number: '03',
    circleBg: '#E2E3D2',
    imageSrc: project2Image('2L'),
    imageAlt: 'Flat lay of blush pleated fabric, cream sneakers, denim and a beige shoulder bag',
    tint: '#E6D9D6',
    question: 'Why do they switch brands often?',
    insights: [
      { icon: 'cloud', title: 'Comfort', desc: 'Prioritises soft, comfortable fabrics', wash: '#E0E8DB' },
      { icon: 'trousers', title: 'Relaxed Fit', desc: 'Wants relaxed silhouettes', wash: '#E5E5D5' },
      { icon: 'heart', title: 'Personal Expression', desc: 'Doesn\u2019t want clothes to look overly plain', wash: '#F0D9D5' },
      { icon: 'sparkle', title: 'Visual Interest', desc: 'Wants comfort with a little visual interest', wash: '#E2E5D8' },
    ],
    banner: 'Feels good, looks even better.',
    bannerBg: '#7FA4B6',
  },
];

const SHARED_TRUTH = [
  { label: 'Comfort', alt: 'Folded olive and cream knitwear stacked on a chair beside white slippers', src: project2Image('2M'), tint: '#E1D6C2' },
  { label: 'Simplicity', alt: 'Hand holding soft blush fabric with tone-on-tone floral embroidery', src: project2Image('2N'), tint: '#EBD9D8' },
  { label: 'Subtle Personality', alt: 'Small pastel flowers embroidered onto textured neutral fabric', src: project2Image('2O'), tint: '#DEDCD0' },
];

export function EverydayChoicesToInsights() {
  return (
    <section className="px2b" aria-labelledby="px2b-heading">
      <header className="px2b__header">
        <div className="px2b__note">Same Basics Different Stories</div>
        <h2 id="px2b-heading" className="px2b__heading">
          From Everyday Choices
          <br />
          <em>to Deeper Insights</em>
        </h2>
        <p className="px2b__subtitle">Different Lives. A Common Thread.</p>
      </header>

      <div className="px2b__profiles">
        {PROFILES.map((p) => (
          <article className="px2b__profile" key={p.number}>
            <span className="px2b__circle" style={{ background: p.circleBg }}>
              {p.number}
            </span>
            <span className="px2b__connector" aria-hidden="true" />
            <div className="px2b__img-wrap">
              <SectionImage src={p.imageSrc} alt={p.imageAlt} className="px2b__img" tint={p.tint} />
              <div className="px2b__qcard">{p.question}</div>
            </div>
            <ul className="px2b__insights">
              {p.insights.map((ins) => (
                <li key={ins.title}>
                  <span className="px2b__ins-icon" style={{ background: ins.wash }}>
                    <Icon name={ins.icon} />
                  </span>
                  <h4>{ins.title}</h4>
                  <p>{ins.desc}</p>
                </li>
              ))}
            </ul>
            <div className="px2b__banner" style={{ background: p.bannerBg }}>
              {p.banner}
            </div>
          </article>
        ))}
      </div>

      <div className="px2b__bottom">
        <div className="px2b__truth">
          <h3 className="px2b__sec-label">A Shared Truth</h3>
          <div className="px2b__truth-row">
            {SHARED_TRUTH.map((t, i) => (
              <React.Fragment key={t.label}>
                <div className="px2b__truth-item">
                  <SectionImage src={t.src} alt={t.alt} className="px2b__truth-circle" tint={t.tint} />
                  <span>{t.label}</span>
                </div>
                {i < SHARED_TRUTH.length - 1 && (
                  <span className="px2b__truth-arrow" aria-hidden="true">&rarr;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="px2b__insight">
          <h3 className="px2b__sec-label">The Insight</h3>
          <span className="px2b__qmark px2b__qmark--open" aria-hidden="true">&ldquo;</span>
          <p className="px2b__insight-quote">
            Consumers don&rsquo;t necessarily want loud fashion. They want small details that make
            basic everyday clothing feel more special.
          </p>
          <span className="px2b__qmark px2b__qmark--close" aria-hidden="true">&rdquo;</span>
        </div>

        <div className="px2b__botanical">
          <SectionImage
            src={project2Image('2P')}
            alt="White shirt with delicate floral embroidery hanging on a rail"
            tint="#E6DCC8"
          />
        </div>
      </div>
    </section>
  );
}
