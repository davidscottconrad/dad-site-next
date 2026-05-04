function Contact() {
  return (
    <div className="container-fluid p-4" id="contact">
      <div className="row">
        <div className="col-md-6 mb-6">
          <h1 style={{ borderBottom: '1px solid black' }}>Locations</h1>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h2>St. Matthews</h2>
              <p>
                204 Breckenridge Lane<br />Louisville, KY 40207
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h1 style={{ borderBottom: '1px solid black' }}>Contact Information</h1>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h2>St. Matthews</h2>
              Phone: 502-899-7778<br />
              Fax: 502-897-5757
            </div>
            <div className="col-md-12 mb-4">
              <h2>Email</h2>
              reception@conradeyecenter.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
