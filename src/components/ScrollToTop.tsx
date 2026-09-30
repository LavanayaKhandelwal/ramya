import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll to top on route change (mirrors lavanaya ScrollToTop), except when the
 * link carries a hash.
 *
 * The About section is a section of the home page rather than a route, so the
 * nav and footer reach it as `/#about`. Jumping to the top on that navigation
 * would defeat the link entirely — the browser would place the reader at the top
 * of the home page with the About section a screen or two below them. So a hash
 * is honoured instead, and the scroll lands on the section itself.
 *
 * The hash scroll is deferred past paint, because on a client-side navigation
 * the target section may not be laid out yet at the moment the effect runs, and
 * scrolling to a zero-height box would silently do nothing.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const raf = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView();
      });
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
