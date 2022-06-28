
import cecLogo from '../public/logocolor2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faArrowDown} size='sm' />

function Splash() {
  return <div>

    <div className='container-fluid' id="splash" >
      <div className='row'>
        <div className='col-md-12'>
          <div id="cecImage">
            <img src={cecLogo} layout="responsive" alt="Conrad Eye Centers Logo" />
          </div>
          <h1 className='text-center' style={{ paddingTop: "5vh", fontWeight: "bold" }} >Ophthalmology</h1>
          <h1 className='text-center' style={{ fontWeight: "bold" }} >Eye Diseases and Surgery</h1>
          <h1 className='text-center' style={{ fontWeight: "bold" }}>Tim Conrad, MD</h1>
        </div>
      </div>
    </div>
    <div className='container-fluid'>
      <div id="arrow">{element}</div>
    </div>
    <div id="buffer">
    </div>
  </div>
}

export default Splash