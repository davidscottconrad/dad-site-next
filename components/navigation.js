import { useState } from 'react';
import Link from 'next/link';

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div id="navContainer">
      <div className="nav-inner">
        <Link href="/" passHref>
          <a className="nav-brand">Conrad Eye Centers</a>
        </Link>
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li>
            <Link href="/#services" passHref>
              <a onClick={() => setOpen(false)}>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/#about" passHref>
              <a onClick={() => setOpen(false)}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/#resources" passHref>
              <a onClick={() => setOpen(false)}>Resources</a>
            </Link>
          </li>
          <li>
            <Link href="/#contact" passHref>
              <a onClick={() => setOpen(false)}>Locations</a>
            </Link>
          </li>
          <li>
            <a href="tel:5028997778" className="nav-phone">(502) 899-7778</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
