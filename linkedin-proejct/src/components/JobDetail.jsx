import { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const JobDetail = () => {
  const [job, setJob] = useState([])
  const params = useParams()
  console.log('params', params)

  const SEARCH_URL = 'https://strive-benchmark.herokuapp.com/api/jobs?company='
  const getJob = async () => {
    try {
      const response = await fetch(SEARCH_URL + params.company)
      if (response.ok) {
        const result = await response.json()
        console.log('selected job: ', result)
        setJob(result.data)
      } else {
        throw new Error('Errore nella richiesta!')
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    getJob()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (job) {
    console.log('found job: ', job)
  }
  return (
    <Container>
      <Row className='p-3'>
        {job?.length === 0 ? (
          <Col>
            <Card>
              <Card.Title className=' text-center p-3'>
                404 - PAGE NOT FOUND
              </Card.Title>
            </Card>
          </Col>
        ) : (
          job?.map((j, i) => {
            return (
              <Col key={i}>
                <Card>
                  <Card.Title className=' text-center p-3'>
                    {j?.company_name}
                  </Card.Title>
                  <Card.Body>
                    <div>
                      <p>{j?.candidate_required_location}</p>
                      <p>
                        Published on:{' '}
                        <span>{j?.publication_date.slice(0, 10)}</span>
                      </p>
                    </div>
                    <Button
                      onClick={() => window.open(j?.url, '_blank')}
                      variant='outline-success'
                    >
                      {j?.title}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        )}
      </Row>
    </Container>
  )
}

export default JobDetail
