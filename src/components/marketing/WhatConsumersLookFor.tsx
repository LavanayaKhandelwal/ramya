import React from 'react';
import { SectionImage } from './SectionImage';

const ICONS = {
  comfort: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M9 22a5 5 0 0 1 .6-9.97 6.5 6.5 0 0 1 12.5 1.6A4.5 4.5 0 0 1 22 22Z" />
    </svg>
  ),
  simplicity: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 4v24M4 16h24M7 7l18 18M25 7 7 25" />
    </svg>
  ),
  versatility: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 5v3M6 14l10-6 10 6M16 14v13M9 27h14" />
    </svg>
  ),
  individuality: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 26s-9-5.7-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.3-9 12-9 12Z" />
    </svg>
  ),
};

const LOOK_FOR = [
  { icon: ICONS.comfort, title: 'Comfort', desc: 'Easy-to-wear and functional' },
  { icon: ICONS.simplicity, title: 'Simplicity', desc: 'Clean and minimal aesthetics' },
  { icon: ICONS.versatility, title: 'Versatility', desc: 'Suitable for everyday life' },
  { icon: ICONS.individuality, title: 'Individuality', desc: 'Small details that add personality' },
];

const STRIP = [
  { alt: 'Close-up of folded beige and olive linen fabrics', src: '/ramya-portfolio-images/placeholders/2F.png' },
  { alt: 'Minimalist book reading "Good Clothes Good Days"', src: '/ramya-portfolio-images/placeholders/2G.png' },
  { alt: 'Botanical branches casting soft shadows on an ivory wall', src: '/ramya-portfolio-images/placeholders/2H.png' },
  { alt: 'Close-up of relaxed neutral trousers and natural fabric folds', src: '/ramya-portfolio-images/placeholders/2I.png' },
];

export function WhatConsumersLookFor() {
  return (
    <section className="px2c" aria-labelledby="px2c-heading">
      <div className="px2c__rail">
        <SectionImage
          src="/ramya-portfolio-images/placeholders/2B.png"
          alt="Natural wooden clothing rail with neutral garments, white linen and a kraft-paper tag"
          tint="#E4D9C6"
        />
      </div>

      <div className="px2c__body">
        <div className="px2c__top">
          <div className="px2c__heading-block">
            <span className="px2c__rule" aria-hidden="true" />
            <h2 id="px2c-heading" className="px2c__heading">
              Understanding
              <br />
              the <em>Consumer</em>
            </h2>
            <p className="px2c__eyebrow">People&nbsp;&nbsp;|&nbsp;&nbsp;Perspectives&nbsp;&nbsp;|&nbsp;&nbsp;Possibilities</p>
            <p className="px2c__desc">
              At Uniqlo, clothing is more than just what you wear — it&rsquo;s a part of everyday life.
              To create designs that truly resonate, we need to understand the people who choose
              Uniqlo, what inspires them, and what they wish for beyond the basics.
            </p>
          </div>

          <div className="px2c__collage">
            <SectionImage
              className="px2c__collage-main"
              src="/ramya-portfolio-images/placeholders/2C.png"
              alt="Woman in a white relaxed-fit shirt carrying a canvas tote, photographed from behind in sunlight"
              tint="#E8DED0"
            />
            <SectionImage
              className="px2c__collage-a"
              src="/ramya-portfolio-images/placeholders/2D.png"
              alt="Close-up of textured neutral fabric"
              tint="#DDD2C0"
            />
            <SectionImage
              className="px2c__collage-b"
              src="/ramya-portfolio-images/placeholders/2E.png"
              alt="Botanical shadows on a warm ivory wall"
              tint="#E7E1D3"
            />
          </div>
        </div>

        <div className="px2c__mid">
          <div className="px2c__look">
            <div className="px2c__look-head">
              <h3>What Consumers Look For</h3>
              <span className="px2c__look-rule" aria-hidden="true" />
            </div>
            <ul className="px2c__look-list">
              {LOOK_FOR.map((item) => (
                <li key={item.title} className="px2c__look-item">
                  <span className="px2c__look-icon">{item.icon}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="px2c__mindset">
            <h3 className="px2c__mindset-title">The Consumer Mindset</h3>
            <span className="px2c__quote-mark" aria-hidden="true">&ldquo;</span>
            <p className="px2c__quote">
              They love Uniqlo for making life easier, but many wish for small design elements that
              help them <em>express their personality</em>.
            </p>
            <span className="px2c__mindset-rule" aria-hidden="true" />
          </div>
        </div>

        <div className="px2c__strip">
          {STRIP.map((s) => (
            <SectionImage key={s.alt} src={s.src} alt={s.alt} tint="#E3DACB" />
          ))}
        </div>
      </div>
    </section>
  );
}
