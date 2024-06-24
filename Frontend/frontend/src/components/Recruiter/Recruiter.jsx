import React, { useEffect } from 'react'
import './Recruiter.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar1 from '../Navbar1'
const Recruiter = () => {
  
const [worktime, setworktime] = useState()
  
  const navigate = useNavigate()
  const [job, setJob] = useState({ title: "", company: "", category: "", Experience: "", salary: "", skill: "", Worktime:"" })
  const handleworktime=(e) => {
    setworktime(e.target.value)
    setJob({...job,Worktime:worktime})
    console.log({...job,Worktime:worktime})
  
  }
  const [jobs, setjobs] = useState([])
  const handlejob = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value, Worktime:worktime})
    console.log({ ...job, [e.target.name]: e.target.value, Worktime:worktime})
    }
    
    const handlepost = async() => {
     
      // setjobs([...jobs,job])
      console.log(job)
      // console.log([...jobs, job])
      // localStorage.setItem("Jobs",JSON.stringify([...jobs,job]))
      // console.log(JSON.parse(localStorage.getItem("Jobs")))
      let res = await fetch("http://localhost:5003/api/job/createJob", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(job)
       })
    let response = await res.json()
    console.log(response)
      setJob({ title: "", company: "", category: "", Experience: "", salary: "", skill: "", Worktime:"" })
  
      
      }
      
      
      
      return (
        <div className=''>


      <Navbar1 />
      <div className='flex justify-center items-center '>

        <div className="container bg-gray-400 p-2  ">
          <h1 className="form-title">Post A Job</h1>

          <div className="main-work-info">
            <div className="work-input-box">
              <label htmlFor="title">Job Title</label>
              <input onChange={handlejob} value={job.title} type="text"
                id="jobName"
                name="title"
                placeholder="Enter Job Title" />
            </div>
            <div className="work-input-box">
              <label htmlFor="company">Company</label>
              <input onChange={handlejob} value={job.company} type="text"
                id="companyname"
                name="company"
                placeholder="Enter Company Name" />
            </div>
            <div className="work-input-box">
              <label htmlFor="category">Job Category</label>
              <input onChange={handlejob} value={job.category} type="text"
                id="jobcategory"
                name="category"
                placeholder="Enter job category" />
            </div>
            <div className="work-input-box">
              <label htmlFor="Experience">Experience Required</label>
              <input onChange={handlejob} value={job.Experience} type="number"
                id="phoneNumber"
                name="Experience"
                placeholder="Enter Years of Experience" />
            </div>
            <div className="work-input-box">
              <label htmlFor="salary">Salary</label>
              <input onChange={handlejob} value={job.salary} type="number"
                id="salary"
                name="salary"
                placeholder="Enter salary in Rupees" />
            </div>
            <div className="work-input-box">
              <label htmlFor="skill">Job skill</label>
              <input onChange={handlejob} value={job.skill} type="text"
                id="skill"
                name="skill"
                placeholder="Skill required" />
            </div>
          </div>
          <div className="work-details-box">
            <span className="working-title">Working hours </span>
            <div className="working-category">
              <input type="radio" onChange={(e) => {handleworktime(e)}} value="Part time" name="worktime" id="parttime" />
              <label htmlFor="parttime">Part Time</label>
              <input type="radio" onChange={(e) => {handleworktime(e)}} value="Full time" name="worktime" id="fulltime" />
              <label htmlFor="fulltime">Full Time</label>
              <input type="radio" onChange={(e) => {handleworktime(e)}} value="Other" name="worktime" id="other" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="form-submit-btn">
            <button onClick={handlepost} className=' w-full bg-orange-300 rounded-xl text-white my-4 p-3'>Post Job</button>
          </div>

        </div>
      </div> </div>
  )
}

export default Recruiter



