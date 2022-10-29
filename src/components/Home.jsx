import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#ecf0f3]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-700 font-bold'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#423ebe]'>Muhammad Fikri Ardiayansyah</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-gray-700'>I'm a Frontend Developer.</h2>
        <p className='text-gray-700 font-bold py-4 max-w-[900px]'>I'm Frontend Developer specializing in building and occasionally designing
           exceptional digital experiences. Currently, I'm focused on building responsive frontend web applications while learning backend technolohies.
        </p>
          <div>
            <button className='text-gray-700 group border-2 border-[#423ebe] px-6 py-3 my-2 flex items-center hover:text-white hover:bg-[#423ebe] hover:border-[#423ebe]'>
              <Link to='project' smooth={true} duration={500}>
                View Project
              </Link>
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
              </span>
            </button>
          </div>
      </div>
    </div>
  );
};

export default Home;