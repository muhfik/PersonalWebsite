import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import Tailwind from '../assets/tailwind.png'
import ReactJS from '../assets/react.png'
import NodeJS from '../assets/node.png'
import MongoDB from '../assets/mongo.png'
import Firebase from '../assets/firebase.png'
import AWS from '../assets/aws.png'
import Github from '../assets/github.png'

const Skills = () => {
    return(
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-white'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-red-600'>Skills</p>
                    <p className='py-4'>These are the technologies I've work with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Javascript} alt="JAVASCRIPT icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="TAILWINDCSS icon" />
                        <p className='my-4'>TAILWINDCSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactJS} alt="REACTJS icon" />
                        <p className='my-4'>REACTJS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={NodeJS} alt="NODEJS icon" />
                        <p className='my-4'>NODEJS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duratMongo500'>
                        <img className='w-20 mx-auto' src={MongoDB} alt="MONGO DB icon" />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Firebase} alt="FIREBASE icon" />
                        <p className='my-4'>FIREBASE</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={AWS} alt="AWS icon" />
                        <p className='my-4'>AWS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Github} alt="Github icon" />
                        <p className='my-4'>Github</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills; 