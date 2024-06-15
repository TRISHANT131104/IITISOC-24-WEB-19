


import React ,{useState} from 'react'
import './Navbar1.css'

const Navbar1 = ({setShowLogin}) => {
  return (
    <div className='navbar'>
        <img src="https://c8.alamy.com/comp/2HMMMBC/freelancer-text-on-red-brown-ribbon-badge-stamp-2HMMMBC.jpg" alt="" className='logo'/>
          <div className="navbar-right"> 
        <button onClick={()=>setShowLogin(true)} >sign in</button>
        </div> 
    </div>
  )
}

export default Navbar1