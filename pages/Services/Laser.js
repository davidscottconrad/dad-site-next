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
                <h1 className="text-center pb-5" style={{ color: 'black' }}>Laser Vision Correction</h1>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h2 className='text-center pb-2' id="infoSubTitle">LASIK</h2>
                       
                        <p className='pb-3'>LASIK is the most common refractive surgical procedure. Dr. Conrad was one of the first surgeons in the Louisville area to perform FDA-approved laser vision correction and has been performing these procedures since 1997.</p>
                    </div>
                    <div className='col-lg-6'>
                        <h2 className='text-center  pb-2' id="infoSubTitle">PRK</h2>

                        <p>There are some patients in which Lasik is not the best choice for laser vision correction. For these patients, surface ablation or PRK is better.</p>
                        <p className='pb-3'>PRK was developed prior to LASIK and was the foundation for the LASIK procedure. 
                         PRK can allow patients that may not be good candidates for LASIK due to 
                         very high glasses prescriptions or a handful of other reasons to still have a highly successful option in laser refractive 
                         procedures. Dr. Conrad is happy to discuss your options and help you decide which procedure is right for you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}