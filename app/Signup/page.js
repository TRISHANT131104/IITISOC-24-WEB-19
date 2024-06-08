import React from 'react'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <Navbar1/>
      <Navbar2/>
      <div className='flex justify-center items-center my-8'>
        <div className='border-2 border-black rounded-lg w-[40vw] p-8'>
          <div className='flex justify-between'>

          <button className='w-[12vw] text-blue-400 rounded-md border-2 border-blue-300 p-4 font-medium focus:text-white focus:bg-blue-400'>I want to Work as a Freelancer</button>
          <button className='w-[12vw] text-blue-400 rounded-md border-2 border-blue-300 p-4 font-medium focus:text-white focus:bg-blue-400'>I want to Hire a Freelancer</button>
          </div>
          <div className='flex justify-between flex-wrap gap-6 my-7'>
            <input type="text" placeholder='First Name' className='border-b-2'/>
            <input type="text" placeholder='Last Name' className='border-b-2'/>
            <input type="text" placeholder='Email' className='border-b-2 w-full'/>
            <input type="text" placeholder='Password' className='border-b-2 w-full'/>
          </div>
          <button className='bg-orange-400 w-full p-5 rounded-lg'>SIGN UP</button>
        </div>
      </div>
    </div>
  )
}

export default page
