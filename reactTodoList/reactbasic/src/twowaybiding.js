
import './App.css';
import { useState } from 'react';


function App() {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')

    const handleSubmit=()=>{
        console.log({
            name,mail
        });
        
    }
    return (
        <div className="App">
            <input type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input type="text"
                value={mail}
                onChange={e => setMail(e.target.value)}
            />
            <button onClick={handleSubmit}>dang ky</button>
        </div>
    );
}

export default App;
