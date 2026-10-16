import React from 'react';
import { project3Image } from '../../data/artwork';
import { SectionImage } from './SectionImage';

const Icon = ({ name }: { name: string }) => {
  const c = '#817B79';
  const p = { fill: 'none', stroke: c, strokeWidth: 1, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const icons: Record<string, React.ReactNode> = {
    Leaf: <path d="M4 12s2-6 8-6 8 6 8 6-2 6-8 6-8-6-8-6Z M5 12c3-1 7-1 14 0" {...p} />,
    Sparkles: <path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" {...p} />,
    Flower: <path d="M12 12c0-3 2-5 2-5s2 2 2 5-2 5-2 5-2-2-2-5Zm0 0c-3 0-5-2-5-2s2-2 5-2 5 2 5 2-2 2-5 2Zm0 0c0 3-2 5-2 5s-2-2-2-5 2-5 2-5 2 2 2 5Z" {...p} />,
    Diamond: <path d="M12 3l7 9-7 9-7-9 7-9Z" {...p} />,
  };
  return <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">{icons[name]}</svg>;
};

const FEATURES = [
  { icon: 'Leaf', title: 'LIGHTWEIGHT', desc: 'Easy to install and adaptable.', bg: '#F1E5EF' },
  { icon: 'Sparkles', title: 'REFLECTIVE', desc: 'Beautiful under different lighting.', bg: '#EBDCF0' },
  { icon: 'Flower', title: 'VERSATILE', desc: 'Works for windows, displays and in-store zones.', bg: '#F0E3E6' },
  { icon: 'Diamond', title: 'CONTEMPORARY', desc: 'Adds a modern, artistic touch.', bg: '#DFE4F2' },
];

export function ExperienceInBloom() {
  return (
    <section className="px3e" aria-labelledby="px3e-heading">
      <img className="px3e__bg" src={project3Image('3P')} alt="" aria-hidden="true" draggable={false} />

      <div className="px3e__grid">
        <div className="px3e__intro">
          <span className="px3e__divider" aria-hidden="true" />
          <h2 id="px3e-heading" className="px3e__heading">
            <span className="px3e__l1">Experience</span>
            <span className="px3e__l2">In Bloom</span>
          </h2>
          <p className="px3e__desc">
            An immersive floral installation that brings together iridescent materials, soft lighting
            and fluid drapes to create a dreamy, contemporary retail moment.
          </p>
          <SectionImage
            src={project3Image('3Q')}
            alt="Large translucent holographic flower with reflective petals and an illuminated golden centre"
            className="px3e__decor"
            tint="#E7DCF0"
          />
        </div>

        <div className="px3e__main">
          <SectionImage
            src={project3Image('3R')}
            alt="Two people installing flowing iridescent drapes inside a contemporary fashion retail space"
            className="px3e__main-img"
            tint="#E4E1EC"
          />
        </div>

        <div className="px3e__completed">
          <SectionImage
            src={project3Image('3S')}
            alt="Completed Cover Story retail installation with a mannequin in a floral dress and holographic flower structures"
            className="px3e__completed-img"
            tint="#E9DEE9"
          />
        </div>

        <div className="px3e__details">
          {[
            {
              n: '01',
              title: 'FLORAL DETAIL',
              src: project3Image('3T'),
              alt: 'Close-up of an illuminated holographic flower with translucent reflective petals and a warm golden centre',
              caption: 'Textured centre with soft lighting.',
              tint: '#EDE0EC',
            },
            {
              n: '02',
              title: 'MATERIAL CLOSE-UP',
              src: project3Image('3U'),
              alt: 'Macro photograph of flowing iridescent material with reflective blue, pink, lavender and silver highlights',
              caption: 'Fluid, light-reflective surface with a dreamy glow.',
              tint: '#E1E6F0',
            },
          ].map((d) => (
            <figure key={d.n} className="px3e__detail">
              <SectionImage src={d.src} alt={d.alt} className="px3e__detail-img" tint={d.tint} />
              <figcaption>
                <span className="px3e__detail-label">
                  {d.n} — {d.title}
                </span>
                <span className="px3e__detail-cap">{d.caption}</span>
              </figcaption>
            </figure>
          ))}

          <ul className="px3e__features">
            {FEATURES.map((f) => (
              <li key={f.title}>
                <span className="px3e__feat-icon" style={{ background: f.bg }}>
                  <Icon name={f.icon} />
                </span>
                <span className="px3e__feat-title">{f.title}</span>
                <span className="px3e__feat-desc">{f.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="px3e__bottom">
          <figure className="px3e__bottom-item px3e__bottom-item--wide">
            <SectionImage
              src={project3Image('3V')}
              alt="Layered holographic floral forms showing translucent surfaces and reflective petals"
              className="px3e__bottom-img"
              tint="#E8E0EE"
            />
            <figcaption>
              <span className="px3e__detail-label">INSTALLATION ELEMENTS</span>
              <span className="px3e__detail-cap">Layered floral forms handcrafted with iridescent material.</span>
            </figcaption>
          </figure>
          <figure className="px3e__bottom-item">
            <SectionImage
              src={project3Image('3W')}
              alt="Wider view of the completed installation with flowing iridescent drapes and soft lighting"
              className="px3e__bottom-img"
              tint="#E3E4ED"
            />
            <figcaption>
              <span className="px3e__detail-label">ATMOSPHERE</span>
              <span className="px3e__detail-cap">A soft, ethereal space that invites pause and discovery.</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
