import React from 'react'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Signin = () => {
   
        const [form, setform] = useState({email:"", pass:""})
        const [data, setdata] = useState([])
    
    const handleform =(e) => {
        setform({...form,[e.target.name]:e.target.value})
        
    }
    const handlelogin= async() => {
      setdata([...data,form])
    console.log([...data,form])
    setform({email:"", pass:""})
    await fetch("http://localhost:4000/api/user/login",{method:"POST", headers:{"Content-Type":"application/json"},
        body:{form}})
}

    return (
        <div className=''>
            <Navbar1 />
            <Navbar2 />
            
            <div className='h-1/6 text-3xl flex items-end justify-center mt-4'>
                <div>
                    <div className='text-center'>Log In</div>
                    <span className='text-sm'> Don't have an account?</span>
                    <Link to="/Signup" className='text-sm px-1 text-red-400 font-bold'>Sign Up</Link>
                </div>
            </div>

            <div className='flex justify-center py-5 '>
                <div className='bg-white border-2 border-black rounded-lg p-4 min-w-[35vw] '>
                    <div className='mb-3'>
                        < div>Email</div>
                        <input onChange={handleform} name='email' value={form.email}
                        className='border-4 w-full' type="text" />
                    </div>
                    <div className='mb-3'>
                        < div className=''>Password</div>
                        <input onChange={handleform} name='pass' value={form.pass} className='border-4 w-full' type="password" />
                    </div>
                    <button onClick={handlelogin} className=' bg-orange-400 w-full my-4 p-3 rounded-xl text-white'>Log In</button>
                </div>
            </div>


        </div>



    )
}

export default Signin
