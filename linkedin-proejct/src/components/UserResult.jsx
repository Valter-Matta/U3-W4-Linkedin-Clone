import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUserById } from '../redux/actions'

const UserResult = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await dispatch(getUserById(id))
      setUserData(data)
    }
    fetchData()
  }, [id, dispatch])

  if (!userData) {
    return <p>Caricamento...</p>
  }

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Card className="mt-3">
            <Card.Img
              variant="top"
              style={{ height: '200px', objectFit: 'cover' }}
              src={userData.coverImage || 'https://placekitten.com/800/200'}
            />
            <Card.Body>
              <div className="text-center">
                <img
                  src={userData.image || 'https://placekitten.com/200/200'}
                  alt="User Avatar"
                  className="rounded-circle border border-5"
                  width="150"
                  height="150"
                />
                <h3 className="mt-3">{`${userData.name} ${userData.surname}`}</h3>
                <p>{userData.title}</p>
                <p>{userData.bio}</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h4 className="mt-4">Esperienze</h4>
          {userData.experiences && userData.experiences.length > 0 ? (
            userData.experiences.map((exp) => (
              <Card key={exp._id} className="mb-3">
                <Card.Body>
                  <h5>{exp.role}</h5>
                  <p>
                    {exp.company} - {exp.area}
                  </p>
                  <p>{exp.description}</p>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>Nessuna esperienza disponibile</p>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default UserResult
