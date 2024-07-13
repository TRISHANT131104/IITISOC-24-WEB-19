import React from 'react'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Recruiterhome = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const [jobapply, setjobapply] = useState([])
    const navigate = useNavigate()
    const tojobform = () => {
        navigate("/Recruiter")
    }
    useEffect(() => {
        const getappliedjob = async () => {
            let jb = await fetch("http://localhost:5003/api/job/Applied")
            let appliedjb = await jb.json()
            setjobapply(appliedjb.data)
            console.log(appliedjb.data)
        }

        getappliedjob()
    }, [])


    return (
        <div>
            <Navbar1 />
            <Navbar2 />
            <div className="container  flex justify-center min-w-full">
                <div className='text-center m-4'>
                    <div className='text-2xl my-3'>Click on the Button to Post a Job</div>
                    <button onClick={tojobform} className='text-normal rounded-xl bg-red-400 text-white py-2 px-3' >Post a Job</button>
                </div>
                <div>
                    {jobapply.map((items,index) => {
                      if(items.remail==user.email){
                        return <div key={index}>
                            <div> {items.phoneNumber}</div>
                        <div>candidate email </div>
                        <div>candidate contact no- </div>
                        <div>candidate name </div>
                        </div>
                      }
                    }
                    )
                        
                    }
                    
                </div>

            </div>
        </div>
    )
}

export default Recruiterhome
