import React from 'react';
import bg from '../images/hh.jpg';

const HomeInfo = () => {
    return (
        <div>
            <div style={{
                    background: `url(${bg})`,
                    backgroundRepeat : 'no-repeat',
                    backgroundSize: 'cover'
                }} className='h-screen flex justify-center py-28'>
                    <div>
                        <h1 className=' text-6xl font-bold text-primary p-4'>BIPLOB KUMAR BARMON</h1>
                        <h1 className='text-5xl font-bold text-white px-4'>I am a Junior Web Developer</h1>
                    </div>

                </div>
        </div>
    );
};

export default HomeInfo;