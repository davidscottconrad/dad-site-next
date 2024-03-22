import Head from 'next/head'
import Services from '../components/services'
import About from '../components/about'
import Navigation from '../components/navigation'
import Splash from '../components/splash'
import Resources from '../components/resources'
import Contact from '../components/contact'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

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

      <div className="header-container">
        <Navigation></Navigation>
        <Splash></Splash>
        <div>
        <h1
                className="text-center"
                style={{ paddingTop: "5vh", fontWeight: "bold" }}
              >
                Ophthalmology
              </h1>
              <h1 className="text-center" style={{ fontWeight: "bold" }}>
                Eye Diseases and Surgery
              </h1>
              <h1 className="text-center" style={{ fontWeight: "bold" }}>
                Glaucoma
              </h1>
              <br />
              <h1 className="text-center" style={{ fontWeight: "bold" }}>
                Tim Conrad, MD
              </h1>
              <h1 className="text-center" style={{ fontWeight: "bold" }}>
                Laurie Willbanks, MD
              </h1>
        </div>
      </div>
      <Services></Services>
      <About ></About>
      <Resources></Resources>
      <Contact></Contact>

    </div>
  )
}
 // style={{position:"absolute", top:"35vh"}}