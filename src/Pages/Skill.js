import React from 'react';
import './Skills.css';

const Skill = () => {
    return (
        <div className='bg-secondary lg:h-screen px-12'>
            <h2 className='text-4xl text-primary font-bold pt-12 mb-2'>My Skills </h2>
            <hr />

            <div className='grid lg:grid-cols-2 gap-4'>
                <div className='skill-bars lg:w-3/4 pt-12'>
                    <div className="bar">
                        <div className="info">
                            <span className='text-white'>HTML5</span>
                        </div>
                        <div className="progress-line html">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span className='text-white'>CSS3</span>
                        </div>
                        <div className="progress-line css">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span className='text-white'>Bootstrap</span>
                        </div>
                        <div className="progress-line bootstrap">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span className='text-white'>Tailwind CSS</span>
                        </div>
                        <div className="progress-line tailwind">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span className='text-white'>Firebase</span>
                        </div>
                        <div className="progress-line firebase">
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className='skill-bars lg:w-3/4 lg:pt-12'>
                    <div className="bar">
                        <div className="info">
                            <span className='text-white'>JavaScript</span>
                        </div>
                        <div className="progress-line javaScript">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span className='text-white'>React JS</span>
                        </div>
                        <div className="progress-line react">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span className='text-white'>Node JS</span>
                        </div>
                        <div className="progress-line node">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span className='text-white'>Express JS</span>
                        </div>
                        <div className="progress-line express">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span className='text-white'>MongoDB</span>
                        </div>
                        <div className="progress-line mongo">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;