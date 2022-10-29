import React from 'react'

const Footer = () => {
    return (
        <div name='home' className='bg-[#423ebe] w-full flex justify-center pt-4 pb-4'>
            <div className='text-sm text-white'>
                &copy; {new Date().getFullYear()}. Muhammad Fikri Ardiayansyah
            </div>
        </div>
    );
};

export default Footer;