import React from 'react';
import { SectionImage } from './SectionImage';

const Icon = ({ name }: { name: string }) => {
  const p = { fill: 'none', stroke: '#41463F', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const icons: Record<string, React.ReactNode> = {
    Leaf: <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14Zm0 0 6-6" {...p} />,
    Sparkle: <path d="M12 3c0 5 4 9 9 9-5 0-9 4-9 9 0-5-4-9-9-9 5 0 9-4 9-9Z" {...p} />,
    People: <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 0a2.5 2.5 0 1 0 0-5M3 20c0-3 3-5 6-5s6 2 6 5M16 15c2 0 5 1.5 5 4.5" {...p} />,
    Gift: <path d="M4 11h16v9H4v-9Zm0 0 8-6 8 6M12 5v15M8 8c-2 0-3-1-2.5-2.5S8 4 9.5 5.5 12 8 12 8s1-1 2.5-2.5S18 4 18.5 5.5 16 8 14 8" {...p} />,
  };
  return <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">{icons[name]}</svg>;
};

const MARKET = [
  { value: '₹16,000 Cr', label: "India's fragrance market by 2033" },
  { value: '+5.6%', label: 'Annual growth' },
];

const CONSUMER = [
  { alt: 'Close-up of clear blue water with gentle ripples', cap: ['Clean', '& Fresh'] },
  { alt: 'Sheer white curtains illuminated by sunlight', cap: ['Minimal', '& Subtle'] },
  { alt: 'Small ceramic vessel beside delicate natural branches', cap: ['Everyday', '& Versatile'] },
];

const COMPETITORS = [
  {
    brand: 'ZARA',
    desc: 'Trend-driven fragrances with fashionable packaging',
    alt: 'Modern ZARA retail storefront with minimalist architecture and signage',
  },
  {
    brand: 'MARKS & SPENCER',
    desc: 'Wide range of fragrances across price segments',
    alt: 'Marks & Spencer retail storefront with visible signage and glass windows',
  },
];

const OPPORTUNITIES = [
  { icon: 'Leaf', bg: '#D7E4E8', text: 'Extend LifeWear into everyday scent experiences' },
  { icon: 'Sparkle', bg: '#E9DFCF', text: 'Bring Japanese minimalism to fragrances' },
  { icon: 'People', bg: '#EBD6D8', text: 'Attract new consumers and strengthen brand relevance' },
  { icon: 'Gift', bg: '#E1E3D8', text: 'Potential for in-store discovery and gifting' },
];

export function WhyFragrancesNow() {
  return (
    <section className="px4w" aria-labelledby="px4w-heading">
      <div className="px4w__left">
        <SectionImage
          alt="Contemporary UNIQLO store exterior with a red sign on a pale concrete wall, blue sky and leafy shadows"
          className="px4w__left-img"
          tint="#DDE4E6"
        />
        <div className="px4w__left-overlay">
          <h2 id="px4w-heading" className="px4w__headline">
            <span className="px4w__h-primary">Why</span>
            <span className="px4w__h-accent">Fragrances</span>
            <span className="px4w__h-primary">Now?</span>
          </h2>
          <p className="px4w__subtitle">
            A natural next step
            <br />
            for UNIQLO&rsquo;s lifestyle
            <br />
            journey
          </p>
          <span className="px4w__ldivider" aria-hidden="true" />
        </div>
        <p className="px4w__vcap">
          Japanese
          <br />
          simplicity
          <br />
          for
          <br />
          everyday
          <br />
          life
        </p>
      </div>

      <div className="px4w__right">
        <div className="px4w__row px4w__row--1">
          <div className="px4w__panel">
            <h3 className="px4w__sh">The Market</h3>
            <div className="px4w__market">
              <SectionImage
                alt="Modern city skyline at sunset representing fragrance market growth"
                className="px4w__market-img"
                tint="#E4D9CB"
              />
              <div className="px4w__stats">
                {MARKET.map((s) => (
                  <div key={s.value}>
                    <span className="px4w__stat-value">{s.value}</span>
                    <span className="px4w__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px4w__panel">
            <h3 className="px4w__sh">Consumer Perspective</h3>
            <div className="px4w__consumer">
              {CONSUMER.map((c) => (
                <figure key={c.alt}>
                  <SectionImage alt={c.alt} className="px4w__consumer-img" tint="#E3EAEE" />
                  <figcaption>
                    {c.cap[0]}
                    <br />
                    {c.cap[1]}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className="px4w__row px4w__row--2">
          <div className="px4w__panel">
            <h3 className="px4w__sh">The White Space</h3>
            <div className="px4w__white">
              <SectionImage
                alt="Minimal pale architectural wall with a sharp blue-sky opening and soft tree branches"
                className="px4w__white-img"
                tint="#DDE6EA"
              />
              <blockquote className="px4w__quote">
                <span className="px4w__quote-mark" aria-hidden="true">
                  &ldquo;
                </span>
                Fragrances in the fast-fashion market exist, but there is space for a Japanese,
                minimal and functional approach at an accessible price point.
              </blockquote>
            </div>
          </div>

          <div className="px4w__panel">
            <h3 className="px4w__sh">Key Competitors</h3>
            <div className="px4w__competitors">
              {COMPETITORS.map((c) => (
                <div key={c.brand} className="px4w__competitor">
                  <SectionImage alt={c.alt} className="px4w__competitor-img" tint="#E6E1D8" />
                  <span className="px4w__competitor-brand">{c.brand}</span>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px4w__row px4w__row--3">
          <h3 className="px4w__sh px4w__sh--opp">Opportunity for UNIQLO</h3>
          <div className="px4w__opp-wrap">
            <ul className="px4w__opps">
              {OPPORTUNITIES.map((o) => (
                <li key={o.text}>
                  <span className="px4w__opp-icon" style={{ background: o.bg }}>
                    <Icon name={o.icon} />
                  </span>
                  <p>{o.text}</p>
                </li>
              ))}
            </ul>
            <SectionImage
              alt="Serene natural stone beside a reflective pool with soft white flowers and warm sunlight"
              className="px4w__opp-img"
              tint="#E4E3D8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
