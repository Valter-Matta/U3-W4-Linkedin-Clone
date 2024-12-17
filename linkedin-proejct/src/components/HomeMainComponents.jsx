import { Container, Row, Col } from 'react-bootstrap'
import HomeSideBar from './HomeSideBar'
import HomeCenterComponent from './HomeCenterComponents'

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
        <Col>{/* barra destra */}</Col>
      </Row>
    </Container>
  )
}

export default HomeMainComponent
