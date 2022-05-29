import React from 'react';

const Skill = () => {
    return (
        <div className='bg-secondary h-screen px-12'>
            <h2 className='text-4xl text-primary font-bold pt-12 mb-2'>My Skills </h2>
            <hr />

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-white font-bold text-lg">HTML5</span>
                    <span className="label-text-alt text-white font-bold text-lg">90</span>
                </label>
                <input type="range" min="0" max="100" value="90" className="range range-xs range-primary" readOnly/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-white font-bold text-lg">CSS3</span>
                    <span className="label-text-alt text-white font-bold text-lg">90</span>
                </label>
                <input type="range" min="0" max="100" value="90" className="range range-xs range-primary" readOnly/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-white font-bold text-lg">JavaScript</span>
                    <span className="label-text-alt text-white font-bold text-lg">70</span>
                </label>
                <input type="range" min="0" max="100" value="70" className="range range-xs range-primary" readOnly/>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-white font-bold text-lg">Reactjs</span>
                    <span className="text-white font-bold text-lg">70</span>
                </label>
                <input type="range" min="0" max="100" value="70" className="range range-xs range-primary" readOnly/>
            </div>
        </div>
    );
};

export default Skill;