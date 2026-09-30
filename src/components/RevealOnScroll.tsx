import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll reveals.
 *
 * One observer, mounted once beside ScrollToTop, tags elements as they come
 * into view. The animation itself lives in motion.css — this component only
 * decides what is a reveal target, when it counts as revealed, and which
 * elements in a row are delayed behind their neighbours.
 *
 * It is mounted at the app level rather than used per-section because almost
 * nothing here has a class to hang a wrapper on: eleven of the twelve
 * marketing components are wireframes with no className at all, so the only
 * thing every project page has in common is WireBlock. Reaching them from here
 * is what lets the motion cover every project without eleven near-identical
 * edits, and without any component having to know it is animatable.
 *
 * The target list is a selector rather than a set of component references, so
 * this stays in step with the design automatically: a new section that picks up
 * one of these classes is covered without being registered here.
 *
 * Two details worth keeping:
 *
 * The observer adds `has-reveal` to <html> itself, and motion.css scopes the
 * hidden state to that class. This is what makes the reveal safe — the elements
 * start fully visible in the CSS, and only become hidden once JS has proved it
 * can un-hide them. A failed script, a JS error, or a browser without
 * IntersectionObserver leaves the page readable instead of blank.
 *
 * Elements mount as the route renders, so the scan runs after paint and retries
 * for a few frames. One pass is enough for an already-rendered tree; the retries
 * cover a route that arrives a tick or two later.
 */

/**
 * The elements that fade up as they are scrolled to.
 *
 * `.wire-block` reaches every wireframe block on every page and every project.
 * `.project-card` is the four-card index on the home page. The rest are the
 * designed full-height sections, which each get the same treatment as one
 * block — animating the section rather than its contents, because their
 * contents are absolutely positioned layers of artwork that have to keep their
 * composition exactly as drawn.
 *
 * The header is deliberately absent. It is persistent chrome present on every
 * route, and re-animating navigation each time the reader changes page is the
 * opposite of subtle.
 *
 * A new full-height section needs its root class added here — this list is the
 * one place that decides what moves. The two `.project1-*` and `.p1-*` entries
 * are the Project 1 sections, which are full-bleed spreads for the same reason
 * the About and Projects sections are.
 */
const REVEAL_SELECTOR = [
  '.wire-block',
  '.project-card',
  '.portfolio-hero',
  '.about-section',
  '.projects-section',
  '.project1-hero-wrapper',
  '.p1-beginning-spread',
  '.site-footer',
].join(', ');

/** How many elements in a row may be delayed before the rest all share the last slot. */
const MAX_STAGGERED = 4;

export function RevealOnScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.documentElement;

    // Say out loud that the hidden state is safe to apply from now on.
    root.classList.add('has-reveal');

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          // A browser stops reporting an element once it has been unobserved, so
          // this guard should never be reached in practice. It is here so that
          // "revealed" is a state the code maintains rather than one it inherits
          // from the observer's own bookkeeping.
          if (entry.target.classList.contains('is-revealed')) continue;
          entry.target.classList.add('is-revealed');
          // Once revealed, a reveal stays revealed. Scrolling back up must not
          // replay it, or the page would flicker every time the reader returns.
          observer.unobserve(entry.target);
        }
      },
      // Fire slightly before the element is fully in view, so the movement has
      // finished by the time the reader is looking straight at it.
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 }
    );

    let frame = 0;
    let pass = 0;
    // The scan runs on every retry pass, so without this every element would be
    // observed once per pass. Observing an already-observed target is a no-op in
    // the browser, but it still means re-walking the entire document six times on
    // every page load to achieve nothing after the first pass.
    const seen = new Set<Element>();

    const scan = () => {
      const pending = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
      let row = 0;
      let previousParent: Element | null = null;

      for (const el of Array.from(pending)) {
        if (seen.has(el)) continue;
        if (el.classList.contains('is-revealed')) continue;
        seen.add(el);

        // Only the four cards are delayed behind each other. They sit side by
        // side in a grid and enter view together, so a stagger reads as intent.
        // Every other target is a lone full-height block that arrives in view on
        // its own, where a delay would only make it feel sluggish.
        if (el.classList.contains('project-card')) {
          if (el.parentElement === previousParent) row += 1;
          else row = 0;
          previousParent = el.parentElement;
          el.style.setProperty('--reveal-delay', `${Math.min(row, MAX_STAGGERED) * 70}ms`);
        }

        observer.observe(el);
      }
    };

    const tick = () => {
      scan();
      pass += 1;
      if (pass < 6) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
