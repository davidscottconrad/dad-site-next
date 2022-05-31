import Image from 'next/image'
import cecLogo from '../public/logolol.jpg'

function Splash() {
    return <div>
        <div className='container-fluid' style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"25vh"}}>
          <div className='row'>
            <div className='col-md-12'>
            <Image src={cecLogo} layout="responsive"/>
            <h1>Conrad Eye Centers</h1>
            <h2>Tim Conrad, MD</h2>
            </div>
          </div>

        </div>
        <div style = {{height:"35vh"}}>

        </div>
    </div>
}

export default Splash