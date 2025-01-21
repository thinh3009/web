
import './App.css';
import { useState } from 'react';


function App() {

  const [infor,setInfor]=useState({
    name:'thinh',
    age:18,
    address:'hanoi'
  })

  const handleUpdate=()=>{
    setInfor({...infor,bio:'thinh'})
  }
  return (
    <div className="App">
      <h1>{JSON.stringify(infor)}</h1>
      <button onClick={handleUpdate}>update</button>
    </div>
  );
}

export default App;
