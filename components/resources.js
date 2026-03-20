const resources = [
  {
    icon: '📖',
    title: 'Glossary of Eye Problems',
    description:
      'There are a multitude of disorders that can affect the eye. As your source for comprehensive eye care, we provide an introduction to many common eye problems.',
    link: 'https://www.mayoclinic.org/departments-centers/ophthalmology/sections/conditions-treated/orc-20518525',
    external: true,
    linkLabel: 'Visit Mayo Clinic',
  },
  {
    icon: '🏥',
    title: 'Insurance Options',
    description:
      'Conrad Eye Centers accepts most medical and vision plans including Medicare, Medicaid, Aetna, Anthem, Cigna, Humana, United Health Care, VSP, EyeMed, and many more.',
    link: '/Resources/insurance',
    external: false,
    linkLabel: 'View accepted plans',
  },
  {
    icon: '🔒',
    title: 'Notice of Privacy Practice',
    description:
      'At Conrad Eye Centers we take your privacy seriously. Read our HIPAA Notice of Privacy Practices to understand how we use and protect your health information.',
    link: '/Resources/privacy',
    external: false,
    linkLabel: 'Read privacy notice',
  },
];

function Resources() {
  return (
    <section id="resources">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Patient Resources</span>
          <h2>Resources</h2>
          <div className="section-divider" />
        </div>
        <div className="resources-grid">
          {resources.map((r) => (
            <div className="resource-card" key={r.title}>
              <div className="resource-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.description}</p>
              <a
                href={r.link}
                className="resource-link"
                target={r.external ? '_blank' : undefined}
                rel={r.external ? 'noopener noreferrer' : undefined}
              >
                {r.linkLabel} <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resources;
