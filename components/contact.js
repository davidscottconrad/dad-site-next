function Contact() {
    return (
        <div className="container-fluid p-4" id="contact">
            <div className="row">
                <div className="col-md-6 mb-6">
                    <h1 style={{ borderBottom: '1px solid black' }}>Locations</h1>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <h2 >St. Matthews</h2>
                            <p>
                                204 Breckenridge Lane <br></br> Louisville, KY 40207<br></br>
                            </p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <h2 >New Albany</h2>
                            <p>
                                Professional Arts Building<br></br>
                                1919 State Street Suite 201<br></br>
                                New Albany, IN 47150<br></br>
                            </p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <h2>Laurie Wilbanks Springs Location</h2>
                            <p>
                                6420 Dutchsman Pkwy, Suite 85<br></br>
                                Louisville, KY 40205<br></br>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 style={{ borderBottom: '1px solid black' }}>Contact Information</h1>
                    <div className="row">
                        <div className="col-md-6 mb-4"><h2 >St. Matthews</h2>Phone: 502-899-7778<br></br>
                            Fax: 502-897-5757</div>
                        <div className="col-md-6 mb-4"><h2 >New Albany</h2>Phone: 812-944-6063<br></br>
                            Fax: 502-897-5757</div>
                            <div className="col-md-6 mb-4"><h2 >New Albany</h2>Phone: 812-944-6063<br></br>
                            Fax: 502-897-5757</div>

                        </div>
                        <div className="col-md-12 mb-4" id=""><h2 >Email</h2>reception@conradeyecenter.com<br></br>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact