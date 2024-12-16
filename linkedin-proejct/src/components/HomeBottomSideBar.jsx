import { TiPlus } from 'react-icons/ti'

const HomeBottomSidebar = () => {
  return (
    <>
      <div>
        <h6 className="text-primary">Gruppi</h6>
        <div className="d-flex justify-content-between">
          <h6 className="text-primary">Eventi</h6>
          <TiPlus className="fs-5" />
        </div>
        <hr />
        <div>
          <p className="text-center text-secondary">Scopri di più</p>
        </div>
        <hr />
      </div>
    </>
  )
}

export default HomeBottomSidebar
