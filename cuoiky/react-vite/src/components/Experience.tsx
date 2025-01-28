import React, { useEffect, useState } from 'react';
import Company1 from '../layout/Company1';
import Company2 from '../layout/Company2';
import Company3 from '../layout/Company3';
// import '/style/Button.css';
function Experience() {
    const companies = [<Company1 />, <Company2 />, <Company3 />];
    const [currentIdx, setCurrentIdx] = useState(0);

    const handlePrevClick = () => {
        setCurrentIdx((index) => (index > 0 ? index - 1 : companies.length - 1));
    };

    const handleNextClick = () => {
        setCurrentIdx((index) => (index < companies.length - 1 ? index + 1 : 0));
    };

    return (
        <>
            <div className="container">
                <h1 className='mt-6 mb-6 text-center rounded-full text-slate-950'>My experience</h1>
                <div className="flex justify-between">
                    <div className="previous-btn">
                        <button onClick={handlePrevClick} className="mt-20 rounded-full hover:bg-yellow-300 active:bg-orange-500 focus:outline-none focus:ring focus:ring-violet-300">
                            <img className='w-5 h-6' src="assets/left-arrow.png" alt="Previous" />
                        </button>
                    </div>

                    <div className="infor-experience w-80">
                        {companies[currentIdx]}
                    </div>

                    <div className="next-btn ">
                        <button onClick={handleNextClick} className="mt-20 rounded-full hover:bg-yellow-300 active:bg-orange-500 focus:outline-none focus:ring focus:ring-violet-300">
                            <img className='w-5 h-6' src="assets/right-arrow.png" alt="Next" />
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Experience;
