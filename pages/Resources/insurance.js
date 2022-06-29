import Navigation from '../../components/navigation'
import Head from 'next/Head'
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
                <h1 className="text-center mb-4" style={{ color: 'black' }}>Insurance Information</h1>
                <h4 className="text-center mb-2">Popular Accepted Insurance Plans</h4>
                <div className='row'><p>Conrad Eye Centers accepts a wide variety of medical and vision insurance plans.
                    It is our mission to provide comprehensive personalized eye care to those who seek it, so we accept the majority of all vision and medical insurance plans. If you do not see your specific carrier please do not hesitate to call and one of our friendly staff will be happy to check on your coverage for you.</p></div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <h5>Medical Insurance Plans</h5>
                        <ul>
                            <li>Medicaid</li>
                            <li>Medicare</li>
                            <li>Aetna</li>
                            <li>Anthem</li>
                            <li>Bankers Life and Casualty</li>
                            <li>Benefit Planners</li>
                            <li>Central States</li>
                            <li>Cigna</li>
                            <li>Geha</li>
                            <li>Great West</li>
                            <li>Guardian</li>
                            <li>Humana</li>
                            <li>Managed Health Services</li>
                            <li>Molina Healthcare</li>
                            <li>Passport</li>
                            <li>Preferred Health Plan</li>
                            <li>Principal</li>
                            <li>Tricare</li>
                            <li>United Health Care</li>
                        </ul>
                    </div>
                    <div className='col-sm-6'>
                        <h5>Vision Insurance Plans</h5>
                        <ul>
                            <li> Avesis</li>
                            <li>Davis Vision</li>
                            <li>Eyemed</li>
                            <li>National Vision Administrators (NVA) (Heritage)</li>
                            <li>Opticare</li>
                            <li>Optum Vision</li>
                            <li>Spectera</li>
                            <li>Superior Vision Service (SVS)</li>
                            <li>Versant Health</li>
                            <li>Vision Care Plan (VCP)</li>
                            <li>Vision Service Plan (VSP)</li>
                            <li>United Health Care Vision</li>

                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <h2>Differences Between Vision Exam and Medical Exam</h2>
                    <p>At Conrad Eye Centers the health of your eyes is our top priority, and since Dr. Conrad is an ophthalmologist we are able to use your medical insurance to perform in-depth and very detailed examinations of your eyes. However, it is important to know the difference between a medical eye exam and a “routine” vision exam as most insurance plans provide for medical, vision, or both, but almost never within the same appointment.</p>
                    <h5>Medical Eye Exam</h5>
                    <p>A medical eye exam focuses on the health of your eye with emphasis on determining if any eye diseases are present or if any systemic diseases such as diabetes are affecting the eyes. Anytime there is a concern about an infection, injury, disease, or physician consultation involved a medical eye exam will be performed and thus your medical insurance will be utilized. Medical exams usually include dilation so Dr. Conrad can get a detailed look at the sensitive nerves of the retina. Other tests may be performed and/or scheduled during a medical exam as determined by Dr. Conrad.
                    </p>
                    <h5>Routine/Vision Exam</h5>
                    <p>A “routine/vision” exam focuses on the refractive state and general health of the eye. This means Dr. Conrad will check your eyes for refractive errors such as myopia (nearsightedness), hyperopia (farsightedness), presbyopia (inability to see things up close as you age), and astigmatism (poor vision due to corneal shape). A routine exam is centered around getting you set up with the perfect glasses or contact lens prescription to give you the best vision possible.</p>
                    <h5>Why Should You Care?</h5>
                    <p>Many patients have both medical and vision insurance. We are required to use the most appropriate insurance for each specific visit. We value both your eye health and visual comfort, so if you do have medical and vision insurance plans we are happy to conduct both exams on separate days to make maximum use of your benefits. We understand how confusing insurance plans and benefits can be, and that is why we have expertly trained staff ready to answer any questions you may have and schedule your next appointment to get the most for your specific plan.
                    </p>
                </div>
            </div>
        </div>
    )
}