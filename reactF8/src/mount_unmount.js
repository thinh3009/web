import React from 'react'; 
import ReactDOM from 'react-dom/client'; 

import Content from "./content"
import { useState } from "react"


function App(){
    const [show,setShow]=useState(false)


    return(
        <div style={{padding:20}}>
            <button onClick={()=>setShow(!show)}>
                Toggle
            </button>
            {show && <Content/>}

        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />
  
);
