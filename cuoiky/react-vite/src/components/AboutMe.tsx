import React from 'react'
import '../style/Aboutme.css'
function AboutMe() {
    return (
        <>
            <div className='container'>
                <h1 className='mt-6 mb-6 text-center rounded-full text-rose-100'>About me</h1>
                <img src="..\assets\quote.svg" alt="" className='q1' />
                <p className='mt-3 ml-6 text-rose-100'>
                    My name is Bui Duc Thinh now I am graduate in university of transport and communication in Ho Chi Minh city and my major is information technology.
                    <br />
                    Through of learning and experience I have to opporturnity to learn about how to learn and deisign a web site so I am very exited to find a job about design and develop the frontend for website

                </p>
                {/* <img src="..\assets\close_quote.svg" alt="" className='q2 absolute left-3 right-2.5' /> */}
                <div className="table-skill flex justify-around mt-10 ">
                    <div className="table1 w-40 h-40 relative rounded-2xl">
                        <p className='text-center'>Language</p>
                        <div className="img-contain ">
                            <img src="..\assets\c.svg" alt="" className="w-8 h-8 absolute left-20 bottom-3.5" />
                            <img src="..\assets\java-script.svg" alt="" className="w-8 h-8 absolute left-3" />
                            <img src="..\assets\css.svg" alt="" className="w-8 h-8 absolute left-3 bottom-3.5" />
                            <img src="..\assets\typescript.svg" alt="" className="w-8 h-8 absolute left-3 bottom-16" />
                            <img src="..\assets\python.svg" alt="" className="w-8 h-8 absolute left-20" />
                            <img src="..\assets\html-5-logo.svg" alt="" className="w-8 h-8 absolute left-20 bottom-16" />
                        </div>
                    </div>
                    <div className="table2 w-40 h-40 relative rounded-2xl">
                        <p className='text-center'>Frame Work</p>
                        <div className="img-contain">
                            <img src="..\assets\react.svg" alt="" className="w-16 h-16 absolute left-3 bottom-3.5 " />
                            <img src="..\assets\vite.svg" alt="" className="w-16 h-16 absolute left-20 " />
                        </div>
                    </div>
                    <div className="table3 w-40 h-40 relative rounded-2xl">
                        <p className='text-center'>Database</p>
                        <div className="img-contain">
                            <img src="..\assets\mysql.svg" alt="" className="w-14 h-14 absolute left-3 bottom-3.5" />
                            <img src="..\assets\postgresql.svg" alt="" className="w-14 h-14 absolute left-20 bottom-3.5" />
                            <img src="..\assets\sqlserver.svg" alt="" className="w-14 h-14 absolute left-3 bottom-30" />
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}

export default AboutMe
