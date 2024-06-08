'use client'
import React, { useState } from 'react'
import Link from 'next/link';


const Navbar2 = () => {

    const [isopen, setisopen] = useState(false);

    return (
        <div className='flex justify-between p-4 bg-gray-200'>

            <Link href="" className='relative  group transition-all '>
                

                <span className='group-hover:font-bold'>Artificial Intelligence</span>
                     <div className=' bg-white rounded-xl absolute top-6 p-4  transition-all right-0 hidden group-hover:flex'>
                
                     <ul>
                            <li>AI video Editing</li>
                            <li>AI Art and Design</li>
                            <li>AI Chatbot development</li>
                        </ul>
                </div>
               
            </Link>
            <Link href="" className='relative  group'>
                <span className='group-hover:font-bold'>Graphic designing</span>
                     <div className=' bg-white rounded-xl absolute top-6 p-4 right-0 hidden group-hover:flex'>
                
                    <ul>
                        <li>Logo Design</li>
                        <li>Web Design</li>
                        <li>Animation</li>
                    </ul>
                </div>
            </Link>
            <Link href="" className='relative  group'>
                <span className='group-hover:font-bold'>Web Development</span>
                     <div className=' bg-white rounded-xl absolute top-6 p-4 right-0 hidden group-hover:flex '>
                     <ul>
                        <li>Front End</li>
                        <li>Backend</li>
                    </ul>
                </div>
            </Link>
            <Link href="" className='relative  group'>
            
                <span className='group-hover:font-bold'>Digital marketing</span>
                     <div className='  bg-white rounded-xl absolute top-6 p-4 right-0 hidden group-hover:flex'>
                     <ul>
                        <li>Email marketing</li>
                        <li>Influencer marketing</li>
                        <li>video marketing</li>
                    </ul>
                </div>
            </Link>



            

            <Link href="" className='relative  group'>
                <span className='group-hover:font-bold'>Machine learning</span>
                     <div className=' bg-white rounded-xl absolute top-6 p-4 right-0 hidden group-hover:flex'>
                
                     <ul>
                        <li>Data Science</li>
                        <li>NLP</li>
                        <li>CSV</li>
                    </ul>
                </div>
            </Link>
            <Link href="" className='relative  group'>
                <span className='group-hover:font-bold'>Programming</span>
                     <div className=' bg-white rounded-xl absolute top-6 p-4 right-0 hidden group-hover:flex'>
                     <ul>
                        <li>Programming and Coding</li>
                        <li>Databases</li>
                        <li>Game Development</li>
                    </ul>
                </div>
            </Link>
        </div>
           
    )
}

export default Navbar2



