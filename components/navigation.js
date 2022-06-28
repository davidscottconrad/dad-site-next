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
          <Navbar.Collapse inverse id="basic-navbar-nav" value="Conrad Eye Centers" >
            <Nav className="m-auto">
              <Nav.Link href="/#services" id="navBarText">Services</Nav.Link>
              <Nav.Link href="/#about" id="navBarText">About</Nav.Link>
              <Nav.Link href="/#resources" id="navBarText">Resources</Nav.Link>
              <Nav.Link href="/#contact" id="navBarText">Contact Information and Locations</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link href="/">
            <Navbar.Brand>Conrad Eye Centers</Navbar.Brand>
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  </div>
}

export default Navigation


