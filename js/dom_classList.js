let ele=document.querySelector("#element");
//them 1 lop moi vao phan tu
ele.classList.add("newClass");
console.log(ele.classList.contains("newClass"));
//xoa lop khoi phan tu
ele.classList.remove("myClass")
//thay the lop cu bang lop moi
ele.classList.replace("newClass","abc");
//toggle:khong co thi them co thi khoi them
ele.classList.toggle("toggleClass");
//kiem tra class trong phan tu
console.log(ele.classList);

