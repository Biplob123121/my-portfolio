import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import myPic from '../images/myPic.png';


const Home = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" tabIndex="0" className="btn btn-ghost lg:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <label htmlFor="my-drawer-2" className="lg:hidden text-white font-bold">BIPLOB KUMAR BARMON</label>

                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-current">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 font-bold text-white">
                    {/* <!-- Sidebar content here --> */}
                    <img src={myPic} className='w-full' alt="" />
                    <li className='pt-4'><Link to='/'>HOME</Link></li>
                    <li><Link to='/about'>ABOUT ME</Link></li>
                    <li><Link to='/skill'>MY SKILLS</Link></li>
                    <li><Link to='/projects'>MY PROJECTS</Link></li>
                    <li><Link to='/education'>EDUCATION</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Home;