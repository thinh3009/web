//lay cac phan tu can thao tac

const progres=document.getElementById("progres");
const prev=document.getElementById("preview");
const next=document.getElementById("next");
const steps=document.querySelectorAll(".step");

//khoi tao gia tri ban dau cua buoc dang hoat dong
let currentActive=1;
//lang nghe su kien nut next
next.addEventListener("click",()=>{
    changeStep(1);//tang buoc len 1
});

//lang nghe su kien nut preview
prev.addEventListener("click",()=>{
    changeStep(-1);//giam buoc 1
});

function changeStep(step){
    currentActive+=step;//thay doi gia tri step
    update();//cap nhat lai giao dien

}
function update(){
    //duyet qua cac phan tu cua danh sach
    steps.forEach((step,idx)=>{
        if(idx<currentActive){
            step.classList.add("active");
        }
        else{
            step.classList.remove("active");
        }
    });
    //bat hoac tat nut dua tren currentActive
    prev.disabled=currentActive===1;//(goi nut disabled o ben css)
    next.disabled=currentActive===steps.length;//bang do dai cua step thi tat nut next
    //cap naht chieu rong
    progres.style.width=((currentActive-1)/(steps.length-1)*100+"%")
}


