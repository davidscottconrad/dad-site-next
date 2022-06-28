import Navigation from '../../components/navigation'
import Head from 'next/head'

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
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href='https://fonts.googleapis.com/css2?family=Balthazar&display=swap' rel="stylesheet" />
                <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navigation></Navigation>
            <div className='container' id="infoContainer">
                <h1 className="text-center pb-1" style={{ color: 'black' }}>Glasses and Contacts</h1>
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