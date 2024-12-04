const btn=document.querySelector("#btn");
btn.addEventListener("click",()=>{
    //thay doi mau nen
 
    document.body.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    //thay doi the h1
    const h1=document.querySelector("#title");
    h1.textContent=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
})