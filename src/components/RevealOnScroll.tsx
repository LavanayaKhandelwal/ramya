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
 * `.wire-block` reaches every wireframe block on every page and every project,
 * which is most of Projects 2, 3 and 4, all three case study slides and both
 * internship pages. `.page-*` is the breadcrumb / eyebrow / title / intro head
 * that opens all four projects and both internship pages. `.project-card` is
 * the four-card index on the home page. The rest are the designed full-height
 * sections, which each get the same treatment as one block — animating the
 * section rather than its contents, because their contents are absolutely
 * positioned layers of artwork that have to keep their composition exactly as
 * drawn.
 *
 * The header is deliberately absent. It is persistent chrome present on every
 * route, and re-animating navigation each time the reader changes page is the
 * opposite of subtle.
 *
 * A new full-height section needs its root class added here — this list is the
 * one place that decides what moves, and the same class also needs adding to the
 * cross-fade group in motion.css. The `.project1-*` and `.p1-*` entries are the
 * five Project 1 spreads, which are full-bleed for the same reason the About
 * and Projects sections are.
 */
const REVEAL_SELECTOR = [
  '.wire-block',
  '.page-breadcrumb',
  '.page-eyebrow',
  '.page-title',
  '.page-intro',
  '.project-card',
  '.portfolio-hero',
  '.about-section',
  '.projects-section',
  '.project1-hero-wrapper',
  '.p1-hero-garment-spread',
  '.p1-beginning-spread',
  '.p1-direction-spread',
  '.p1-collection-spread',
].join(', ');

/** How long each element in a row waits behind the one before it. */
const STAGGER_MS = 70;

/** How many elements in a row may be delayed before the rest share the last slot. */
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
      // Row detection, rather than naming the classes that deserve a stagger.
      // Siblings that share a parent and sit at the same offsetTop are on the
      // same visual row, so they arrive together and read better slightly
      // offset from each other. Everything else gets none: a lone full-height
      // block, or a column of blocks each met at a different scroll position,
      // would only feel sluggish if its arrival were held back.
      //
      // This replaced a hard-coded `.project-card` check, which meant the
      // four-up on the internship learnings page and any future row of blocks
      // got no stagger at all — and which also gave the Projects section an
      // arbitrary 70ms delay for no reason, since it has no siblings to be in a
      // row with. Deriving it from the layout gets both right without a list.
      let row = 0;
      let previous: { parent: Element | null; top: number } | null = null;

      for (const el of Array.from(pending)) {
        if (seen.has(el)) continue;
        if (el.classList.contains('is-revealed')) continue;
        seen.add(el);

        const top = el.offsetTop;
        if (previous && previous.parent === el.parentElement && previous.top === top) {
          row += 1;
        } else {
          row = 0;
        }
        previous = { parent: el.parentElement, top };

        if (row > 0) {
          el.style.setProperty(
            '--reveal-delay',
            `${Math.min(row, MAX_STAGGERED) * STAGGER_MS}ms`
          );
        }

        // JS hands out both halves of the hidden state, and this is the second.
        // `has-reveal` was added to <html> above; this marks the element itself.
        // Nothing else in the tree sets it, so an element is only ever hidden by
        // the very code that is observing it and is about to add `is-revealed`
        // again — and an element whose observation we never reach is never
        // hidden. motion.css reads nothing but these two classes.
        el.classList.add('reveal-target');
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
