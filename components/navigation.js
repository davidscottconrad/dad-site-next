import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'react-bootstrap';

function Navigation() {


  return <div id="navContainer">
    <div className='container-fluid' >


      <Navbar className="ms-auto" expand="lg" variant="dark"  >
        <Container>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse inverse id="basic-navbar-nav" >
            <Nav >
              <Nav.Link href="#home" id="navBarText">Home</Nav.Link>
              <Nav.Link href="#services" id="navBarText">Services</Nav.Link>
              <Nav.Link href="#home" id="navBarText">About</Nav.Link>
              <Nav.Link href="#resources" id="navBarText">Resources</Nav.Link>
              <Nav.Link href="#contact" id="navBarText">Contact Information and Locations</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>


  </div>
}

export default Navigation


