import { Dropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const DropdownProfile = () => {
  const GIOVANNI_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyODlkZjUzMDRhNzAwMTUxNDhiOGIiLCJpYXQiOjE3MzQ1MTEwNzEsImV4cCI6MTczNTcyMDY3MX0.S-scGwXZXXg4U57pJPE0WSZKMC86LU0OXZ1Wj_lSUFU'

  const MASSIMO_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYxNGIwOTc0YTg2ODAwMTVkYjU1MjciLCJpYXQiOjE3MzQ0Mjk0NDksImV4cCI6MTczNTYzOTA0OX0.mE5mKRYlk-WIPHgNEPOuGdut9pE2Lh53UeLEQHrDUTI'

  const VALTER_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYxMzdmMjc0YTg2ODAwMTVkYjU1MTAiLCJpYXQiOjE3MzQ0Mjc5NTIsImV4cCI6MTczNTYzNzU1Mn0.-Wq-ZqeJEtIFi8ja0gV6qQ6OPLtCvtQokH0TsvEc-3o'

  const UMBERTO_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYxMzcxODc0YTg2ODAwMTVkYjU1MDkiLCJpYXQiOjE3MzQ1MTYzNjIsImV4cCI6MTczNTcyNTk2Mn0.BydwX35wzYeXzOR-MXjzJlVtR4c1yd2ZbxJEAPNN9IU'

  const dispatch = useDispatch()
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant='outline'
        className='avatar-style border border-0'
      >
        <img
          width={50}
          src={'https://placedog.net/100/100'}
          alt='avatar'
          className=' rounded-pill'
        />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div
          className=' btn btn-outline-dark border border-0 w-100 p-3'
          onClick={() => {
            dispatch({
              type: 'SET_KEY',
              payload: GIOVANNI_KEY,
            })
          }}
        >
          Giovanni
        </div>
        <div
          className=' btn btn-outline-dark border border-0 w-100 p-3'
          onClick={() => {
            dispatch({
              type: 'SET_KEY',
              payload: MASSIMO_KEY,
            })
          }}
        >
          Massimo
        </div>
        <div
          className=' btn btn-outline-dark border border-0 w-100 p-3'
          onClick={() => {
            dispatch({
              type: 'SET_KEY',
              payload: UMBERTO_KEY,
            })
          }}
        >
          Umberto
        </div>
        <div
          className=' btn btn-outline-dark border border-0 w-100 p-3'
          onClick={() => {
            dispatch({
              type: 'SET_KEY',
              payload: VALTER_KEY,
            })
          }}
        >
          Valter
        </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownProfile
