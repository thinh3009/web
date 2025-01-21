import React, { use } from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom
import { useState } from 'react'
// Tạo component App
// const ar1 = [1, 3, 23, 43];
const gifts=[
    'qua 1',
    'qua 2',
    'qua 3'
]
function App() {
    //co the dat useStae la bat ki loai du lieu nao
    //const total1=ar1.reduce((total, curl) => total + curl, 0);
    // const [infor, setInfor] = useState({name:'',age:''});//dat phep tinh
    // const handleAdd = (field,value) => {
    //     // const total = ar1.reduce((total, curl) => total + curl, 0);
    //     setInfor({...infor,[field]:value});

    // };
    // return (
    //     <div>
    //         <button onClick={handleAdd}>them</button>

    //         <input type="text" 
    //                 placeholder='ten' 
    //                 value={infor.name}
    //                 onChange={(e)=>handleAdd('name',e.target.value)}
    //                 />
    //         <input type="text" 
    //                 placeholder='tuoi' 
    //                 value={infor.age}
    //                 onChange={(e)=>handleAdd('age',e.target.value)}
    //                 />
    //         <p>Thông tin: {infor.name} - {infor.age} tuổi</p>

    //     </div>

    // )
    const randomGift=()=>{
        const index=Math.floor(Math.random()*gifts.length);
        setGift(gifts[index]);
        
    }
    const [gift,setGift]=useState();
    return(
        <div>
            <h1>
                {gift||'chua co qua'}
            </h1>
            <button onClick={randomGift}>Lay phan thuong</button>
        </div>
    )
}

// Render component App vào #root element
//ReactDOM.render(<App />, document.getElementById('root'))

//render react18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
