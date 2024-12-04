function randomColor(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
let getbtn=document.querySelectorAll("button");
// for(let btn of getbtn){
//     //kiem tra btn la the hien cua html element
//     if(btn instanceof HTMLElement){
//         btn.addEventListener("click",()=>{
//             btn.style.backgroundColor=randomColor();
//             btn.style.color=randomColor();
//         });
//     }

// }

// //chon phan tu co class la title
// const titles=document.querySelectorAll(".title");

// for(let btnh1 of titles){
//     //kiem tra btn la the hien cua html element
//     if(btnh1 instanceof HTMLElement){
//         btnh1.addEventListener("click",()=>{
//             btnh1.style.backgroundColor=randomColor();
//             btnh1.style.color=randomColor();
//         });
//     }

// }

//chon phan tu co class la title
const titles=document.querySelectorAll(".title");


//su dung this
function changeColor(){
    this.style.backgroundColor=randomColor();
    this.style.color=randomColor();
}
//moi lan click doi mau
for(let btn of getbtn){
    btn.addEventListener("click",changeColor);
}
for(let btn2 of titles){
    btn2.addEventListener("click",changeColor);
}