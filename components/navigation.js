import { useState } from 'react';
import Link from 'next/link';

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div id="navContainer">
      <div id="navInner">
        <Link href="/"><a id="navBrand">Conrad Eye Centers</a></Link>

        <button
          id="navToggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="navLinks" className={open ? 'open' : ''}>
          <li><Link href="/#services"><a id="navBarText" onClick={() => setOpen(false)}>Services</a></Link></li>
          <li><Link href="/#about"><a id="navBarText" onClick={() => setOpen(false)}>About</a></Link></li>
          <li><Link href="/#resources"><a id="navBarText" onClick={() => setOpen(false)}>Resources</a></Link></li>
          <li><Link href="/#contact"><a id="navBarText" onClick={() => setOpen(false)}>Locations</a></Link></li>
          <li><Link href="/#contact"><a id="navBarText" onClick={() => setOpen(false)}>Contact</a></Link></li>
          <li><a href="tel:5028997778" id="navPhone">(502) 899-7778</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
