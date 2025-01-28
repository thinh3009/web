import React, { useState } from "react";
import Project1 from "../layout/Project1";
import Project2 from "../layout/Project2";
import Project3 from "../layout/Project3";
function Project() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    };
    const projectWork = [<Project1 />, <Project2 />, <Project3 />];
    const [currentIdx, setCurrentIdx] = useState(0);
    const handlePrevClick = () => {
        setCurrentIdx((index) => (index > 0 ? index - 1 : projectWork.length - 1));
    };

    const handleNextClick = () => {
        setCurrentIdx((index) => (index < projectWork.length - 1 ? index + 1 : 0));
    };

    return (
        <>
            <div className="container">
                <h1 className='mt-6 mb-6 text-center rounded-full text-slate-950'>My project</h1>
                <div className="flex justify-between">
                    <div className="previous-btn ">
                        <button onClick={handlePrevClick} className="mt-60 rounded-full hover:bg-yellow-300 active:bg-orange-500 focus:outline-none focus:ring focus:ring-violet-300">
                            <img className='w-5 h-6' src="assets/left-arrow.png" alt="Previous" />
                        </button>
                    </div>

                    <div className="infor-project w-3/5 ml-20">
                        <div className="flex gap-6 items-center">
                            <img src="assets/pen.svg" alt="" className="w-6 h-6" />
                            <button className="bg-lime-300 rounded-full" onClick={handleClick}>{click ? "Hide project" : "Show project"}</button>

                        </div>

                        {click && (
                            projectWork[currentIdx]
                        )}
                    </div>
                    <div className="next-btn">
                        <button onClick={handleNextClick} className="mt-60 rounded-full hover:bg-yellow-300 active:bg-orange-500 focus:outline-none focus:ring focus:ring-violet-300">
                            <img className='w-5 h-6' src="assets/right-arrow.png" alt="Next" />
                        </button>
                    </div>
                </div>
            </div>





        </>

    )
}
export default Project