


import React ,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'


const Navbar1 = () => {
 

  
  
  
  return (
    <div>
      <nav className='flex justify-between bg-slate-300  '>

      <div>
        <img width={50} height={50} src="https://c8.alamy.com/comp/2HMMMBC/freelancer-text-on-red-brown-ribbon-badge-stamp-2HMMMBC.jpg" alt="" />
      </div>
      <div className='flex gap-5 p-3'>
        
              <Link to="/search" className='hover:font-semibold'>SEARCH</Link>  
              <Link to="/Signin" className='hover:font-semibold'>LOG IN </Link>    
              <Link to="/Signup" className='hover:font-semibold'>SIGN UP</Link>      
              <Link to="/Freelance" className='hover:font-semibold'>FREELANCER</Link>      
        </div>
    </nav>
   </div>
  )
}

export default Navbar1