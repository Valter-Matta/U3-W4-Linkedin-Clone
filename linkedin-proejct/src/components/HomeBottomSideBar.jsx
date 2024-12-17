import { TiPlus } from 'react-icons/ti'

const HomeBottomSidebar = () => {
  return (
    <>
      <div className="mt-3 sidebar2">
        <div className="ms-2 mt-3">
          <h6 className="text-primary">Gruppi</h6>
          <div className="d-flex justify-content-between">
            <h6 className="text-primary">Eventi</h6>
            <TiPlus className="fs-5" />
          </div>
        </div>

        <hr />
        <div>
          <p className="text-center text-secondary">Scopri di più</p>
        </div>
      </div>
    </>
  )
}

export default HomeBottomSidebar
