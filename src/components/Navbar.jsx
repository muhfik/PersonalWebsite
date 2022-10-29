import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll'


const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg] = useState('#ecf0f3');
    const [linkColor] = useState('#1f2937');
  

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
        if (window.scrollY >= 90) {
            setShadow(true);
        } else {
            setShadow(false);
        }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

  return (
    <div
        style={{ backgroundColor: `${navBg}` }}
        className={
            shadow
            ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
            : 'fixed w-full h-20 z-[100]'
        }
    >
        <div className='fixed w-full flex justify-between items-center pt-4 pb-4 bg-[#ecf0f3] text-white'>
            <div>
                <p className='text-4xl font-bold text-[#423ebe]'>M<span className='text-4xl font-bold text-black'>e</span></p>
            </div>
            <div>
            <ul style={{ color: `${linkColor}` }} className='hidden md:flex font-bold'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='project' smooth={true} duration={500}>
                        Project
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div
                style={{ color: `${linkColor}` }}
                onClick={handleNav}
                className='md:hidden'
            >
                <AiOutlineMenu size={25} />
            </div>
            </div>
        </div>

        <div
            className={
            nav ? 'md:hidden fixed right-0 top-0 w-full h-screen bg-black/70' : ''
            }
        >
            <div
            className={
                nav
                ? ' fixed right-0 top-0 bottom-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                : 'fixed right-[-100%] top-0 p-10 ease-in duration-500'
            }
            >
            <div>
                <div className='flex w-full items-center justify-between'>
             
                <div
                    onClick={handleNav}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                >
                    <AiOutlineClose />
                </div>
                </div>
                <div className='border-b border-gray-300 my-4'></div>
            </div>
            <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                    <li className='py-4 flex flex-col text-sm'>
                        <Link onClick={handleNav} to='home' smooth={true} duration={500}>
                        Home
                        </Link>
                    </li>
                    <li className='py-4 flex flex-col text-sm'>
                        <Link onClick={handleNav} to='about' smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className='py-4 flex flex-col text-sm'>
                        <Link onClick={handleNav} to='skills' smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className='py-4 flex flex-col text-sm'>
                        <Link onClick={handleNav} to='project' smooth={true} duration={500}>
                            Project
                        </Link>
                    </li>
                    <li className='py-4 flex flex-col text-sm'>
                        <Link onClick={handleNav} to='contact' smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>   
                </ul>

                <div className='pt-20'>
                <p className='uppercase tracking-widest text-[#5651e5]'>
                    Let&#39;s Connect
                </p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    <a
                    href='https://www.linkedin.com'
                    target='_blank'
                    rel='noreferrer'
                    >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedin />
                    </div>
                    </a>
                    <a
                    href='https://github.com/muhfik'
                    target='_blank'
                    rel='noreferrer'
                    >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    </a>
                    <Link href='/#contact'>
                    <div
                        onClick={() => setNav(!nav)}
                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                    >
                        <AiOutlineMail />
                    </div>
                    </Link>
                    <Link href='/resume'>
                    <div
                        onClick={() => setNav(!nav)}
                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                    >
                        <BsFillPersonLinesFill />
                    </div>
                    </Link>
                </div>
                <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                    <ul>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
                            <a className='flex justify-between items-center w-full text-white' 
                            href='https://www.linkedin.com'
                            target='_blank'
                            rel='noreferrer'
                            >
                                Linkedin <FaLinkedin size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
                            <a className='flex justify-between items-center w-full text-white' 
                            href='https://github.com/muhfik'
                            target='_blank'
                            rel='noreferrer'
                            >
                                Github <FaGithub size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                            <a className='flex justify-between items-center w-full text-white' 
                            href='/'>
                                Email <HiOutlineMail size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                            <a className='flex justify-between items-center w-full text-white' 
                            href='/'>
                                Resume <BsFillPersonLinesFill size={30}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
};


export default Navbar;