const form=document.querySelector("#login");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("form da dc submit");
    
});

//vd thuc te
const form1=document.querySelector('#login');
const user=document.querySelector("#name");
form1.addEventListener("submit",function(e){
    //preventDefault: ngan chan hanh vi mac dinh cua su kien
    e.preventDefault();
    console.log(user.value);
    const ul_create=document.querySelector("ul");
    const pass=document.querySelector("#password");
    let li=document.createElement("li");
    li.innerText=user.value;
    ul_create.appendChild(li);
    //reset input
    user.value="";
    pass.value="";

});

//ngan khong choh the a chyuen
const link=document.querySelector("a");
link.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("link da bam!!!!");
    
});