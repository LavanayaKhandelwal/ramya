import { Link, NavLink } from 'react-router-dom';
import { siteData } from '../data/site';

/**
 * Wireframe Header — structure only, no design.
 * Mirrors lavanaya nav: Projects / About / Contact.
 */
export function Header() {
  return (
    <header
      data-wireframe="Header"
      style={{ borderBottom: '2px dashed #999', padding: '12px 16px' }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/" data-wireframe="Header.brand">
          [Logo] {siteData.student.name}
        </Link>
        <nav data-wireframe="Header.nav" style={{ display: 'flex', gap: 16 }}>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/#about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
