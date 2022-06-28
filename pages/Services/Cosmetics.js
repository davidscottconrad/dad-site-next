import Navigation from '../../components/navigation'
import Head from 'next/Head'

export default function Cosmetics() {
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
                <h1 className="text-center">Cosmetics</h1>
                <div className='row p-3'>
                    <div className='col-md-6'>
                        <h2 className='text-center' id="infoSubTitle">Botox</h2>
                        <h4 className='text-center pb-3'>Make those wrinkles disappear with a quick visit to Conrad Eye Centers. We safely administer effective Botox cosmetic and medical injections at competitive rates.</h4>
                        <p>Botox is used in very minute quantities for multiple purposes. Medically, Botox is can be used to treat slight muscle spasms including those in the eyes and eyelids; however, most people know Botox for it’s cosmetic use. Botox can be used to effectively reduce the wrinkles and tension lines on the face. It can also be used to relieve intense underarm sweating. Dr. Conrad has years of experience in proper administration of Botox and would love to help you relieve your muscle spasms or take a few years off your look. Whatever your need we can be your one-stop Botox treatment.</p>
                        <p></p>
                        <p></p>
                    </div>
                    <div className='col-md-6'>
                        <h2 className='text-center' id="infoSubTitle">Latisse</h2>
                        <h4 className='text-center  pb-3'>Do not pay more for the cosmetic eyelash drug sweeping the nation when we have it for less!</h4>
                        <p>After releasing Latisse in 2008, this once daily treatment for eyelash growth quickly swept the nation. Using a small brush to administer the product, you can expect full, dark, lush lashes in just 6 to 12 weeks. We have seen a wonderful result and outstanding patient satisfaction with this product and enjoy offering it to our patients for what we believe is the cheapest price in Louisville. Since Latisse is a prescription drug Dr. Conrad needs to conduct a full eye exam before beginning Latisse, so call today to schedule your appointment!</p>
                    </div>
                </div>
            </div>

        </div>
    )
}