
import './App.css';
import { useState } from 'react';

const gifts = [
    'cpu-i9',
    'ram ',
    'rgb 123'
]


function App() {
    const [gift, setGift] = useState();
    const randomGift=()=>{
        const index=Math.floor(Math.random()*gifts.length)
        setGift(gifts[index]);
        
    }
    return (
        <div className="App">
            <h1>{gift || 'chua co thuong'}</h1>
            <button onClick={randomGift}>lay phan thuong</button>
        </div>
    );
}

export default App;
