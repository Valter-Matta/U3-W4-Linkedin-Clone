import { useEffect, useState } from 'react'
import { Col, Container, Row, Form, Button, InputGroup } from 'react-bootstrap'

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
              <Button
                variant='outline-primary'
                onClick={() => {
                  window.location.reload()
                }}
              >
                Nuova Ricerca
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchJobs
