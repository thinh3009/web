//chon phan tu h1
let heading=document.querySelector("h1");
//thay doi style h1
// heading.style.backgroundColor="blue";
// heading.style.fontSize="46px";
// heading.style.color="red";

//cachh viet gom nhieu thuoc tinh
Object.assign(heading.style,{
    backgroundColor:"yellow",
    fontSize:"46px",
    color:"red"
})