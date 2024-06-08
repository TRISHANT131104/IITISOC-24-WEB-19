import React from 'react'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import Link from 'next/link'
const page = () => {
    return (
        <div className=''>
            <Navbar1/>
            <Navbar2/>

            <div className='h-1/6 text-3xl flex items-end justify-center mt-4'>
            <div>

            <div className='text-center'>Log In</div>
            <span className='text-sm'> Don't have an account?</span>
            <Link href="/Signup" className='text-sm px-1 text-red-400 font-bold'>Sign Up</Link>
            </div>
            </div>
            
            <div className='flex justify-center py-5 '>
                <div className='bg-white border-2 border-black rounded-lg p-4 min-w-[35vw] '>
                    <div className='mb-3'>
                        < div>Email</div>
                        <input className='border-4 w-full' type="text" />
                    </div>
                    <div className='mb-3'>
                        < div className=''>Password</div>
                        <input className='border-4 w-full' type="text" />
                    </div>
                    <button className=' bg-orange-400 w-full my-4 p-3 rounded-xl'>Log In</button>
                </div>
            </div>


        </div>



    )
}

export default page
