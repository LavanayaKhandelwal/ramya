import React from 'react';
import { SectionImage } from './SectionImage';
import { P3_BG } from './FutureFloralsHero';

const Icon = ({ name }: { name: string }) => {
  const p = { fill: 'none', stroke: '#77718F', strokeWidth: 1.3, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const icons: Record<string, React.ReactNode> = {
    Shirt: <path d="M8 4l4 2 4-2 4 3-3 2v9H7V9L4 7l4-3Z" {...p} />,
    Scale: <path d="M12 4v16M6 8h12M6 8l-3 6a3 3 0 0 0 6 0L6 8Zm12 0-3 6a3 3 0 0 0 6 0l-3-6Z" {...p} />,
    MoveDiagonal: <path d="M7 7h4M7 7v4M17 17h-4M17 17v-4M7 7l10 10" {...p} />,
    Waves: <path d="M3 9c2-2 4-2 6 0s4 2 6 0M3 15c2-2 4-2 6 0s4 2 6 0" {...p} />,
    Circles: <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z" {...p} />,
    Sun: <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0-4v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" {...p} />,
    BookOpen: <path d="M12 6C10 4 6 4 4 5v13c2-1 6-1 8 1 2-2 6-2 8-1V5c-2-1-6-1-8 1Zm0 0v13" {...p} />,
  };
  return <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">{icons[name]}</svg>;
};

const PRINCIPLES = [
  { icon: 'Shirt', title: 'Focal Point', desc: 'The mannequin anchors the composition.' },
  { icon: 'Scale', title: 'Balance', desc: 'Floral structures and display elements create visual balance across the window.' },
  { icon: 'MoveDiagonal', title: 'Scale', desc: 'Varying sizes of floral forms add depth and proportion.' },
  { icon: 'Waves', title: 'Rhythm', desc: "Repeated floral forms guide the viewer's eye through the display." },
  { icon: 'Circles', title: 'Colour Harmony', desc: 'Pastel shades and iridescent reflections maintain a cohesive aesthetic.' },
  { icon: 'Sun', title: 'Lighting', desc: 'Highlights the reflective materials and adds depth to the installation.' },
];

export function WindowIntoTheFuture() {
  return (
    <section className="px3w" aria-labelledby="px3w-heading">
      <img className="px3w__bg" src={P3_BG} alt="" aria-hidden="true" draggable={false} />

      <div className="px3w__grid">
        <div className="px3w__main">
          <SectionImage
            alt="Full-height Cover Story retail window with a central floral-dressed mannequin, iridescent drapes and holographic flower structures"
            className="px3w__main-img"
            tint="#E9DEE9"
          />
        </div>

        <div className="px3w__middle">
          <h2 id="px3w-heading" className="px3w__heading">
            <span className="px3w__l1">A Window</span>
            <span className="px3w__l2">Into The Future</span>
          </h2>
          <p className="px3w__subtitle">Where visual storytelling becomes a retail experience.</p>
          <span className="px3w__divider" aria-hidden="true" />

          <div className="px3w__block">
            <h3>THE FINAL EXPRESSION</h3>
            <p>
              Future Florals transforms the window into a contemporary, dreamlike environment.
              Reflective floral structures, sheer drapes and carefully styled fashion work together to
              create a display that feels light, feminine and forward-looking.
            </p>
          </div>

          <div className="px3w__block">
            <h3>VISUAL MERCHANDISING PRINCIPLES</h3>
            <ul className="px3w__principles">
              {PRINCIPLES.map((pr) => (
                <li key={pr.title}>
                  <span className="px3w__pr-icon">
                    <Icon name={pr.icon} />
                  </span>
                  <span className="px3w__pr-text">
                    <strong>{pr.title}</strong>
                    <span>{pr.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px3w__details">
          <figure className="px3w__detail">
            <SectionImage
              alt="Close-up of a large holographic flower with layered translucent petals and an illuminated pink-gold centre"
              className="px3w__detail-img px3w__detail-img--square"
              tint="#EDE0EC"
            />
            <figcaption>01 — FLORAL DETAIL</figcaption>
          </figure>
          <figure className="px3w__detail">
            <SectionImage
              alt="Close-up of the black mannequin in a floral dress highlighting the print, drape and structured handbag"
              className="px3w__detail-img"
              tint="#E6DDEA"
            />
            <figcaption>02 — MANNEQUIN &amp; GARMENT DETAIL</figcaption>
          </figure>
        </div>

        <div className="px3w__learn">
          <span className="px3w__learn-icon">
            <Icon name="BookOpen" />
          </span>
          <div className="px3w__learn-copy">
            <h3>KEY LEARNING</h3>
            <p>
              The project demonstrated how brand identity, seasonal direction, material
              experimentation and spatial styling can be combined to translate a creative concept
              into a physical retail environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
