import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ProfileAside from './components/ProfileAside'
import MyNav from './components/MyNav'
import HomeMain from './components/HomeMainComponents'

function App() {
  return (
    <>
      <ProfileAside />
      <header>
        <MyNav />
      </header>
      <main>
        <HomeMain />
      </main>
    </>
  )
}

export default App
