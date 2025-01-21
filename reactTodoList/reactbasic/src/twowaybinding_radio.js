
import './App.css';
import { useState } from 'react';

const courses = [
    {
        id: 1,
        name: 'html,css'
    },
    {
        id: 2,
        name: 'js,tsx'
    },
    {
        id: 3,
        name: 'python'
    }
]
function App() {
    const [checked,setChecked]=useState(2)
    console.log(checked);
    const handleSubmit = () => {
        console.log({id:checked});
        
        
    }
    return (
        <div className="App">
            {courses.map(course => (
                <div key={course.id}>
                    <input type="radio" 
                        checked={checked===course.id}
                        onChange={()=>setChecked(course.id)}
                    />

                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>dang ky</button>
        </div>
    );
}

export default App;
