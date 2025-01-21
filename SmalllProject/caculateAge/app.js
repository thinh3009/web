const getText=document.querySelector('.input-text');
const calBtn=document.querySelector('.cal');
const container=document.querySelector('.container');

let curr=new Date().getFullYear();
console.log(curr);


function addAge(){
    const textDisplay=document.createElement('p');
    textDisplay.textContent=`Your age is: ${curr-getText.value}`;
    container.appendChild(textDisplay);
}
// calBtn.addEventListener('click',function(){
    
// })

