import { useEffect, useState } from 'react'
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  InputGroup,
  Card,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SearchJobs = () => {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])

  const SEARCH_URL = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

  const getData = async () => {
    try {
      if (query !== '') {
        const response = await fetch(SEARCH_URL + query + '&limit=20')

        if (response.ok) {
          const searchResults = await response.json()
          setData(searchResults.data)
          console.log('Risultati', searchResults)
        } else {
          throw new Error('Errore nella richiesta!')
        }
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getData()
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  if (data.length > 0) {
    console.log('dati salvati nello state: ', data)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])
  return (
    <>
      <Container className=' my-3'>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <InputGroup className='mb-3 w-50 mx-auto'>
                <Form.Control
                  type='search'
                  placeholder='Cerca'
                  aria-label='Cerca'
                  aria-describedby='basic-addon2'
                  value={query}
                  onChange={handleChange}
                />
                <Button variant='outline-primary'>Cerca</Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      {data?.length === 0 && (
        <Container>
          <Row>
            <Col xs={12}>La tua ricerca non ha prodotto risultati</Col>
          </Row>
        </Container>
      )}
      <Container>
        <Row className=' justify-content-center'>
          {data?.length !== 0 &&
            data?.map((job) => {
              return (
                <Col xs={12} key={job._id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        <Link
                          to={'/jobDetail/' + job.company_name}
                          className=' nav-link text-decoration-none'
                        >
                          {job.title}
                        </Link>
                      </Card.Title>
                      <Card.Text>
                        {job.category} - {job.company_name}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
        </Row>
      </Container>
    </>
  )
}

export default SearchJobs
