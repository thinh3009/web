// import React, { useEffect, useState } from 'react'
import ProgresBar from '../layout/ProgresBar'
import Pro from '../types/Bar';
const Skill: React.FC<Pro> = () => {
  // color
  const testData = [
    { bgcolor: "#6a1b9a", completed: 75 },
    { bgcolor: "#00695c", completed: 80 },
    { bgcolor: "#3D81CF", completed: 54 },
    { bgcolor: "#CF3D3D", completed: 69 },
    { bgcolor: "#CDCB30", completed: 90 },
    { bgcolor: "#EEE31C", completed: 89 },
    { bgcolor: "#EEE31C", completed: 45 },
  ];
  


  return (
    <>
      <div className='container'>
        <p className='text-center mt-3 bg-stone-50 rounded-lg w-40 mb-3'>Language</p>
        <div className="lang flex flex-wrap justify-around bg-gradient-to-r from-yellow-500 to-green-500 rounded-2xl">
          
          <div className="js flex items-center">
            <img src="..\assets\java-script.svg" alt="" className='w-8 h-8'/>
            <ProgresBar bgcolor={testData[0].bgcolor} completed={testData[0].completed} />

          </div>
          <div className="html flex items-center">
            <img src="..\assets\html-5-logo.svg" alt="" className='w-8 h-8'/>
            <ProgresBar bgcolor={testData[2].bgcolor} completed={testData[2].completed} />
          </div>
          <div className="css flex items-center">
            <img src="..\assets\css.svg" alt="" className='w-8 h-8'/>
            <ProgresBar bgcolor={testData[3].bgcolor} completed={testData[3].completed} />

          </div>
          <div className="csharp flex items-center">
            <img src="..\assets\c.svg" alt="" className='w-8 h-8'/>
            <ProgresBar bgcolor={testData[2].bgcolor} completed={testData[2].completed} />
          </div>
          <div className="ts flex items-center">
            <img src="..\assets\typescript.svg" alt="" className='w-8 h-8'/>
            <ProgresBar bgcolor={testData[3].bgcolor} completed={testData[3].completed} />

          </div>
          <div className="py flex items-center">
            <img src="..\assets\python.svg" alt="" className='w-8 h-8'/>
            <ProgresBar bgcolor={testData[4].bgcolor} completed={testData[4].completed} />
          </div>
        </div>
        <p className='text-center mt-3 bg-stone-50 rounded-lg w-40 mb-3'>FrameWork and library</p>
        <div className="frame flex flex-wrap bg-gradient-to-r from-zinc-300 to-orange-400 rounded-2xl">
          <div className="reactts flex items-center ml-3">
            <img src="..\assets\react.svg" alt="" className='w-8 h-8'/>
            <ProgresBar bgcolor={testData[3].bgcolor} completed={testData[3].completed} />
          </div>
          <div className="vite flex items-center">
            <img src="..\assets\vite.svg" alt="" className='w-8 h-8'/>
            <ProgresBar bgcolor={testData[2].bgcolor} completed={testData[2].completed} />
          </div>
          <div className="taildwind flex items-center ml-3">
            <img src="..\assets\taildwind.svg" alt="" className='w-8 h-8'/>
            <ProgresBar bgcolor={testData[6].bgcolor} completed={testData[6].completed} />
          </div>
        </div>
        <p className='text-center mt-3 bg-stone-50 rounded-lg w-40 mb-3'>Database</p>
        <div className="data flex flex-wrap bg-gradient-to-r from-yellow-500 to-green-500 rounded-2xl">
          <div className="sqlms flex items-center ml-3">
            <img src="..\assets\sqlserver.svg" alt="" className='w-8 h-8'/>
            <ProgresBar bgcolor={testData[5].bgcolor} completed={testData[5].completed} />
          </div>
          <div className="sqlpost flex items-center">
            <img src="..\assets\postgresql.svg" alt="" className='w-8 h-8'/>
            <ProgresBar bgcolor={testData[2].bgcolor} completed={testData[2].completed} />
          </div>
          <div className="sqlpost flex items-center ml-3">
            <img src="..\assets\mysql.svg" alt="" className='w-8 h-8'/>
            <ProgresBar bgcolor={testData[2].bgcolor} completed={testData[2].completed} />
          </div>
        </div>
      </div>

    </>

  )
}

export default Skill
