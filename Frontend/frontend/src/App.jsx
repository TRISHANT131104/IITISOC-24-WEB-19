import React, { useState } from 'react'

import Navbar1 from './components/Navbar/Navbar1'
import Navbar2 from './components/Navbar/Navbar2'
import { Route, Routes } from 'react-router-dom'
import LoginPopup from './components/LoginPopup/LoginPopup'


const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></> }
    <div className='app'>
      <Navbar1 setShowLogin={setShowLogin}/>
      <Navbar2/>
      <Routes>
        <Route/>
      </Routes>
    </div>
    </>
  )
}

export default App
