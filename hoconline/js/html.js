//deu goi ham tu phia hrml


//do input submit nen return
function hello() {
    alert("xin chao hello");
    return false;
}


//input la button nen khong can return false
function hi() {
    alert("xin chao hi");

}

//goi ben phia html
let sub1 = document.querySelector("#sub1");
//dung onclick chi goi dc 1 cai duy nhat cai ma thay dau tien
sub1.onclick = hello;
// sub1.onclick=hi;

//cach goi thu2: addEventListener

let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", hello);
btn1.addEventListener("click", hi);

//dua len arrow fuction

let func1 = () => alert("day la function 1");

document.querySelector("#btn2").addEventListener("click", func1);
document.querySelector("#btn3").addEventListener("click", func1);

let btn5 = document.querySelector("#btn5");

btn5.addEventListener("click", () => {
    let user=document.querySelector("#user")
    user.classList.add("maunen");
    user.classList.add("mauvien");
});
//xoa css\
document.querySelector("#btn6").addEventListener("click",()=>{
    let user =document.querySelector("#user");
    //xoa tung cai
    user.classList.remove("maunen");
    user.classList.remove("mauvien");
    //xoa tat ca
    // user.className="";
});

document.querySelector("#btn7").addEventListener("click",()=>{
    let user =document.querySelector("#user");
    if(user.value.trim().length===0){
        user.setAttribute("class","maunen mauvien");
    }
    else{
        user.removeAttribute("class");
    }
});


