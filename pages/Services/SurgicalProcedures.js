import Navigation from '../../components/navigation'
import Head from 'next/Head'

export default function SurgicalProcedures() {
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
                    <div className='col-lg-4'>
                        <h2 className='text-center' id="infoSubTitle">Cataract Surgery</h2>
                        <h4>Using the most advanced technology available, Conrad Eye Centers is your solution to cataracts.</h4>
                        <p>Did you know cataract surgery is one of the safest and most common procedures for people over the age of 50 in the United States? Cataracts are cloudy painless opacities in the crystalline lens of the eye. Most cataracts are caused by aging, although trauma, diabetes, certain drugs and smoking are known causes of cataracts. Should you develop cataracts, Dr. Conrad will personally discuss your options and track the progression of your cataracts. When it is time to have them removed, Dr. Conrad is a skilled and experienced cataract surgeon.</p>
                    </div>
                    <div className='col-lg-4'>
                        <h2 className='text-center' id="infoSubTitle">Chalazion/Stye Excision</h2>
                        <h4>Through quick and safe in-office procedures Conrad Eye Center is Louisville’s solution to painful or irritating styes and chalazions.</h4>
                        <p>A chalazion is a cyst in the eyelid (usually pointing inward toward the eye) that can be inflamed or cause no pain at all. Without treatment a chalazion can take months to heal itself, but a simple excision procedure performed under local anesthetic in our office can bring you relief in just a few days. Unlike a chalazion a stye is an infected mass usually around the edges of the eyelids. Styes can be very painful and if left untreated can lead to serious infection. A similar procedure is used to excise the infected area under local anesthesia.</p>
                    </div>
                    <div className='col-lg-4'>
                        <h2 className='text-center' id="infoSubTitle">Skin Tag Removal</h2>
                        <h4>Skin tags are usually a benign growth, but if they cosmetically bother you we can still remove them with a quick in-office procedure.</h4>
                        <p>A skin tag (acrochordon) is a benign growth of skin that usually occurs in the small folds or creases of skin, so it is perfectly natural to notice them growing on your eyelids. They will not go away on their own, but a very simple procedure using local anesthetic can remove them in just a few minutes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}