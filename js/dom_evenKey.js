const inp=document.querySelector("#inp");
inp.addEventListener("keydown",function(){
    console.log("key down");
    
});
inp.addEventListener("keyup",function(){
    console.log("key up");
    
});
//e (even object): dung bat su kien tren ban phim
inp.addEventListener("keydown",function(e){
    console.log(e.key);
    console.log(e.code);
    
    
});

//vd
document.addEventListener("keydown",(e)=>{
    if(e.code==="KeyR"){
        document.body.style.backgroundColor="cyan";
    }
})