import { Container, Row, Col } from 'react-bootstrap'
import HomeSideBar from './HomeSideBar'
import HomeCenterComponent from './HomeCenterComponents'
import HomeRightTop from '../components/HomeRightTop'
import HomeRightBottom from '../components/HomeRightBottom'

const HomeMainComponent = () => {
  return (
    <Row>
      <Col md={5} lg={3}>
        <HomeSideBar />
      </Col>
      <Col md={7} lg={6}>
        <HomeCenterComponent />
      </Col>
      <Col lg={3} className="d-none d-xl-block">
        <HomeRightTop />
        <HomeRightBottom />
      </Col>
    </Row>
  )
}

export default HomeMainComponent
