import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import HomeMain from './components/HomeMainComponents'

function App() {
  return (
    <>
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
