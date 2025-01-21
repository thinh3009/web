import { Children, Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyComponent from './MyComponent'
import MyProps from './props'
import ParentComponent from './parentComponent'
import Avatar from './Avatar'
import './App.css'
import CounterButtons from './CounterButton'
import CounterApp from './CountApp'
function App() {

  //useState:gia tri hien tai dung de cap nhat gia tri
  const count=useState(0);
  //dung destructuring de lay gia tri
  const [countValue,setCountValue]=count;
  console.log(count);
  const handleClick2=()=>{
    setCountValue(countValue+1);
    console.log('count:',count);
    
  }

  const handleClick = () => {
   
    alert("ban da bam vao");
  }
  //lan truyen trong react
  const PhatPhim=(e:Event)=>{
    e.stopPropagation()
    alert('bat dau phat')
  }
  


  return (
    
    <>
      {/* fagment de boc neu co nhieu the long nhau */}
      <Fragment>
        <h1 className='name'>helloworld</h1>
        <h1 className='name'>helloworld</h1>

      </Fragment>
      <div>
        <MyComponent />
        <MyProps myName="thinh" />
        <Avatar
          avartarUrl="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1w3IiF.img?w=612&h=459&m=6"
          name="thinh"
          note="sieu nhan gao">
          <label htmlFor="">hello this is label</label>
        </Avatar>
        <button onClick={handleClick}>
          click me
        </button>

        //lan truyen trong react
        <div
          className="Toolbar"
          onClick={() => {
            
            alert("Bạn đã nhấp chuột vào thanh công cụ!");
          }}
        >
          //goi e:Event la su kien de chong lan truyen trong react
          <button onClick={(e:Event)=>{PhatPhim(e)}}>Phát phim</button><br />
          <button onClick={() => alert("Đang tải lên!")}>Tải lên hình ảnh</button>
        </div>

      </div>

      //useState
      <div>
        <span>{countValue}</span>
        <button onClick={handleClick2}>increase up</button>
      </div>
      
      <div>
        <CounterButtons />
      </div>

      //truyen cha con
      //truyen con sang cha:dung callback


      //truyen component cung cap
      

    </>
  )
}

export default App
