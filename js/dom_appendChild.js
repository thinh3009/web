let parentElm=document.querySelector("#header");
console.log(parentElm);
//tao phan tu con moi
let p_elm=document.createElement("p");
p_elm.textContent="mot con chim non tren canh cay";
//them style
p_elm.style.color="red";
//them class cho the p;
p_elm.setAttribute("class","doan_van");

//sau khi co class moi duoc them ta co the tuy bien cho chun
//appendChild: khong them duoc van ban con append them duoc van ban
parentElm.appendChild(p_elm);
//2.appendChild co return, append khong co return
//3.
let h3=document.createElement("h3");
h3.textContent="day la h3";
parentElm.append(p_elm,h3);

//tao phan tu appendChild co gia tri tra ve
let btn=document.createElement("button");
btn.textContent="click tao";
//them phan tu moi vao phan tu cha va nhan ga trij tra ve
let addBtn=parentElm.appendChild(btn);
//gan su kien
addBtn.addEventListener("click",function(){
    alert("ban vua bam vao");
})