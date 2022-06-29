import Navigation from '../../components/navigation'
import Head from 'next/Head'
import Link from 'next/link'
//import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

export default function Privacy() {
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
                <h1 className="text-center pb-5" style={{ color: 'black' }}>Notice of Privacy Practices</h1>
                <div className='row'>
                    <h2 className='text-center pb-2' id="infoSubTitle">At Conrad Eye Centers we take your privacy seriously.</h2>
                    <p>We have established policies and procedures to keep your information safe. Visit the link below to learn how we collect, use and protect patient information. If you have any questions or concerns, do not hesitate to contact us.</p>
                    <Link href="/Conrad-Eye-Centers-HIPAA-Notice.pdf" download>Hippa Notice</Link>
                </div>
            </div>
        </div>
    )
}