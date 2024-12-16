import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { GrLinkedin } from 'react-icons/gr'
import { IoSearch } from 'react-icons/io5'
import { FaHome } from 'react-icons/fa'
import { IoPeople } from 'react-icons/io5'
import { MdWork } from 'react-icons/md'
import { BsChatDotsFill } from 'react-icons/bs'
import { FaBell } from 'react-icons/fa'

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <GrLinkedin
            style={{ borderRadius: '15%', color: '#0A66C2' }}
            className="fs-1"
          />
        </Navbar.Brand>
        <input
          style={{ backgroundColor: '#EDF3F8' }}
          type="text"
          className="p-2 border border-none w-25"
          placeholder="Cerca"
          value=""
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-5 mt-2">
            <Nav.Link>
              <div className="d-flex flex-column align-items-center me-3 ms-5">
                <FaHome className="fs-4" />
                <p>Home</p>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="d-flex flex-column align-items-center me-3">
                <IoPeople className="fs-4" />
                <p>Rete</p>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="d-flex flex-column align-items-center me-3">
                <MdWork className="fs-4" />
                <p>Lavoro</p>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="d-flex flex-column align-items-center me-3">
                <BsChatDotsFill className="fs-4" />
                <p>Chat</p>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="d-flex flex-column align-items-center me-3">
                <FaBell className="fs-4" />
                <p>Notifiche</p>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="d-flex flex-column align-items-center">
                <p>Tu</p>
              </div>
            </Nav.Link>
            <div className="vertical-line"></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
