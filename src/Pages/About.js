import React from 'react';
import './Animation.css';
import dev from '../images/dev.png';
import design from '../images/design.png';
import responsive from '../images/responsive.png';

const About = () => {
    return (
        <div className='bg-secondary px-12 page-animation pb-12'>
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
            <hr />
            <div className='grid lg:grid-cols-3 gap-4 mt-6'>
                <div className="card text-white bg-[#999997] shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={dev} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Web Development</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card text-white bg-[#999997] shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={design} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Web Design</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card text-white bg-[#999997] shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={responsive} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Responsive Design</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;