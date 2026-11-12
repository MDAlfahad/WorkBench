import React from 'react'
import Navbar from "./components/navbar/Navbar"
import LandingPageCrausel from './components/components/crausel/LandingPageCrausel'
const MainRoute = () => {
  return (
    <div>
        <Navbar/>
        <div>
          <LandingPageCrausel/>
        </div>
    </div>
  )
}

export default MainRoute