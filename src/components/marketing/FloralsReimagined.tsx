import React from 'react';
import { project3Image } from '../../data/artwork';
import { SectionImage } from './SectionImage';

const INSIGHTS = [
  {
    title: 'The Brand',
    desc: 'A contemporary, feminine and trend-led fashion label that blends modern silhouettes with effortless style.',
    alt: 'Close-up of a delicate pale pink blossom with a soft cream background',
    src: project3Image('3C'),
    tint: '#F0DAD9',
  },
  {
    title: 'The Season',
    desc: 'Spring/Summer brings lightness, freshness and a playful, optimistic mood to the collection.',
    alt: 'Iridescent pastel material reflecting lavender, pink and blue light',
    src: project3Image('3D'),
    tint: '#E5DDF0',
  },
  {
    title: 'The Creative Direction',
    desc: 'Traditional florals reinterpreted through holographic materials, reflective surfaces and translucent layers.',
    alt: 'Pale lavender flowers with translucent petals and pearlescent reflections',
    src: project3Image('3E'),
    tint: '#E8E0F2',
  },
  {
    title: 'The Concept',
    desc: 'A modern, expressive take on florals where nature meets innovation, creating a soft yet futuristic in-store experience.',
    alt: 'Blue and pink iridescent floral forms against a soft pastel background',
    src: project3Image('3F'),
    tint: '#DDE7F0',
  },
];

const KEYWORDS = [
  { text: 'Feminine', colour: '#E9DDF0' },
  { text: 'Soft Futuristic', colour: '#DCE6E8' },
  { text: 'Dreamy', colour: '#F3D7DB' },
  { text: 'Holographic', colour: '#F0E0C9' },
  { text: 'Floral Forms', colour: '#E1E6D8' },
  { text: 'Light', colour: '#F3E6C9' },
];

// `3G` is the supplied mood-board artwork; `3H`–`3M` still resolve to their
// labelled placeholders until those boards are supplied.
const MOOD = [
  { alt: 'Mood board collage of iridescent florals, material studies and editorial portraits', cls: 'a', src: project3Image('3G') },
  { alt: 'Holographic material close-up', cls: 'b', src: project3Image('3H') },
  { alt: 'Editorial beauty portrait with luminous pastel makeup', cls: 'c', src: project3Image('3I') },
  { alt: 'Futuristic fashion portrait with reflective styling', cls: 'd', src: project3Image('3J') },
  { alt: 'Translucent purple-blue flowers', cls: 'e', src: project3Image('3K') },
  { alt: 'Flowing iridescent fabric', cls: 'f', src: project3Image('3L') },
  { alt: 'Pastel fashion silhouettes', cls: 'g', src: project3Image('3M') },
];

const PALETTE = [
  { name: 'Blush Pink', hex: '#E7A9B2' },
  { name: 'Soft Sage', hex: '#B9C8AF' },
  { name: 'Lavender', hex: '#C7B6E0' },
  { name: 'Coral', hex: '#EC776C' },
  { name: 'Pearl Blue', hex: '#A8C9DE' },
  { name: 'Warm Ivory', hex: '#F5EDE3' },
];

const TRENDS = [
  {
    title: 'Iridescent / Holographic',
    desc: 'Light-reactive surfaces that shift colour and create a futuristic, dimensional experience.',
  },
  {
    title: 'Dreamy Floral Environments',
    desc: 'Ethereal, romantic settings inspired by nature, soft textures, and immersive installations.',
  },
  {
    title: 'Soft Futuristic Aesthetic',
    desc: 'A new take on futuristic design, using minimal spaces with soft curves, pastel tones, and glowing accents.',
  },
];

export function FloralsReimagined() {
  return (
    <section className="px3r" aria-labelledby="px3r-heading">
      <img className="px3r__bg" src={project3Image('3B')} alt="" aria-hidden="true" draggable={false} />

      <div className="px3r__grid">
        <div className="px3r__left">
          <h2 id="px3r-heading" className="px3r__heading">
            <span className="px3r__l1">Florals</span>
            <span className="px3r__l2">Reimagined</span>
          </h2>
          <p className="px3r__label">Cover Story &times; Future Florals</p>
          <span className="px3r__divider" aria-hidden="true" />
          <p className="px3r__intro">
            Exploring a new visual language for florals through light, material and modern form.
          </p>

          <ul className="px3r__insights">
            {INSIGHTS.map((ins) => (
              <li key={ins.title}>
                <SectionImage src={ins.src} alt={ins.alt} className="px3r__ins-img" tint={ins.tint} />
                <div>
                  <h3>{ins.title}</h3>
                  <p>{ins.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="px3r__keywords">
            <h3>Keywords</h3>
            <div className="px3r__pills">
              {KEYWORDS.map((k) => (
                <span key={k.text} className="px3r__pill" style={{ background: k.colour }}>
                  {k.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="px3r__right">
          <div className="px3r__panel px3r__panel--mood">
            <h3 className="px3r__panel-label">Mood Board</h3>
            <div className="px3r__mood">
              {MOOD.map((m) => (
                <SectionImage key={m.alt} src={m.src} alt={m.alt} className={`px3r__mood-img px3r__mood-img--${m.cls}`} tint="#EDE3EC" />
              ))}
            </div>
          </div>

          <div className="px3r__bottom">
            <div className="px3r__panel px3r__panel--palette">
              <h3 className="px3r__panel-label">Colour Palette</h3>
              <div className="px3r__swatch-row">
                <div className="px3r__swatch-tall">
                  {PALETTE.map((p) => (
                    <span key={p.name} style={{ background: p.hex }} title={p.name} />
                  ))}
                </div>
                <div className="px3r__palette-refs">
                  <SectionImage src={project3Image('3N')} alt="Colour board collage with pastel swatches, floral references and styling imagery" tint="#EADCE6" />
                  <SectionImage src={project3Image('3O')} alt="Holographic material sample" tint="#E1E7EF" />
                </div>
              </div>
              <ul className="px3r__swatch-labels">
                {PALETTE.map((p) => (
                  <li key={p.name}>
                    <span style={{ background: p.hex }} />
                    {p.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="px3r__panel px3r__panel--trend">
              <h3 className="px3r__panel-label">Trend &amp; Material Direction</h3>
              <p className="px3r__trend-sub">Trend board</p>
              <ul className="px3r__trend-list">
                {TRENDS.map((t) => (
                  <li key={t.title}>
                    <h4>{t.title}</h4>
                    <p>{t.desc}</p>
                  </li>
                ))}
              </ul>
              <div className="px3r__materials" aria-hidden="true">
                <span style={{ background: '#E3D6C4' }} />
                <span style={{ background: '#F0DDDA' }} />
                <span style={{ background: '#DCE3EE' }} />
              </div>
              <p className="px3r__closing">
                These influences shape a holographic floral VM concept that blends femininity with a
                soft futuristic retail experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
