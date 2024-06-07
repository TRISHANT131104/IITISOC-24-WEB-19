import React from 'react'
import Link from 'next/link'
const Navbar1 = () => {
  return (
    <div>
      <nav className='flex justify-between bg-slate-300  '>

      <div>
        <img width={50} height={50} src="https://c8.alamy.com/comp/2HMMMBC/freelancer-text-on-red-brown-ribbon-badge-stamp-2HMMMBC.jpg" alt="" />
      </div>
      <div className='flex gap-5 p-3'>
        
              <Link href="">SEARCH</Link>      
              <Link href="">LOG IN</Link>      
              <Link href="">SIGN UP</Link>      
             <Link href="">FREELANCER</Link>      
        </div>
    </nav>
   </div>
  )
}

export default Navbar1
