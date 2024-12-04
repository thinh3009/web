let thep1=document.getElementById("p1");

//the p1: la the p co id la 1
thep1.innerText="<b>xin chao</b>";

let thep2=document.getElementById("p2");
thep2.innerHTML="<b>xin chao</b>";

let mausac=document.getElementsByClassName("mausac");
mausac[0].style.background="red";//lay vi tri thu 0 cua class

let thepThu2=document.getElementsByTagName("p")[1];
thepThu2.style.color="blue";

//gom ve 1 mangr duyey
let arr=document.getElementsByTagName("p");
console.log(arr.length);
arr[1].style.background="yellow";

//dung querySelector de ket hop nhieu kieu
//neu id dung #
document.querySelector("#art1").style.background="green";
//neu la class dung .
document.querySelector(".classart").style.color="red";
//neu la the
document.querySelector("article").style.fontWeight="bold";

document.querySelector("article>p").style.color="pink";
//chi thao tac duoc voi doi tuong con dau tien khong dung duoc nhieu con(nen ket hop peusedo)
document.querySelector("section>p").style.color="blue";

//dung duyet
let mang=document.querySelectorAll("section>p");
for(let i=0;i<mang.length;i++){
    if(i===1){
        mang[i].style.background="orange";
    }
}