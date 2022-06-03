import React from 'react';
import './Animation.css';
import agro from '../images/agro.png';
import bike from '../images/bikeDealer.png';

const Projects = () => {
    return (
        <div className='bg-secondary lg:h-full px-12 page-animation'>
            <h2 className='text-4xl text-primary font-bold pt-12 mb-2'>Projects</h2>
            <hr />
            <div className='grid lg:grid-cols-2 gap-4 py-8'>
                <div className='text-white  p-3 rounded-2xl shadow-lg shadow-cyan-500/50'>
                    <img src={agro} alt="" />
                    <h2 className='text-xl font-bold py-2'>Project Name : AGRO MACHINERIES</h2>
                    <p>It is a manufacturer website. Here, you can see the user interface and the admin interface. To check admin interface you need to login using admin email and password.</p>
                    <a target='_blank' rel='noreferrer' href="https://agro-machineries.web.app/">
                        <button type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 my-2 text-white text-xl font-bold rounded">VIEW LIVE</button>
                    </a>
                </div>
                <div className='text-white  p-3 rounded-2xl shadow-lg shadow-cyan-500/50'>
                    <img src={bike} alt="" />
                    <h2 className='text-xl font-bold py-2'>Project Name : BIKE DEALER BD</h2>
                    <p>It is a warehouse management website. This project is designed for the manage quantity like addition, delete, update product quantity etc. </p>
                    <a target='_blank' rel='noreferrer' href="https://bike-dealer-bd.web.app/">
                        <button type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 my-2 text-white text-xl font-bold rounded">VIEW LIVE</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;