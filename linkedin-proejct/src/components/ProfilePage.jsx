import { Col, Container, Row } from 'react-bootstrap'
import ProfileBoard from './ProfileBoard'
import '../assets/CssProfilePage.css'
import ProfileAnalitics from './ProfileAnalitics'
import ProfileActivities from './ProfileActivities'
import ProfileExperiences from './ProfileExperiences.jsx'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getmyProfile } from '../redux/actions/index.js'

const myProfile = 'https://striveschool-api.herokuapp.com/api/profile/me'
export const myKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYxMzdmMjc0YTg2ODAwMTVkYjU1MTAiLCJpYXQiOjE3MzQ0Mjc5NTIsImV4cCI6MTczNTYzNzU1Mn0.-Wq-ZqeJEtIFi8ja0gV6qQ6OPLtCvtQokH0TsvEc-3o'

const ProfilePage = () => {
  const key = useSelector((state) => state.profileKey.key)
  const dispatch = useDispatch()

  console.log('la mia key', key)
  const getProfile = async () => {
    try {
      const call = await fetch(myProfile, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      })
      if (call.ok) {
        const response = await call.json()
        dispatch(getmyProfile(response))
      } else {
        console.log(`Error: ${call.status} - ${call.statusText}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProfile()
  }, [key])

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <ProfileBoard />
          <ProfileAnalitics />
          <ProfileActivities />
          <ProfileExperiences />
        </Col>
      </Row>
    </Container>
  )
}

export default ProfilePage
