//change event: su kien xay ra khi gia tri thay doi hoac mat focus
// const inputdrm=document.querySelector("#name");
// inputdrm.addEventListener("change",function(e){
//     console.log(e.target.value);
    
// });
//input event: khii thuc hien hanhf dong nhap yeu se bat su kien
const inputdrm=document.querySelector("#name");
inputdrm.addEventListener("input",function(e){
    console.log(e.target.value);
    const hi=document.querySelector("#hi");
    hi.textContent=e.target.value;
});
