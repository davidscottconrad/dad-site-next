import Navigation from '../../components/navigation'
import Head from 'next/head'
import Link from 'next/link'

export default function ContactsAndGlasses() {
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
            <h1 className="text-center pb-5" style={{ color: 'black' }}>Vision Exams with an Optical Botique</h1>
                <div className='row mb-4'>
                    <h2 className='text-center' id="infoSubTitle">Conrad Eye Centers focuses on your vision with one-on-one personalized eye exams for any age.</h2>
                    <p>We know your sight is important. That is why Dr. Conrad personally examines every patient. Dr. Conrad is a trained and nationally recognized ophthalmologist; this means during even a routine eye exam everything about your eye is being examined by one of the best medical doctors in Louisville. Though optometrists are qualified to prescribe glasses and contacts and even treat some disorders of the eye, an ophthalmologist is a medical doctor who can prescribe contacts and glasses, diagnose and treat all conditions of the eye, prescribe medications, and perform surgery on the eye.</p>
                    <p>We accept most vision and eye care plans. Every full routine eye exam will leave you with a custom prescription for glasses and the assurance that you had the most in-depth exam possible.</p>
                    <p><Link href="/Resources/insurance" alt="insurance link" passHref><a>More information on Vision Insurance</a></Link></p>
                </div>
               
                <h4 className='pb-4'>Each of our locations has a full service optical boutique. Our optician has years of experience and will work one-on-one with you to find the perfect balance of style, quality, and affordability.</h4>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h2 className='text-center pb-2' id="infoSubTitle">Glasses</h2>
                        <p className='pb-3'>Conrad Eye Centers specializes in providing each patient with a wide array of choices for lenses and frames alike. We believe in custom building the perfect glasses for the individual, and we offer top-end name brand frames at affordable prices. When choosing the frames and lenses, it is important to consider your facial features, personal style, and day-to-day activities. Our skilled certified optician will work directly with you to choose the best combination.</p>
                    </div>
                    <div className='col-lg-6'>
                        <h2 className='text-center  pb-2' id="infoSubTitle">Contacts</h2>
                        <p className='pb-3'>Dr. Conrad fits all types of contact lenses, including soft, rigid, multi-focal and specialty contacts. We carry all major types including daily disposable lenses, rigid gas permeable lenses, and multifocal lenses. Our skilled certified optician will work directly with you to choose the contact lenses that are right for you.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}