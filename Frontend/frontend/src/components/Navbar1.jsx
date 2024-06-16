


import React ,{useState} from 'react'
// import './Navbar1.css'
import { Link } from 'react-router-dom'

// const Navbar1 = ({setShowLogin}) => {
//   return (
//     <div className='navbar'>
//         <img src="https://c8.alamy.com/comp/2HMMMBC/freelancer-text-on-red-brown-ribbon-badge-stamp-2HMMMBC.jpg" alt="" className='logo'/>
//           <div className="navbar-right"> 
//         <button onClick={()=>setShowLogin(true)} >sign in</button>
//         </div> 
//     </div>
//   )
// }

const Navbar1 = () => {
  return (
    <div>
      <nav className='flex justify-between bg-slate-300  '>

      <div>
        <img width={50} height={50} src="https://c8.alamy.com/comp/2HMMMBC/freelancer-text-on-red-brown-ribbon-badge-stamp-2HMMMBC.jpg" alt="" />
      </div>
      <div className='flex gap-5 p-3'>
        
              <Link to="/search">SEARCH</Link>      
              <Link to="/Signin">LOG IN</Link>      
              <Link to="/Signup">SIGN UP</Link>      
             <Link to="/Freelance">FREELANCER</Link>      
        </div>
    </nav>
   </div>
  )
}

export default Navbar1