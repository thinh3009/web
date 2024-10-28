document.querySelector("#f1").addEventListener("submit",(e)=>{
    //khai bao bat loi
    e.preventDefault();
    let error=false;
    //lay text la user xem xet
    let user=document.querySelector("#user");
    if(user.value.trim().length===0){
        document.querySelector("#usererr").innerHTML="<em>user is requirement</em>";
        user.classList.add("err-boder")
        error=true;
    }
    else{
        document.querySelector("#usererr").innerHTML="";
        user.classList.remove("err-boder")
    }

    if(!error){

    }
});