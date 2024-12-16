import { MdPersonAddAlt1 } from 'react-icons/md'
import { FaBookmark } from 'react-icons/fa6'
import HomeBottomSidebar from './HomeBottomSideBar'

const HomeSideBar = () => {
  return (
    <div>
      <div className="bg-primary d-flex justify-content-center mt-5">
        <img
          style={{ borderRadius: '50%' }}
          src="https://placedog.net/60/60"
          className="picture-sidebar"
          alt=""
        />
      </div>
      <div className="mt-5 text-center">
        <h4>Utente Linkedin</h4>
        <p>Lavoro corrente</p>
        <hr />
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <p className="text-secondary">Collegamenti</p>
          <p className="fw-bold">Espandi la tua rete</p>
        </div>

        <div className="me-2">
          <MdPersonAddAlt1 className="fs-3" />
        </div>
      </div>
      <hr />
      <div>
        <p className="text-secondary">
          Fai crescere la tua carriera o il tuo business con Premium
        </p>
        <h6>Prova Premium per 0 EUR</h6>
      </div>
      <hr />
      <div className="d-flex">
        <div>
          <FaBookmark className="text-secondary" />
        </div>
        <div className="ms-2">
          <p>Elementi salvati</p>
        </div>
      </div>
      <hr />
      <HomeBottomSidebar />
    </div>
  )
}

export default HomeSideBar
