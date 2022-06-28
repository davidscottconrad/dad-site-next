import Navigation from '../../components/navigation'
import Head from 'next/head'

export default function EyeInjuries() {
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
                <h1 className="text-center pb-3" style={{ color: 'black' }}>Eye Injuries and Infections</h1>
                <div className='row'>
                    <h2 className='text-center pb-2' id="infoSubTitle">Is your eye red, irritated, scratchy, watery, or painful? Dr. Conrad has your convenient, quick, and knowledgeable answer.</h2>
                    <p>When your eyes are itching, watering, red, irritated, or any combination of symptoms, it is important you receive diagnosis and care in a timely manner from a trained ophthalmologist. Dr. Conrad is more than happy to treat whatever infection or injury you may have. Many chronic infections or injuries can lead to more complicated problems if left unchecked. At Conrad Eye Centers we can get you in our office quickly at a time that is convenient for you. For every injury or infection to the eye Conrad Eye Centers should be your first step in proper diagnosis and treatment.</p>
                </div>
            </div>
        </div>
    )
}