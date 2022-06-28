import Navigation from '../../components/navigation'
import Head from 'next/Head'

export default function Pediactric() {
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
                <h1 className="text-center pb-2" style={{ color: 'black' }}>Pediatric Ophthalmology</h1>
                <div className='row'>
                    <h4 className='text-center' id="infoSubTitle">Dr. Conrad sees patients of all ages, and has had additional training in pediatric eye diseases.</h4>
                    <p>Going to the doctor in general can be a troubling experience to a child. Having raised 5 children, Dr. Conrad has a wonderful way with kids of all ages. We see children from six months and up.</p>
                </div>
            </div>
        </div>
    )
}