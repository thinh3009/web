const form=document.querySelector("#form");
const get_ul=document.querySelector("#list_item");
form.addEventListener("submit",(e)=>{
    e.preventDefault();//ngan ngua submit mac dinh
  
    //lay gia tri username pass
    const user=document.getElementById("username").value;//phai co value de lay dc text
    const pass=document.getElementById("pass").value;
    //tao the moi
    const createli=document.createElement("li");
    createli.textContent=user+":"+pass;
    
    //them the
    get_ul.append(createli);
    //reset form
    form.reset();
});

//xoa phan tu li khi click vao
const lis=document.querySelectorAll("li");
console.log(lis);
//duyet qua danh sach li
// for(let li of lis){
//     //lang nghe su kien click
//     li.addEventListener("click",()=>{
//         li.remove();
//     });
// }
//khi them the li moi thi k lang nghe dc su kien click
//dung event delegation
get_ul.addEventListener("click",(e)=>{
    const li=e.target;
    //li.remove();
    //kiem tra xem the duoc click co phai li khong
    if(li.tagName==="LI"){
        li.remove();
    }
})