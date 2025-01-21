
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
    const [checked, setChecked] = useState([])
    console.log(checked);
    const handleCheck = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                //uncheck
                return checked.filter(item => item !== id)
            }
            else {
                return [...prev, id]
            }
        })
    }
    const handleSubmit = () => {
        console.log({ id: checked });


    }
    return (
        <div className="App">
            {courses.map(course => (
                <div key={course.id}>
                    <input type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
                    />

                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>dang ky</button>
        </div>
    );
}
// filter,map,inclue,callback
export default App;
