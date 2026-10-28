import React from 'react';
import { project4Image } from '../../data/artwork';

/**
 * Project 4 Case Study — top of page.
 * Opens the page with the "REAL PEOPLE, REAL INSIGHTS" headline, in the slot the
 * perfume-bottle hero used to occupy. The survey photograph is the actual supplied
 * asset (`Page 4 4AE.png`), placed as a plain foreground document — no background images.
 */
export function RealPeopleRealInsightsTop() {
  const survey = project4Image('4AE');

  return (
    <section className="px4r-top" aria-labelledby="px4r-top-heading">
      <div className="px4r-top__inner">
        <div className="px4r-top__content">
          <h1 id="px4r-top-heading" className="px4r-top__headline">
            <span>Real</span>
            <span>People,</span>
            <span className="px4r-top__accent">Real</span>
            <span className="px4r-top__accent">Insights</span>
          </h1>
          <p className="px4r-top__subtitle">
            A quick consumer survey to understand preferences, perceptions and overall experience
            with the fragrance concept.
          </p>
          <span className="px4r-top__divider" aria-hidden="true" />
        </div>

        <figure className="px4r-top__figure">
          <img
            src={survey}
            alt="Completed UNIQLO product feedback form showing actual consumer survey responses"
            className="px4r-top__survey"
            loading="eager"
            fetchPriority="high"
            draggable={false}
          />
        </figure>
      </div>
    </section>
  );
}
