import React from "react";
import { useState, useEffect } from "react";
import "../style/Home.css"
export function Home() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        // Dọn dẹp bộ đếm thời gian
        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <div className="container">
                <div className="clock">
                    <p>{time}</p>
                </div>
                <img src="..\assets\anh_the.jpg" alt="" className="w-40 h-40 rounded-full ml-72" />
                <h1 className="ml-28 text-rose-100 mb-10 mt-10">Frontend developer</h1>
                <ul className="ml-40">
                    <li className="flex gap-4 mt-3 "><img src="..\assets\git.svg" alt="" /><a href="https://github.com/thinh3009" className="text-rose-100">https://github.com/thinh3009</a></li>
                    <li className="flex gap-4 mt-3 "><img src="..\assets\fb.svg" alt="" /><a href="https://www.facebook.com/buiducthinh3009/" className="text-rose-100">https://www.facebook.com/buiducthinh3009/</a></li>
                    <li className="flex gap-4 mt-3 "><img src="..\assets\linked.svg" alt="" /><a href="https://www.linkedin.com/in/buiducthinh3009/" className="text-rose-100">https://www.linkedin.com/in/buiducthinh3009/</a></li>
                    <li className="flex gap-4 mt-3 "><img src="..\assets\mail.svg" alt="" /><a href="" className="text-rose-100">buiducthinh9a1@gmail.com</a></li>
                    <li className="flex gap-4 mt-3 "><img src="..\assets\phone.svg" alt="" /><a href="" className="text-rose-100">0372823412</a></li>
                </ul>
            </div>

        </>




    )
}

export default Home

