import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './ProfileAside.css'
import ProfileAside from './components/ProfileAside'
import MyNav from './components/MyNav'
import HomeMain from './components/HomeMainComponents'
import ProfilePage from './components/ProfilePage'

function App() {
  return (
    <>
      <header>
        <MyNav />
      </header>
      <main>
        <ProfilePage />
        <HomeMain />
        <ProfileAside />
      </main>
    </>
  )
}

export default App
