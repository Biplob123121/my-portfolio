import React from 'react';
import bg from '../images/bgPic.jpg';

const HomeInfo = () => {
    return (
        <div>
            <div style={{
                background: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }} className='h-screen flex justify-center items-center'>
                <div>
                    <h1 className=' text-6xl font-bold text-primary p-4'>BIPLOB KUMAR BARMON</h1>
                    <h1 className='text-5xl font-bold text-white px-4 animate-pulse opacity-10'>I am a Junior Web Developer</h1>
                    <div className='mt-4 p-4'>
                        <button type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 text-white text-xl font-bold rounded mr-4">Hire Me</button>
                        <a rel='noreferrer' target='_blank' href='https://drive.google.com/file/d/1pL9e6T5jXWNqFMg-DYxCOiJmgARSSy5Y/view?usp=sharing'>

                        <button type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 text-white text-xl font-bold rounded">Download Resume</button>
                        </a>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeInfo;