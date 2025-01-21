import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Cập nhật thời gian mỗi lần render
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup để huỷ timer khi component bị unmount
    return () => clearInterval(timer);
  }); // Không có mảng phụ thuộc

  return (
    <div>
      <h1>Đồng hồ</h1>
      <p>{time}</p>
    </div>
  );
}

export default Clock;