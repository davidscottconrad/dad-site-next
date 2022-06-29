import Navigation from '../../components/navigation'
import Head from 'next/Head'

export default function EyeDiseases() {
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
                <h1 className="text-center" style={{ color: 'black' }}>Eye Diseases</h1>
                <h4 className='pb-3'>Conrad Eye Centers can provide you the best care and treatment in Louisville for chronic eye diseases such as glaucoma, macular degeneration, diabetic retinopathy, and many others.</h4>
                <div className='row'>
                    <div className='col-lg-6'>
                        <p className='pb-3'>Preserving your eyesight is our top priority at Conrad Eye Centers. Dr. Conrad was named a Scholar in Pathology at Duke University School of Medicine and having collaborated alongside some of the top minds in the world he is an expert in the treatment of eye disease. We use the latest in diagnostic and treatment technology including Optical Coherence Tomography (OCT), visual field exams, pachymetry, intraocular photography, and corneal topography.</p>
                    </div>
                    <div className='col-lg-6'>
                        <p className='pb-3'>Since Conrad Eye Centers is a single physician practice, you can rest assured you will never be bounced back and forth between doctors. All treatment is conducted by Dr. Conrad himself, and he will personally see you at every visit. Dr. Conrad feels that making sure the patient is completely satisfied and current on their condition is of paramount importance. At Conrad Eye Centers we educate you about your eye conditions so you may understand and participate in your eye care.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}