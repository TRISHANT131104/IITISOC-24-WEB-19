import React from 'react'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import Link from 'next/link'
const page = () => {


  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      
      <div className='flex justify-center items-center my-8'>
        <div className='border-2 border-black rounded-lg w-[40vw] p-8'>
          <div className='flex justify-between'>
            <div className='border-2 border-black flex items-center p-4 rounded-lg w-[14vw]'>
              <input type="radio" name="freelancer" />
              <label htmlFor="freelancer" className='mx-4'>I want to Work as a Freelancer</label>
            </div>
            <div className='border-2 border-black flex items-center p-4 rounded-lg w-[14vw]'>
              <input type="radio" name="freelancer" />
              <label htmlFor="freelancer" className='mx-4'>I want to hire a Freelancer</label>
            </div>
          </div>
          <div className='flex justify-between flex-wrap gap-6 my-7'>
            <input type="text" placeholder='First Name' className='border-b-2 p-2' />
            <input type="text" placeholder='Last Name' className='border-b-2 p-2' />
            <input type="text" placeholder='Email' className='border-b-2 w-full p-2' />
            <input type="text" placeholder='Password' className='border-b-2 w-full p-2' />
          </div>
          <button className='bg-orange-400 w-full p-5 rounded-lg text-white'>SIGN UP</button>
        </div>
      </div>
    </div>
  )
}

export default page
