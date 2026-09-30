import { Link } from 'react-router-dom';

/**
 * Wireframe Footer — structure only.
 */
export function Footer() {
  return (
    <footer
      data-wireframe="Footer"
      style={{ borderTop: '2px dashed #999', padding: '24px 16px', marginTop: 48 }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <span>[Footer — Name / Year]</span>
        <span style={{ display: 'flex', gap: 16 }}>
          <Link to="/#about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/#projects">All Projects</Link>
        </span>
      </div>
    </footer>
  );
}
