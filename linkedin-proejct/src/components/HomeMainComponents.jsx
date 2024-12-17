import { Container, Row, Col } from 'react-bootstrap'
import HomeSideBar from './HomeSideBar'
import HomeCenterComponent from './HomeCenterComponents'
import HomeRightTop from '../components/HomeRightTop'
import HomeRightBottom from '../components/HomeRightBottom'

const HomeMainComponent = () => {
  return (
    <Container>
      <Row>
        <Col lg={3}>
          <HomeSideBar />
        </Col>
        <Col lg={7}>
          <HomeCenterComponent />
        </Col>
        <Col lg={2}>
		<HomeRightTop />
		<HomeRightBottom />
		</Col>
      </Row>
    </Container>
  )
}

export default HomeMainComponent
