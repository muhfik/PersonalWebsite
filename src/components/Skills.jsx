import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import PHP from '../assets/php.png'
import Bootstrap from '../assets/bootstrap.png'
import Tailwind from '../assets/tailwind.png'
import ReactJS from '../assets/react.png'
import Laravel from '../assets/laravel.png'
import Mysql from '../assets/mysql.png'
import NodeJS from '../assets/node.png'
import MongoDB from '../assets/mongo.png'
import Github from '../assets/github.png'

const Skills = () => {
    return(
        <div name='skills' className='w-full h-screen bg-[#ecf0f3] text-gray-700'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-2xl font-bold text-[#423ebe]'>Skills</p>
                    <p className='text-4xl font-bold pb-6'>What I Can Do</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center gap-4 py-8'>
                    <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src={HTML} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src={CSS} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src={Javascript} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src={PHP} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>PHP</h3>
                        </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src={ReactJS} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>ReactJS</h3>
                        </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src={Laravel} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Laravel</h3>
                        </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src={Bootstrap} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Bootstrap</h3>
                        </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src={Tailwind} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src={NodeJS} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NodeJS</h3>
                        </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src={Mysql} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MySQL</h3>
                        </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src={MongoDB} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Mongo DB</h3>
                        </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img src={Github} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Github</h3>
                        </div>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills; 