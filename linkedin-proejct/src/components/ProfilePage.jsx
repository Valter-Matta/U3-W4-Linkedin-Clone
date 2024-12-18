import { Col, Container, Row } from 'react-bootstrap'
import ProfileBoard from './ProfileBoard'
import '../assets/CssProfilePage.css'
import ProfileAnalitics from './ProfileAnalitics'
import ProfileActivities from './ProfileActivities'
import ProfileExperiences from './ProfileExperiences.jsx'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getmyProfile } from '../redux/actions/index.js'
import DropdownProfile from './DropdownProfile.jsx'

export const myKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYxMzdmMjc0YTg2ODAwMTVkYjU1MTAiLCJpYXQiOjE3MzQ0Mjc5NTIsImV4cCI6MTczNTYzNzU1Mn0.-Wq-ZqeJEtIFi8ja0gV6qQ6OPLtCvtQokH0TsvEc-3o'

const ProfilePage = () => {
  const key = useSelector((state) => state.profileKey.key)
  const users = useSelector((state) => state.profile.users)

  const dispatch = useDispatch()

  const getProfile = useCallback(async () => {
    dispatch(getmyProfile())
  }, [dispatch])

  useEffect(() => {
    getProfile()
  }, [key, getProfile, users.image])

  return (
    <Container>
      {key ? (
        <Row>
          <Col xs={12}>
            <ProfileBoard />
            <ProfileAnalitics />
            <ProfileActivities />
            <ProfileExperiences />
          </Col>
        </Row>
      ) : (
        <Row className=" justify-content-center p-3">
          <Col>
            <h1>Seleziona il profilo da visualizzare</h1>
            <DropdownProfile />
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default ProfilePage
