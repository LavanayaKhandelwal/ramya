import React from 'react';
import { project3Image, project3TrendBoard } from '../../data/artwork';
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

const MOOD = [
  {
    alt: 'Mood board of iridescent florals, holographic textures, pastel colour chips and a glossy beauty portrait',
    src: project3Image('3G'),
  },
  {
    alt: 'Colour board with blush, sage, coral and lavender Pantone swatches, garments and accessories',
    src: project3Image('3N'),
  },
  {
    alt: 'Trend board covering iridescent holographic surfaces, dreamy floral environments and soft futuristic interiors',
    src: project3TrendBoard,
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
            <h3 className="px3r__panel-label">01 / Mood Board</h3>
            <SectionImage src={project3Image('3G')} alt={MOOD[0].alt} className="px3r__board" tint="#EDE3EC" />
          </div>

          <div className="px3r__bottom">
            <div className="px3r__panel px3r__panel--palette">
              <h3 className="px3r__panel-label">02 / Colour Palette</h3>
              <SectionImage src={project3Image('3N')} alt={MOOD[1].alt} className="px3r__board" tint="#EADCE6" />
            </div>

            <div className="px3r__panel px3r__panel--trend">
              <h3 className="px3r__panel-label">03 / Trend &amp; Material Direction</h3>
              <SectionImage src={project3TrendBoard} alt={MOOD[2].alt} className="px3r__board" tint="#E1E7EF" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
