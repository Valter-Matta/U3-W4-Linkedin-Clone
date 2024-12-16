import { Container, Row, Col } from 'react-bootstrap'
import HomeSideBar from './HomeSideBar'

const HomeMain = () => {
  return (
    <Container>
      <Row>
        <Col lg={3}>
          <HomeSideBar />
        </Col>
        <Col lg={7}>{/* contenuto centrale */}</Col>
        <Col>{/* barra destra */}</Col>
      </Row>
    </Container>
  )
}

export default HomeMain
