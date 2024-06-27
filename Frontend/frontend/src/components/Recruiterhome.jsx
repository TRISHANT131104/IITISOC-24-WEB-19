import React from 'react'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Recruiterhome = () => {
    const navigate = useNavigate()
    const tojobform=() => {
        navigate("/Recruiter")
      
    }
    
    return (
        <div>
            <Navbar1 />
            <Navbar2 />
            <div className="container  flex justify-center min-w-full">
                <div className='text-center m-4'>
                    <div className='text-2xl my-3'>Click on the Button to Post a Job</div>
                    <button onClick={tojobform} className='text-normal rounded-xl bg-red-400 text-white py-2 px-3' >Post a Job</button>
                </div>
                
            </div>
        </div>
    )
}

export default Recruiterhome
