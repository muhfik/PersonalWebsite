import React from 'react'
import { data } from '../data/project.js'

const Project = () => {

    const project = data;

    return (
        <div name='project' className='w-full min-h-screen text-gray-700 bg-[#ecf0f3] md:pt-20'>
            <div className='max-w-[1000px] mx-auto p-4 justify-center w-full min-h-screen'>
                <div>
                    <p className='text-2xl font-bold text-[#423ebe]'>Project</p>
                    <p className='text-4xl font-bold pb-6'>What I've Built</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {project.map((item, index) => (
                        <div
                        key={index}
                        style={{ backgroundImage: `url(${item.image})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md
                                    flex justify-center text-center items-center mx-auto content-div'
                        >
                            <div className="opacity-0 group-hover:opacity-100 ">
                                <span className="text-2xl font bold text-white tracking-wider ">
                                    {item.name}
                                </span>
                            <div className="pt-8 text-center ">
                                <a href={item.github} target='_blank'>
                                <button
                                    className='text-center rounded-lg px-4 py-3 m-2
                                            bg-white text-gray-700 font-bold text-lg'
                                >
                                    Code
                                </button>
                                </a>
                                <a href={item.live} target='_blank'>
                                <button
                                    className='text-center rounded-lg px-4 py-3 m-2
                                            bg-white text-gray-700 font-bold text-lg'
                                >
                                    Demo
                                </button>
                                </a>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;