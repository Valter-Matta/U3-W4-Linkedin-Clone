import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const ProfileAside = () => {
  return (
    <Container className='maxWidthLgScreen my-3'>
      <Row>
        <Col xs={12} md={5}>
          <Card>
            <Card.Body>
              <div>
                <Card.Title className=' d-flex justify-content-between align-items-center mb-0'>
                  Lingua del profilo
                  <Button variant='outline' className=' fs-5'>
                    <i className='bi bi-pencil text-black'></i>
                  </Button>
                </Card.Title>
                <Card.Text style={{ fontSize: '0.9rem', color: 'gray' }}>
                  Italiano
                </Card.Text>
                <hr />
              </div>
              <div>
                <Card.Title className=' d-flex justify-content-between align-items-center'>
                  Profilo pubblico e URL
                  <Button variant='outline' className=' fs-5'>
                    <i className='bi bi-pencil text-black'></i>
                  </Button>
                </Card.Title>
                <Card.Text style={{ fontSize: '0.9rem', color: 'gray' }}>
                  www.linkedin.com/in/umberto-tramontano-38b3a5342
                </Card.Text>
              </div>
            </Card.Body>
          </Card>

          <Card className=' mt-3'>
            <Card.Title className='p-3'>
              <p className=' mb-0 fw-semibold' style={{ fontSize: '1rem' }}>
                Persone che potresti conoscere
              </p>
              <p style={{ fontSize: '0.9rem', color: 'gray' }}>
                Dalla tua scuola o università
              </p>
            </Card.Title>
            <Card.Body>
              <Container fluid>
                <Row>
                  <Col xs={4}>
                    <Card.Img
                      src='https://placedog.net/100/100'
                      className=' rounded-pill'
                    />
                  </Col>
                  <Col xs={8} className=' px-0'>
                    <h6
                      style={{ width: 'max-content' }}
                      className='overStyleProfileSuggestName'
                    >
                      Topo Gigio
                    </h6>
                    <p
                      className='btn text-truncate p-0'
                      style={{ fontSize: '0.9rem', maxWidth: '100%' }}
                    >
                      Graduating at University of Qualche parte | NonSoDove |
                      InQualcosa
                    </p>
                    <Button
                      variant='outline'
                      className=' fw-semibold border border-1 border-black rounded-5'
                    >
                      <i className='bi bi-person-fill-add'></i> Collegati
                    </Button>
                  </Col>
                </Row>
              </Container>
              <hr />
            </Card.Body>
            <Card.Body>
              <Container fluid>
                <Row>
                  <Col xs={4}>
                    <Card.Img
                      src='https://placedog.net/100/100'
                      className=' rounded-pill'
                    />
                  </Col>
                  <Col xs={8} className=' px-0'>
                    <h6
                      style={{ width: 'max-content' }}
                      className='overStyleProfileSuggestName'
                    >
                      Topo Gigio
                    </h6>
                    <p
                      className='btn text-truncate p-0'
                      style={{ fontSize: '0.9rem', maxWidth: '100%' }}
                    >
                      Graduating at University of Qualche parte | NonSoDove |
                      InQualcosa
                    </p>
                    <Button
                      variant='outline'
                      className=' fw-semibold border border-1 border-black rounded-5'
                    >
                      <i className='bi bi-person-fill-add'></i> Collegati
                    </Button>
                  </Col>
                </Row>
              </Container>
              <hr />
            </Card.Body>
            <Card.Body>
              <Container fluid>
                <Row>
                  <Col xs={4}>
                    <Card.Img
                      src='https://placedog.net/100/100'
                      className=' rounded-pill'
                    />
                  </Col>
                  <Col xs={8} className=' px-0'>
                    <h6
                      style={{ width: 'max-content' }}
                      className='overStyleProfileSuggestName'
                    >
                      Topo Gigio
                    </h6>
                    <p
                      className='btn text-truncate p-0'
                      style={{ fontSize: '0.9rem', maxWidth: '100%' }}
                    >
                      Graduating at University of Qualche parte | NonSoDove |
                      InQualcosa
                    </p>
                    <Button
                      variant='outline'
                      className=' fw-semibold border border-1 border-black rounded-5'
                    >
                      <i className='bi bi-person-fill-add'></i> Collegati
                    </Button>
                  </Col>
                </Row>
              </Container>
              <hr />
            </Card.Body>
            <Card.Body>
              <Container fluid>
                <Row>
                  <Col xs={4}>
                    <Card.Img
                      src='https://placedog.net/100/100'
                      className=' rounded-pill'
                    />
                  </Col>
                  <Col xs={8} className=' px-0'>
                    <h6
                      style={{ width: 'max-content' }}
                      className='overStyleProfileSuggestName'
                    >
                      Topo Gigio
                    </h6>
                    <p
                      className='btn text-truncate p-0'
                      style={{ fontSize: '0.9rem', maxWidth: '100%' }}
                    >
                      Graduating at University of Qulache parte | NonSoDove |
                      InQualcosa
                    </p>
                    <Button
                      variant='outline'
                      className=' fw-semibold border border-1 border-black rounded-5'
                    >
                      <i className='bi bi-person-fill-add'></i> Collegati
                    </Button>
                  </Col>
                </Row>
              </Container>
              <hr />
            </Card.Body>
            <Card.Body>
              <Container fluid>
                <Row>
                  <Col xs={4}>
                    <Card.Img
                      src='https://placedog.net/100/100'
                      className=' rounded-pill'
                    />
                  </Col>
                  <Col xs={8} className=' px-0'>
                    <h6
                      style={{ width: 'max-content' }}
                      className='overStyleProfileSuggestName'
                    >
                      Topo Gigio
                    </h6>
                    <p
                      className='btn text-truncate p-0'
                      style={{ fontSize: '0.9rem', maxWidth: '100%' }}
                    >
                      Graduating at University of Qulache parte | NonSoDove |
                      InQualcosa
                    </p>
                    <Button
                      variant='outline'
                      className=' fw-semibold border border-1 border-black rounded-5'
                    >
                      <i className='bi bi-person-fill-add'></i> Collegati
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Card.Body>

            <Card.Footer className='text-center overMostrTutto'>
              <Button variant='outline' className='w-100 fw-semibold'>
                Mostra tutto
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ProfileAside
