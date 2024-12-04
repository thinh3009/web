const btn=document.getElementById("btn3");
//1.function expression
// btn.addEventListener("click",function(){
//     alert("ban da bam vao");
// })
//2.function decleration
// function handClick(){
//     alert("ban da bam");
// }
// btn.addEventListener("click",handClick);
//3.arrow function
btn.addEventListener("click",()=>{
    alert("ban da bam di may");
})

//loi ich cuar addEventlistenter
//1. co the kiem tra nhieu su kien cho cung mot phan tu
const btn4=document.getElementById("btn4");
function hand1(){
    alert("day la su kien 1");
}
function hand2(){
    alert("day la su kien 2");
}
//them su kien
// btn4.addEventListener("click",hand1);
// btn4.addEventListener("click",hand2);

//dung event level 0 thi bi ghi de
// btn4.onclick=hand1;
// btn4.onclick=hand2;

//xoa su kien
btn4.removeEventListener("click",hand1);

//co the su dung su kien voi options
//{once:true}: dung de goi duoc 1 lan 2 su kien sau lan do chi goi duoc 1 su kien
btn4.addEventListener("click",hand1,{once:true});
btn4.addEventListener("click",hand2);