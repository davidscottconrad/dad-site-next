import Navigation from '../../components/navigation'
import Head from 'next/Head'
export default function VisionExams() {
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
                <h1 className="text-center pb-5" style={{ color: 'black' }}>Vision</h1>
                <div className='row'>
                    <h2 className='text-center' id="infoSubTitle">Conrad Eye Centers focuses on your vision with one-on-one personalized eye exams for any age.</h2>
                    <p>We know your sight is important. That is why Dr. Conrad personally examines every patient. Dr. Conrad is a trained and nationally recognized ophthalmologist; this means during even a routine eye exam everything about your eye is being examined by one of the best medical doctors in Louisville. Though optometrists are qualified to prescribe glasses and contacts and even treat some disorders of the eye, an ophthalmologist is a medical doctor who can prescribe contacts and glasses, diagnose and treat all conditions of the eye, prescribe medications, and perform surgery on the eye.</p>
                    <p>We accept most vision and eye care plans. Every full routine eye exam will leave you with a custom prescription for glasses and the assurance that you had the most in-depth exam possible.</p>
                    <p><a href="/insurance">More information on Vision Insurance</a></p>
                </div></div>
        </div>
    )
}