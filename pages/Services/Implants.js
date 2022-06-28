import Navigation from '../../components/navigation'
import Head from 'next/Head'

export default function Implants() {
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
                <h1 className="text-center pb-5" style={{ color: 'black' }}>Eye Implants</h1>
                <div className='row'>
                    <h2 className='text-center pb-2' id="infoSubTitle">Conrad Eye Centers uses the most advanced multi-focal lens implant technology in intraocular lens replacement for cataracts.</h2>
                    <p>As we age, the eye’s central focusing structure, the lens, becomes cloudy or hazy due to the natural breakdown of the crystalline structures that compose it. This condition is known as a cataract and causes blurry or hazy vision. Cataracts that impair the vision must be removed surgically. In this procedure, Dr. Conrad will replace the natural lens with an artificial lens implant which can be either monofocal or multifocal. Monofocal implants have been in widespread use since the 70’s and are safe and effective. However, monofocal implants allow good vision at only one distance; so glasses are needed to see well at other distances. Multifocal implants, on the other hand, can focus at both near and far, greatly reducing the need for glasses after cataract surgery. Dr. Conrad is a certified surgeon for the ReStor and Crystallens multifocal lenses. Most patients get better vision than they have ever experienced, and many do not need glasses. (See our testimonials for more information). Dr. Conrad will help you decide which option is best for you, and should you choose to invest in your eyesight with a multifocal lens, we can determine an easy payment plan for you at our office.</p>
                </div>
            </div>
        </div>
    )
}