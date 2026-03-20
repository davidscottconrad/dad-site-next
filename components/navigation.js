import { useState } from 'react';

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div id="navContainer">
      <div id="navInner">
        <a href="/" id="navBrand">Conrad Eye Centers</a>

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
          <li><a href="/#services" id="navBarText" onClick={() => setOpen(false)}>Services</a></li>
          <li><a href="/#about" id="navBarText" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="/#resources" id="navBarText" onClick={() => setOpen(false)}>Resources</a></li>
          <li><a href="/#contact" id="navBarText" onClick={() => setOpen(false)}>Locations</a></li>
          <li><a href="/#contact" id="navBarText" onClick={() => setOpen(false)}>Contact</a></li>
          <li><a href="tel:5028997778" id="navPhone">(502) 899-7778</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
