import React from 'react'
import Navbar from "./components/navbar/Navbar"
import LandingPage from './components/pages/LandingPage'
const MainRoute = () => {
  return (
    <div>
        <Navbar/>
        <div>
          <LandingPage/>
        </div>
    </div>
  )
}

export default MainRoute