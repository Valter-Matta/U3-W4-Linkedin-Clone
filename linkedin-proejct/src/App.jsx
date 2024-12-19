import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './ProfileAside.css'
import ProfileAside from './components/ProfileAside'
import MyNav from './components/MyNav'
import ProfilePage from './components/ProfilePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import HomeMainComponent from './components/HomeMainComponents'
import SearchJobs from './components/SearchJobs'
import PageNotFound from './components/PageNotFound'
import JobDetail from './components/JobDetail'
import UserResult from './components/UserResult'

function App() {
  return (
    <BrowserRouter>
      <header>
        <MyNav />
      </header>
      <main className="pt-3 pt-md-4">
        <Container>
          <Routes>
            <Route
              path="/"
              element={
                <Row>
                  <div className="p-0 col-12 col-lg-8">
                    <ProfilePage />
                  </div>
                  <div className="col-12 col-lg-4">
                    <ProfileAside />
                  </div>
                </Row>
              }
            />
            <Route path="/Home" element={<HomeMainComponent />} />
            <Route path="/search" element={<SearchJobs />} />
            <Route path="/jobDetail/:company" element={<JobDetail />} />
            <Route path="/user/:id" element={<UserResult />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  )
}

export default App
