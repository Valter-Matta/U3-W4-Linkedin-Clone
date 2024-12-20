import { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { UMBERTO_KEY } from '../redux/actions'
import { Link, useNavigate } from 'react-router-dom'

const ProfileAside = () => {
  const [profiles, setProfiles] = useState([])
  const [showAll, setShowAll] = useState(false)

  const navigate = useNavigate()

  const PROFILES_URL = 'https://striveschool-api.herokuapp.com/api/profile/'

  const getProfiles = async () => {
    try {
      const response = await fetch(PROFILES_URL, {
        headers: {
          Authorization: 'Bearer ' + UMBERTO_KEY,
        },
      })
      if (response.ok) {
        const arrayOfProfiles = await response.json()
        const shuffledProfiles = arrayOfProfiles.sort(() => Math.random() - 0.5)
        setProfiles(shuffledProfiles)
      } else {
        throw new Error('Errore nella richiesta!')
      }
    } catch (error) {
      console.log('Errore:', error)
    }
  }

  useEffect(() => {
    getProfiles()
  }, [])

  return (
    <Container className="maxWidthLgScreen my-3">
      <Card>
        <Card.Body>
          <div>
            <Card.Title className="d-flex justify-content-between align-items-center mb-0">
              Lingua del profilo
              <Button variant="outline" className="fs-5">
                <i className="bi bi-pencil text-black"></i>
              </Button>
            </Card.Title>
            <Card.Text style={{ fontSize: '0.9rem', color: 'gray' }}>
              Italiano
            </Card.Text>
            <hr />
          </div>
          <div>
            <Card.Title className="d-flex justify-content-between align-items-center">
              Profilo pubblico e URL
              <Button variant="outline" className="fs-5">
                <i className="bi bi-pencil text-black"></i>
              </Button>
            </Card.Title>
            <Card.Text style={{ fontSize: '0.9rem', color: 'gray' }}>
              www.linkedin.com/in/user-38b3a5342
            </Card.Text>
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-3">
        <Card.Title className="p-3">
          <p className="mb-0 fw-semibold" style={{ fontSize: '1rem' }}>
            Persone che potresti conoscere
          </p>
          <p style={{ fontSize: '0.9rem', color: 'gray' }}>
            Dalla tua scuola o università
          </p>
        </Card.Title>
        {profiles &&
          profiles
            .slice(0, showAll ? Math.min(profiles.length, 15) : 6)
            .map((singleProfile, i) => (
              <Card.Body key={i}>
                <Container fluid>
                  <Row>
                    <Col xs={4}>
                      <Card.Img
                        src={
                          singleProfile.image ||
                          'https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png'
                        }
                        className="rounded-pill"
                      />
                    </Col>
                    <Col xs={8} className="px-0">
                      <Link
                        className="text-decoration-none text-black"
                        to={`/user/${singleProfile._id}`}
                      >
                        <h6
                          style={{ width: 'max-content' }}
                          className="overStyleProfileSuggestName"
                        >
                          {singleProfile.name}
                        </h6>
                      </Link>
                      <p
                        className="btn text-truncate p-0"
                        style={{ fontSize: '0.9rem', maxWidth: '100%' }}
                      >
                        {singleProfile.bio}
                      </p>
                      <div>
                        <Button
                          onClick={() => {
                            navigate(`/user/${singleProfile._id}`)
                          }}
                          variant="outline"
                          className="fw-semibold border border-1 border-black rounded-5"
                        >
                          <i className="bi bi-person-fill-add"></i> Collegati
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
                <hr />
              </Card.Body>
            ))}

        <Card.Footer className="text-center overMostrTutto">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="w-100 fw-semibold"
          >
            {showAll ? 'Mostra meno' : 'Mostra tutto'}
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  )
}

export default ProfileAside
