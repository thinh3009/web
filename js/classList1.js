//lay phan tu can tuon tac
let element=document.getElementById("myElement");
//1.them mot lop moi vao phan tu
element.classList.add("newClass");
//kiem tra xem phan tu co chua lop cu the khong
console.log(element.classList.contains("myClass"));


//3.xoas mot lop phan tu
element.classList.remove("newClass");
//kiem tra phan tu co chua lop cu the khong
console.log(element.classList.contains("newClass"));
//4.thay the lop cu bang lop mwoiw
element.classList.replace("myClass","classToi");

//5. neu lop da ton tai ==> loai bo no, 
//   neu khong ==> them lop vao phan tu
element.classList.toggle("toggleClas");


//xem cac class trong phhan tu
console.log(element.classList);
