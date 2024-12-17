import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { GrLinkedin } from 'react-icons/gr'
import { FaHome } from 'react-icons/fa'
import { IoPeople } from 'react-icons/io5'
import { MdWork } from 'react-icons/md'
import { BsChatDotsFill } from 'react-icons/bs'
import { FaBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function MyNav() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='#home'>
          <GrLinkedin
            style={{ borderRadius: '15%', color: '#0A66C2' }}
            className='fs-1'
          />
        </Navbar.Brand>
        <input
          style={{ backgroundColor: '#EDF3F8' }}
          type='text'
          className='p-2 border border-none w-25'
          placeholder='Cerca'
          value=''
          readOnly
        />
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-5 mt-2 d-flex justify-content-around align-items-center'>
            <Link className='text-decoration-none nav-link' to='/Home'>
              <div className='d-flex flex-column align-items-center me-3 ms-5'>
                <FaHome className='fs-4' />
                <p>Home</p>
              </div>
            </Link>

            <Nav.Link>
              <div className='d-flex flex-column align-items-center me-3'>
                <IoPeople className='fs-4' />
                <p>Rete</p>
              </div>
            </Nav.Link>
            <Link to='/search' className='text-decoration-none nav-link'>
              <div className='d-flex flex-column align-items-center me-3'>
                <MdWork className='fs-4' />
                <p>Lavoro</p>
              </div>
            </Link>
            <Nav.Link>
              <div className='d-flex flex-column align-items-center me-3'>
                <BsChatDotsFill className='fs-4' />
                <p>Chat</p>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className='d-flex flex-column align-items-center me-3'>
                <FaBell className='fs-4' />
                <p>Notifiche</p>
              </div>
            </Nav.Link>
            <Link to={'/'} className='nav-link text-decoration-none'>
              <div className='d-flex flex-column align-items-center'>
                <p>Tu</p>
              </div>
            </Link>
            <div className='vertical-line'></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
