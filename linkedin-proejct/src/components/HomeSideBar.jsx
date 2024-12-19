import { MdPersonAddAlt1 } from 'react-icons/md'
import { FaBookmark } from 'react-icons/fa6'
import HomeBottomSidebar from './HomeBottomSideBar'
import { useSelector } from 'react-redux'
import { FaMapMarkerAlt } from 'react-icons/fa'

const HomeSideBar = () => {
  const state = useSelector((reduxState) => reduxState.profile.users)

  return (
    <>
      <div className="sidebar2 mt-5">
        <div
          style={{
            borderRadius: '20px 20px 0 0',
            backgroundImage: `url(${
              state.profile
                ? `${state.profile}?${new Date().getTime()}`
                : state.image
            })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="d-flex justify-content-center"
        >
          <img
            style={{ borderRadius: '50%', width: '60px', height: '60px' }}
            src={
              state.profile
                ? `${state.profile}?${new Date().getTime()}`
                : state.image
            }
            className="picture-sidebar border border-white border-3"
            alt="profile"
          />
        </div>
        <div className="mt-5 text-center">
          <h4>
            {state.name} {state.surname}
          </h4>
          <p>Username: {state.username}</p>
          <p>Professione: {state.title}</p>
          <p>E-mail: {state.email}</p>
          <div className="d-flex justify-content-center ">
            <FaMapMarkerAlt className="mt-1 me-2" />
            <p>{state.area}</p>
          </div>
          <hr />
        </div>
        <div className="d-flex align-items-center justify-content-between ms-2">
          <div>
            <p className="text-secondary">Collegamenti</p>
            <p className="fw-bold">Espandi la tua rete</p>
          </div>

          <div className="me-2">
            <MdPersonAddAlt1 className="fs-3" />
          </div>
        </div>
        <hr />
        <div className="ms-2">
          <p className="text-secondary">
            Fai crescere la tua carriera o il tuo business con Premium
          </p>
          <h6>Prova Premium per 0 EUR</h6>
        </div>
        <hr />
        <div className="d-flex">
          <div className="ms-2">
            <FaBookmark className="text-secondary" />
          </div>
          <div className="ms-2">
            <p>Elementi salvati</p>
          </div>
        </div>
      </div>
      <HomeBottomSidebar />
    </>
  )
}

export default HomeSideBar
