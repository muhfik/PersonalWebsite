import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full md:h-screen bg-[#ecf0f3] flex justify-center items-center p-4'>
            <form action="https://getform.io/f/575119dc-95c0-4def-932b-7fc398c7ea52" method='POST' className='flex flex-col max-w-[600px] w-full'>
                <div className=''>
                    <p className='text-2xl font-bold text-[#423ebe]'>Contact</p>
                    <p className='text-4xl font-bold text-gray-700'>Get In Touch</p>
                </div>
                <input className='border-2 border-black p-2' type='text' placeholder='Name' name='name' />
                <input className='border-2 border-black my-4 p-2' type="email" placeholder='Email' name='email' />
                <textarea className='border-2 border-black p-2' placeholder='Message' name='message' rows='10'></textarea>
                <button className='text-gray-700 group border-2 border-[#423ebe]  hover:text-white hover:bg-[#423ebe] hover:border-[#423ebe] px-4 py-3 my-8 mx-auto items-center'>Send Message</button>
            </form>
        </div>
    );
};

export default Contact;