//la phuong phap bat su kien bang cach 
//gan trucv tiep mot hamf js cho thuoc tinh sy kien cua phan tu HTML
//1.1. xac dinh phan tu co id la btn
const btn1=document.getElementById("btn");
//1.fuction expression
// btn1.onclick=function(){
//     alert("ban da click vao button");
// };
//2.dunmg function decleration
// function clickH(){
//     alert("ban da bam vao")
// }
// btn1.onclick=clickH;
//3. dung arrow function
btn1.onclick=()=>{
    alert("bn da bam nut")
}

//vidu2
function mouseOver(){
    document.getElementById("message").textContent="dua chuot vao";
}

function mouseOut(){
    document.getElementById("message").textContent="dua chuot ra";
}
function setup(){
    var button=document.getElementById("btn2");
    button.onmouseover=mouseOver;
    button.onmouseout=mouseOut;
}
//setup();

//su kien onload doi tuong window 
window.onload=setup;
