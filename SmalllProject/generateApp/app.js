const url="https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";

const btnGenerate=document.querySelector('.btn');
const imgtag=document.querySelector('.img-font');

btnGenerate.addEventListener('click',()=>{
    const randomPic=Math.floor(Math.random()*150);
    const newImg=document.createElement('img');
    newImg.setAttribute('class','img');
    //add vao container
    const addToContainer=imgtag.appendChild(newImg);
    addToContainer.src=`${url}${randomPic}.png`;
    
    
    
});