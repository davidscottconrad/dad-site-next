import Navigation from '../../components/navigation'
import Head from 'next/Head'

export default function Laser() {
    return (
        <div>
            <Head>
                <title>Conrad Eye Centers</title>
                <link rel="icon" type="image/svg+xml" href="../public/favicon.svg" />
                <link rel="icon" type="image/png" href="../public/favicon.png"></link>
                <meta name="Conrad Eye Centers Website" />
                <link rel="icon" href="/favicon.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href='https://fonts.googleapis.com/css2?family=Balthazar&display=swap' rel="stylesheet" />
                <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navigation></Navigation>
            <div className='container' id="infoContainer">
                <h1 className="text-center pb-5" style={{ color: 'black' }}>Surgical Procedures</h1>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h2 className='text-center pb-2' id="infoSubTitle">Laser Vision Correction</h2>
                        <h4 className='pb-3'>Dr. Conrad was one of the first surgeons in the Louisville area to perform FDA-approved laser vision correction and has been performing these procedures since 1997.</h4>
                        <p>LASIK procedures boast high patient satisfaction and in many cases underestimated affordability. When compared to contact lens use, many patients can actually save money over the long run with LASIK. According to an article published by WebMD in 2006, when the cost of office visits, fitting fees, and contact lenses is tabulated over the average length of time a person wears contacts (10-20 years) contact lens use can add up to between $9,000 and $15,000! That can make anyone feel like taking a second look at LASIK especially when we offer FREE LASIK SCREENING and payment packages as low as $65/month!</p>
                        <p className='pb-3'>LASIK is the most common refractive surgical procedure available; it is also one of the most progressive in technology upgrades. By partnering with the Suburban Excimer Laser Center, Conrad Eye Center is able to continually invest in the newest lasers on the market providing you with the most up-to-date technology for your LASIK procedure.</p>
                    </div>
                    <div className='col-lg-6'>
                        <h2 className='text-center  pb-2' id="infoSubTitle">Surface Ablation, or PRK (Photo-Refractive Keratectomy)</h2>
                        <h4 className='pb-3'>There are some patients in which Lasik is not the best choice for laser vision correction. For these patients, surface ablation or PRK is better.</h4>
                        <p className='pb-3'>PRK was developed prior to LASIK and was the foundation for the LASIK procedure. Unlike LASIK, PRK does not create a corneal flap. Instead an excimer laser is used directly on the outer surface of the cornea to reshape it. This can allow patients that may not be good candidates for LASIK due to thinner corneas or a handful of other reasons to still have a highly successful option in laser refractive procedures. Dr. Conrad is happy to discuss your options and help you decide which procedure is right for you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}