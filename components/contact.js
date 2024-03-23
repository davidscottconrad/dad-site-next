function Contact() {
    return (
        <div className="container-fluid p-4" id="contact">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <h1 style={{ fontSize: '36px' }}>Locations</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <h2 style={{ fontSize: '22px' }}>St. Matthews</h2>
                            <p>
                                204 Breckenridge Lane <br></br> Louisville, KY 40207<br></br>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h2 style={{ fontSize: '22px' }}>New Albany</h2>
                            <p>
                                Professional Arts Building<br></br>
                                1919 State Street Suite 201<br></br>
                                New Albany, IN 47150<br></br>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 style={{ fontSize: '36px' }}>Contact Information</h1>
                    <div className="row">
                        <div className="col-md-6"><h2 style={{ fontSize: '22px' }}>St. Matthews</h2>Phone: 502-899-7778<br></br>
                            Fax: 502-897-5757</div>
                        <div className="col-md-6"><h2 style={{ fontSize: '22px' }}>New Albany</h2>Phone: 812-944-6063<br></br>
                            Fax: 502-897-5757</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact