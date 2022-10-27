import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import RealEstate from '../assets/projects/realestate.jpg'

const Project = () => {
    return (
        <div name='project' className='w-full md:h-screen text-white bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-600 text-white'>Project</p>
                    <p className='py6'>Check out some of my recent project</p>
                </div>

                <div style={{backgroundImage: `url(${WorkImg})`}} 
                className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div>
                            <span>

                            </span>
                            <div>
                                <a href="/">
                                    <button></button>
                                </a>
                                <a href="/">
                                    <button></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project