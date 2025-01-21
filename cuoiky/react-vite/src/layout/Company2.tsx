import React from 'react'

function Company2() {
    return (
        <div className='infor'>
            <div className="tag bg-green-300 h-70 p-4 rounded-3xl bg-gradient-to-r from-red-800 to-emerald-300">
                <div className="company flex justify-between mb-10">
                    <h2 className='text-slate-900 bg-rose-400 rounded-full pr-3 pl-3'>Company: </h2>
                    <span className='text-yellow-400'>MP4</span>
                    <p className='bg-green-300 pl-1 pr-1 rounded-full'>2020-2022</p>
                </div>

                <ul className='text-slate-200'>
                    <p className='text-slate-900 bg-rose-400 rounded-full pr-3 pl-3 mb-5'>Job position:</p>
                    <li>* Design data pipeline</li>
                    <li>* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus explicabo aliquam vero assumenda, praesentium reprehenderit placeat. Reprehenderit, est! Alias fugiat cupiditate itaque tempore dolorum nisi facere repudiandae expedita. In, magnam!</li>
                    <li>* Write document for web</li>
            
                </ul>

            </div>
        </div>
    )
}

export default Company2
