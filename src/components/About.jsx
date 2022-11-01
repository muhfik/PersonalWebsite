import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-screen h-screen bg-[#ecf0f3] text-gray-700'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold text-[#423ebe]'>About</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Fikri, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p className='font-bold'>I specialize in building mobile responsive front-end applications
                            that connect with API’s and other backend technologies. I’m passionate about learning 
                            new technologies and understand there is more than one way to accomplish a task. 
                            Although I'm not proficient yet, but I'm still learning in building front-end applications 
                            using HTML, CSS, Javascript, and ReactJS, I am a quick learner and can pick up 
                            new tech stacks as needed. I believe that being a great developer is not using one
                            specific language, but choosing the best tool for the job.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;