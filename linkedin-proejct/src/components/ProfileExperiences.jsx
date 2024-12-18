import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { FaPen, FaPlus } from 'react-icons/fa'
import { myKey } from './ProfilePage'
import { useDispatch, useSelector } from 'react-redux'
import ExperienceForm from './FormForExperience'
import { addExperienceAction } from '../redux/actions'

const ProfileExperiences = () => {
  const [showForm, setShowForm] = useState(false)

  const state = useSelector((reduxState) => reduxState)

  const dispatch = useDispatch()

  const listOfExperiences = `https://striveschool-api.herokuapp.com/api/profile/${state.profile.users._id}/experiences`
  const getExperiences = async () => {
    try {
      const call = await fetch(listOfExperiences, {
        headers: {
          Authorization: `Bearer ${myKey}`,
        },
      })
      if (call.ok) {
        const response = await call.json()
        console.log(response)
        dispatch(addExperienceAction(response))
      } else {
        console.log(`Error: ${call.status} - ${call.statusText}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getExperiences()
  }, [state.profile.users])

  const handleExperienceAdded = () => {
    getExperiences() // Ricarica le esperienze dal server
    setShowForm(false) // Chiude il form
  }

  return (
    <>
      {state.profile.experiences &&
        state.profile.experiences.map((exp) => (
          <div key={exp._id}>
            <Card className='pt-3 mt-2'>
              <div className='px-4 d-flex justify-content-between'>
                <div>
                  <h1 className='fs-4 m-0'>{exp.role}</h1>
                </div>
                <div className='d-flex'>
                  {/* Bottone per aggiungere una nuova esperienza */}
                  <div className='pen d-flex align-items-center me-3'>
                    <button
                      className='text-decoration-none pen border-0 bg-transparent'
                      onClick={() => setShowForm(true)} // Mostra il form
                    >
                      <FaPlus className='custom-hover' />
                    </button>
                  </div>
                  <div className='pen'>
                    <FaPen className='custom-hover' />
                  </div>
                </div>
              </div>
              <div className='d-flex px-4 pb-3'>
                <div>
                  <img src='https://placedog.net/50/50' alt='profile-pic' />
                </div>
                <div className='px-2 d-flex flex-column justify-content-between'>
                  <p className='fs-6 fw-medium text-primary  m-0'>
                    Presso {exp.company} , {exp.area}
                  </p>
                  <p className='fs-6 fw-lightpb-2 m-0'>{exp.description}</p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      {/* Form posizionato fuori dal map */}
      {showForm && (
        <ExperienceForm
          showForm={showForm}
          setShowForm={setShowForm}
          handleExperienceAdded={handleExperienceAdded}
        />
      )}
    </>
  )
}

export default ProfileExperiences
