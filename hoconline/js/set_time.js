let btn1=document.querySelector("#btn1");
let thread1
let check=true;
btn1.addEventListener('click',function(){
    //se bat dau chay sau 1 giay
    /*thread1=setInterval(()=>{
        let date = new Date();
        document.querySelector("#showtime").innerHTML=date.toLocaleTimeString();

    },1000);*/

    //dung 1 nut 2 chuc nang
    if(check){
        thread1=setInterval(()=>{
            let date= new Date();
            document.querySelector("#showtime").innerHTML=date.toLocaleTimeString();
        },1000);
        check=false;

    }
    else{
        clearInterval(thread1);
        check=true;
    }

});

//setInterval: lap di lap lai sau moi khoang thoi gian
//clearInterval
let btn2=document.querySelector("#btn2");
btn2.addEventListener('click',()=>{
    clearInterval(thread1);
    document.querySelector("#showtime").innerHTML="";
});

//setTimeout: chi chay 1 lan sau 1 khoang tg
//setInterval:se lap lai sau moi khoang tg
//clearInterval:dung viec lap lai setInterval(phai cho 1 bien de dung)