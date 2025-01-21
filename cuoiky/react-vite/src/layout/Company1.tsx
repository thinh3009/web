import React from 'react'

function Company1() {
    return (
        <div className='infor'>
            <div className="tag bg-green-300 h-70 p-4 rounded-3xl bg-gradient-to-r from-indigo-300 to-yellow-300">
                <div className="company flex justify-between mb-10">
                    <h2 className='text-red-500 bg-yellow-200 rounded-full pr-3 pl-3'>Company: </h2>
                    <span className='text-cyan-800'>TechLife</span>
                    <p className='bg-green-300 pl-1 pr-1 rounded-full'>2020-2024</p>
                </div>

                <ul>
                    <p className='text-red-500 bg-yellow-200 rounded-full pr-3 pl-3 mb-5'>Job position:</p>
                    <li>* Design data pipeline</li>
                    <li>* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus explicabo aliquam vero assumenda, praesentium reprehenderit placeat. Reprehenderit, est! Alias fugiat cupiditate itaque tempore dolorum nisi facere repudiandae expedita. In, magnam!</li>
                    <li>* Write document for web</li>
            
                </ul>

            </div>
        </div>
    )
}

export default Company1
