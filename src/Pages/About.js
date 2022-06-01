import React from 'react';

const About = () => {
    return (
        <div className='bg-secondary lg:h-full px-12'>
            <h2 className='text-4xl text-primary font-bold pt-12 mb-2'>About Me :</h2>
            <hr />
            <div className='grid lg:grid-cols-2 gap-8'>
                <div>
                    <h3 className='text-2xl font-bold text-white mt-12'>Junior Web Developer</h3>
                    <p className='text-xl text-white'> I am a Junior Web Developer. I always try to work hard and manage my time. I stay ready to achieve my goal and try to learn new Technology. I try to happy my client at any times. I can work with unknown partners freely. </p>
                    <p className='text-xl text-white'>My goal is to become a full stack web developer and I want that people will know me worldwide for my work.</p>
                    <p className='text-xl text-white'>Finally, I believe that everything is possible if I work hard.</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold text-white mt-12 lg:mx-16'> Personal Information</h3>
                    <ul className='text-white text-xl lg:mx-16'>
                        <li> <span className='font-bold'>Name :</span> Biplob Kumar Barmon</li>
                        <li> <span className='font-bold'>Age :</span> 27</li>
                        <li> <span className='font-bold'>Residence :</span> Dhaka, Bangladesh</li>
                        <li> <span className='font-bold'>Address :</span> Naogaon, Dhaka, Bangladesh</li>
                        <li> <span className='font-bold'>Email :</span> biplobkb123@gmail.com</li>
                        <li> <span className='font-bold'>Phone :</span> +8801750659659</li>
                        <li> <span className='font-bold'>Hire :</span> Open to Work</li>
                    </ul>
                </div>
            </div>
            <h2 className='text-4xl text-primary font-bold pt-12'>SERVICES</h2>
            
            <h3 className='text-2xl font-bold text-white pb-16'>Web Development</h3>
        </div>
    );
};

export default About;