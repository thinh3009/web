import React, { useState } from 'react';

function CounterButtons() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');
  
  const handleChangeColor = () => {
    setColor(color === 'gray' ? 'green' : 'gray');
  };
  return (
    <div
      style={{
        backgroundColor: color,
        color: 'white',
        width: 400,
        height: 300,
      }}
    >      
	    <p>Bạn đã click nút: {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Tăng lên 1 đơn vị</button>
      <button onClick={handleChangeColor}>Đổi màu nền</button>
    </div>
  );
}

export default CounterButtons;