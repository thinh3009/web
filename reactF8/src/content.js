import React, { use, useState } from 'react'
import { useEffect } from "react"


//1.useEffect(callback)
// -->goi lai call back moi khi render
// --> goi call back sau khi them element vao dom

//2.useEffect(callback,[])
//-chi goi callback 1 lan sau khi component mount

//3.useEffect(callback,[deps])
//-Callback se duoc goi lai moi lan deps thay doi



//-------------------
//Callback luon duoc goi sau khi compponent mounted
//

const tabs=['posts','comments','albums']
function Content() {

    const [title, setTitle] = useState('')
    const[post,setPost]=useState([])
    const [type,setType]=useState('posts')
 
    
    useEffect(() => {
        console.log('title changed');
        
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(post => {
                setPost(post);

            })

    },[type])

    return (
        <div>
            {tabs.map(tab=>(
                <button
                    key={tab}
                    style={
                        type===tab?{
                            color:'#fff',
                            backgroundColor:"#333",
                        }:{}
                    }
                    onClick={()=>setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input type="text" name="" id="" value={title}
                onChange={e => setTitle(e.target.value)}
            />
            {/* {console.log('remember')} */}
            <ul>
                {post.map(pos=>(
                    <li key={pos.id}>{pos.title||pos.name}</li>
                ))}
               
            </ul>
        </div>

    )
}
export default Content