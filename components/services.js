import Link from 'next/link';

const services = [
  {
    title: 'Glasses & Contacts',
    description:
      'Conrad Eye Centers focuses on your vision with one-on-one personalized eye exams for any age. Each of our locations has a full service optical boutique.',
    link: '/Services/GlassesAndContacts',
  },
  {
    title: 'Eye Injuries & Infections',
    description:
      'Is your eye red, irritated, scratchy, watery, or painful? Dr. Conrad is your convenient, quick, and knowledgeable answer.',
    link: '/Services/EyeInjuries',
  },
  {
    title: 'Laser Vision Correction',
    description:
      'LASIK and PRK procedures to reduce your need for glasses or contacts. Dr. Conrad has been performing laser vision correction since 1997.',
    link: '/Services/Laser',
  },
  {
    title: 'Eye Diseases',
    description:
      'Expert care and treatment for chronic eye diseases such as glaucoma, macular degeneration, diabetic retinopathy, and many others.',
    link: '/Services/EyeDiseases',
  },
  {
    title: 'Eye Implants',
    description:
      'Conrad Eye Centers uses the most advanced multi-focal lens implant technology in intraocular lens replacement for cataracts.',
    link: '/Services/Implants',
  },
  {
    title: 'Surgical Procedures',
    description:
      'Cataract surgery, chalazion/stye excision, and skin tag removal performed with expert care and precision.',
    link: '/Services/SurgicalProcedures',
  },
];

function Services() {
  return (
    <section id="services">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">What We Offer</span>
          <h2>Our Services</h2>
          <div className="section-divider" />
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <Link href={s.link} passHref>
                <a className="service-link">Learn more <span>→</span></a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
