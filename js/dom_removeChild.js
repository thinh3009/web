//removechild
//chon phan tu can xoa
let childrenElm=document.querySelector("#item2");
//chon phan tu can xoa
let ul=document.querySelector("#list");
//xoa 
ul.removeChild(childrenElm);
//cach2
let childrenElm2=document.querySelector("#item3");
childrenElm2.parentElement.removeChild(childrenElm2);
//cach khac dung remove()
let childrenElm3=document.querySelector("#item4");
//xoa
childrenElm3.remove();