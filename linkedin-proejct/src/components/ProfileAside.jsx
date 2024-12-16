import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const ProfileAside = () => {
  return (
    <Container className='maxWidthLgScreen'>
      <Row>
        <Col xs={12} md={7}>
          <Card>
            <Card.Img variant='top' src='https://placedog.net/500/500' />
          </Card>
        </Col>
        <Col xs={12} md={5}>
          <Card>
            <Card.Body>
              <div>
                <Card.Title className=' d-flex justify-content-between align-items-center'>
                  Lingua del profilo
                  <Button variant='outline' className=' fs-5'>
                    <i className='bi bi-pencil text-black'></i>
                  </Button>
                </Card.Title>
                <Card.Text>Italiano</Card.Text>
                <hr />
              </div>
              <div>
                <Card.Title className=' d-flex justify-content-between align-items-center'>
                  Profilo pubblico e URL
                  <Button variant='outline' className=' fs-5'>
                    <i className='bi bi-pencil text-black'></i>
                  </Button>
                </Card.Title>
                <Card.Text>
                  www.linkedin.com/in/umberto-tramontano-38b3a5342
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ProfileAside
