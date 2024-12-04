// function check(){
//     alert("khong duoc de trong");
    
// }

// function submit_sucess(){
//     alert("nop thanh cong");

// }
// //goi ben phia html
// let btn1=document.querySelector("#submit-btn")
// btn1.addEventListener("click",submit_sucess);
// let text_input=document.querySelector("#input-name")
// text_input.addEventListener("mousemove",check);

// //
// text_input.addEventListener("mousemove",()=>{
//     text_input.classList.add("maunen");
// });

//submit chay kiem tra toan bo
document.querySelector("#f1").addEventListener("submit",(e)=>{//e:lang nghe su kien
    e.preventDefault();
    let error=false;
    let user=document.querySelector("#input-name");
    let mail=document.querySelector("#input-mail");
    let birth=document.querySelector("#input-birth");
    let age=document.querySelector("#input-age");
    let text=document.querySelector("#input-text")
    if(user.value.trim().length===0){
        document.querySelector("#err-mes").innerHTML="<em>user require</em>";
        user.classList.add("boder-err");
        error=true;
    }
    else{
        document.querySelector("#err-mes").innerHTML="";
        user.classList.remove("boder-err");
    }

    if(mail.value.trim().length===0){
        document.querySelector("#err-mail").innerHTML="<em>user require</em>";
        mail.classList.add("boder-err");
        error=true;
    }
    else{
        document.querySelector("#err-mail").innerHTML="";
        mail.classList.remove("boder-err");
        
    }
    //birth
    if(birth.value.trim().length===0){
        document.querySelector("#err-birth").innerHTML="<em>user require</em>";
        birth.classList.add("boder-err");
        
    }
    else{
        document.querySelector("#err-birth").innerHTML="";
        birth.classList.remove("boder-err");
       
    }
    //age
    if(age.value.trim().length===0){
        document.querySelector("#err-age").innerHTML="<em>user require</em>";
        age.classList.add("boder-err");
        error=true;
    }
    else{
        document.querySelector("#err-age").innerHTML="";
        age.classList.remove("boder-err");
       
    }
    //text
    if(text.value.trim().length===0){
        document.querySelector("#err-text").innerHTML="<em>user require</em>";
        text.classList.add("boder-err");
        error=true;
    }
    else{
        document.querySelector("#err-text").innerHTML="";
        text.classList.remove("boder-err");
      
    }
    if(!error){
        alert("gui du lieu thanh cong!");
    }
});