import React, { use } from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom
import { useState } from 'react'
//two way binding
const course=[{
    id:1,
    name:'reactjs'
},{
    id:2,
    name:'nodejs'
},{
    id:3,
    name:'angular'
}]
function App() {
    const[checked,setCheked]=useState([]);
    console.log(checked);
    const handleCheck=(id)=>{
        setCheked(prev=>{
            const isChecked=checked.includes(id);
            if(isChecked){
                return checked.filter(item=>item!==id);
            }
            else{
                return[...prev,id];
            }
        });
    }
    const handleSub=()=>{
        
        console.log({id:checked});
        
        
    }
    return(
        <div>
            {course.map(course=>(
                <div key={course.id}>
                    <input 
                        type="checkbox" 
                        checked={checked.includes(course.id)}
                        onChange={()=>handleCheck(course.id)} />
                    {course.name}
                    
                </div>
                
            ))}
            <button onClick={handleSub}>change</button>
        </div>
        
    )
}

// Render component App vào #root element
//ReactDOM.render(<App />, document.getElementById('root'))

//render react18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
