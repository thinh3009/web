//getelementbytagname
let li_item = document.getElementsByTagName("li");
console.log(li_item);
console.log(li_item.length);

//getelementbyclassname
let clas_item = document.getElementsByClassName("list");
console.log(clas_item);
clas_item[1].innerHTML = "thy"

//getelementbyid
let el = document.getElementById("list1");
el.innerHTML = "hoc gioi ghe";

//queryselector
let title = document.querySelector("#title");
console.log(title);
title.innerHTML = "new title";
//chon phan tu dau tien co class la list
let first_list = document.querySelector(".list");
first_list.innerHTML = "ditmemay";
//chon dc css ket hop(combine css)
let linkFirtIn = document.querySelector("ul a");
console.log(linkFirtIn);
//chon phan tu input checkbox 
let checkbox = document.querySelector("input");
checkbox.checked = true;
//queryselectorall
let list_item = document.querySelectorAll("li");
console.log(list_item);

list_item[1].innerHTML = "lien he voi chung toi";

//getattribute
const firstLink = document.querySelector("a");
console.log(firstLink);
//kiem tra ton tai the a
if (firstLink) {
    const linkHref = firstLink.getAttribute("href");
    console.log(linkHref);
}
else{
    console.log("khong tim ra");
    
}
//setattribute
firstLink.setAttribute("target","_blank");
//su dung queryselectorall
const links=document.querySelectorAll("ul a");

links.forEach((singleLink)=>{
    singleLink.setAttribute("target","_blank");
});

//bai tap
const color_blue=document.querySelector("h1");
console.log(color_blue);
const change=color_blue.setAttribute("style","color:blue");
console.log(change);

//removeattribute

let item1=document.querySelector(".list");
//kiem tra phan tu co thuoc tinh khong
console.log(item1.hasAttribute("class"));

let item2=document.querySelector("#title");
console.log(item2.hasAttribute("style"));
//removeattribute
item2.removeAttribute("style");
//bai tap

let delete_a=document.querySelectorAll("a");
delete_a.forEach((a)=>{
    a.removeAttribute("href");
})






