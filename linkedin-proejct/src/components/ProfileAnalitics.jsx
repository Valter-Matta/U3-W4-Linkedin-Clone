import { FaEye, FaSearch } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi2'
import { BsFileBarGraph } from 'react-icons/bs'
import { Card } from 'react-bootstrap'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getmyProfile } from '../redux/actions'

const valterID = '6761789874a8680015db553b'
const giovanniID = '676137f274a8680015db5510'
const massimoID = '67614b0974a8680015db5527'

const ProfileAnalitics = () => {
  const ID = useSelector((redux) => redux.profile.users._id)

  let [counterValter, setCounterValter] = useState(0)
  let [counterGiovanni, setCounterGiovanni] = useState(0)
  let [counterMassimo, setCounterMassimo] = useState(0)
  let [counterUmberto, setCounterUmberto] = useState(0)

  useEffect(() => {
    valterID === ID
      ? setCounterValter(counterValter + 1)
      : giovanniID === ID
      ? setCounterGiovanni(counterGiovanni + 1)
      : massimoID === ID
      ? setCounterMassimo(counterMassimo + 1)
      : setCounterUmberto(counterUmberto + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ID, getmyProfile])

  return (
    <Card className='pt-3 my-3'>
      <div className='px-4'>
        <h1 className='fs-4 m-0'>Analisi</h1>
        <p className='m-0 pb-2'>
          <FaEye /> Solo per te
        </p>
      </div>
      <div className='d-flex flex-column flex-md-row'>
        <div className=' ps-4 pe-2 d-flex '>
          <HiUsers className='fs-2' />
          <div className='px-2 analisi'>
            {' '}
            <h3>
              {valterID === ID
                ? counterValter
                : giovanniID === ID
                ? counterGiovanni
                : massimoID === ID
                ? counterMassimo
                : counterUmberto}{' '}
              visualizzazioni del profilo
            </h3>
            <p>Scopri chi ha visitato il tuo profilo.</p>
          </div>
        </div>
        <div className='ps-4 ps-md-2 pe-2 mb-2  d-flex '>
          <BsFileBarGraph className='fs-2' />
          <div className='px-2 analisi '>
            <h3>{Math.floor(Math.random() * 10)} impressioni dei post</h3>
            <p className='m-0'>Crea un post per aumentare l&apos;interesse</p>
            <p className='m-0'>Ultimi 7 giorni.</p>
          </div>
        </div>
        <div className='ps-4 ps-md-2 pe-4 d-flex '>
          <FaSearch className='fs-2' />
          <div className='px-2 analisi '>
            <h3>
              {Math.floor(Math.random() * 50)} comparse nei motori di ricerca
            </h3>
            <p>Vedi quante volte compari nei risultati di ricerca.</p>
          </div>
        </div>
      </div>
      <p className='custom-hover m-0  border-top w-100 fw-medium d-flex align-items-center justify-content-center'>
        Mostra tutte le analisi{' '}
        <span className='pen'>
          <FaArrowRightLong className='ms-2' />
        </span>
      </p>
    </Card>
  )
}

export default ProfileAnalitics
