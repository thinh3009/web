const clickSide=document.querySelectorAll(".panel");
clickSide.forEach((item)=>{
    //xuat ra gia tri item
    console.log(item);
    //lang nghe su kien click
    item.addEventListener("click",()=>{
        //xoa class active cua panel khac
        removeActive();
        //them class active cho panel
        item.classList.add("active");
    });
});
function removeActive(){
    //duyet tung phan tu trong danh sach panel
    // clickSide.forEach(item=>{
    //     //xoa class active
    //     item.classList.remove("active");

    // });
    for(let i of clickSide){
        i.classList.remove("active");
    };
}