const arr=['red','green','blue','orange','yellow','purple'];
const btn=document.querySelector('.btn');
const color=document.querySelector('.color');

btn.addEventListener('click',()=>{
    const random=Math.floor(Math.random()*arr.length);
    document.body.style.backgroundColor=arr[random];
    color.textContent=arr[random];
})