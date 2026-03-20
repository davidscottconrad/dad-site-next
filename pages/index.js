import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Services from "../components/services";
import About from "../components/about";
import Navigation from "../components/navigation";
import Resources from "../components/resources";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Conrad Eye Centers — Ophthalmology &amp; Eye Surgery Louisville, KY</title>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Conrad Eye Centers — Board-certified ophthalmologists Tim Conrad, MD and Laurie Wilbanks, MD. Specializing in glaucoma, cataract surgery, LASIK, and comprehensive eye care in Louisville, KY and New Albany, IN."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-logo-wrap">
          <Image
            src="/logocolor2.jpg"
            width={1053}
            height={444}
            alt="Conrad Eye Centers"
            priority
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div className="hero-tagline">
          <span>Ophthalmology</span>
          <span className="dot" />
          <span>Eye Diseases &amp; Surgery</span>
          <span className="dot" />
          <span>Glaucoma</span>
        </div>

        <h1 className="hero-doctors">
          Tim Conrad, MD
        </h1>

        <p className="hero-subtitle">
          Board Certified Ophthalmologist &nbsp;&bull;&nbsp; Louisville, KY &amp; New Albany, IN
        </p>

        <div className="hero-cta-group">
          <a href="tel:5028997778" className="btn-primary">
            Call (502) 899-7778
          </a>
          <Link href="/#services" passHref>
            <a className="btn-outline">Our Services</a>
          </Link>
        </div>

        <Link href="/#services" passHref>
          <a className="hero-scroll" aria-label="Scroll to services">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </Link>
      </section>

      <Contact />
      <Services />
      <About />
      <Resources />

      <footer>
        <p>
          &copy; {new Date().getFullYear()} Conrad Eye Centers &nbsp;&middot;&nbsp; All Rights Reserved &nbsp;&middot;&nbsp;
          <Link href="/Resources/privacy" passHref>
            <a>Privacy Policy</a>
          </Link>
        </p>
      </footer>
    </div>
  );
}
