function Contact() {
  return (
    <section id="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Find Us</span>
          <h2>Locations &amp; Contact</h2>
          <div className="section-divider" />
        </div>

        <div className="contact-grid">
          <div className="location-card">
            <h3>St. Matthews</h3>
            <address>
              204 Breckenridge Lane<br />
              Louisville, KY 40207
            </address>
            <a href="tel:5028997778" className="phone">(502) 899-7778</a>
            <span className="fax">Fax: (502) 897-5757</span>
          </div>

          <div className="location-card">
            <h3>New Albany</h3>
            <address>
              Professional Arts Building<br />
              1919 State Street, Suite 201<br />
              New Albany, IN 47150
            </address>
            <a href="tel:8129446063" className="phone">(812) 944-6063</a>
            <span className="fax">Fax: (502) 897-5757</span>
          </div>
</div>

        <div className="contact-email-bar">
          <p>Email Us</p>
          <a href="mailto:reception@conradeyecenter.com">
            reception@conradeyecenter.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
