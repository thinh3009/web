let btn=document.querySelectorAll(".btn");
//duyet for 
for(let b of btn){
    //dung dieu kien de kiem tra btn co phair thuoc tinh tkhong
    if(b instanceof HTMLElement){
        b.style.backgroundColor="blue";
        b.innerHTML="bam vao di cu";
        b.style.fontSize="2em";
        b.style.color="yellow"
    }
}

//36.11:truy cap parent,child,sibling
let elem=document.querySelector(".hero__content");
//1.truy cap phan tu cha
console.log(elem.parentElement);
elem.parentElement.style.backgroundColor="red";
//2.truy cap phan tu con
console.log(elem.children);


//3.truyu cap phan tu anh em
console.log(elem.children[1].nextElementSibling);

//4.previousElementSibling chon phan tu anh em truoc do
console.log(elem.children[1].previousElementSibling);

//append
const newImg=document.createElement("img");
console.log(newImg);

//kiem tra toan bo thuoc tinh va phuong thc 
console.dir(newImg);
//set attribute
// newImg.setAttribute("src","./assets/img/doc2.png");
//cach2:

newImg.src="./assets/img/doc2.png";

//append: them vao 1 phan tu da co san
//them phan tu moi vao cuoi phan tu body
document.body.append(newImg);
newImg.setAttribute("alt","this is img");
document.body.append(newImg);
//set chieu rong
newImg.style.width="100vw";
//them the p
const newText=document.createElement("p");
newText.textContent="xin chao toi la thinh";
document.body.append(newText);
//them 1 phan tu khac
const p=document.querySelector(".hero__desc");
p.append("song cau okookokokokokdfesf");

//vd: them nhieu phan tu vao phan tu cha
let e1=document.createElement("p");
e1.textContent="day la doan van moi them";

let e2=document.createElement("p");
e2.textContent="day la doan van 2";
//lay phan tu cha
let container=document.querySelector(".hero__heading");
//them nhieu phan tu moi vao phan tu cha
container.append(e1,e2,"show cam ")

//prepend: them vao dau
container.prepend("xin chao toi la vy beo");