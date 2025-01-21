const closeBtn=document.querySelector('.close');
const modalBtn=document.querySelector('.modal')
const modal=document.querySelector('.modal-overplay');
const contain=document.querySelector('.comtainer');
modalBtn.addEventListener('click',()=>{
    modal.classList.add('open-modal');
    
})

closeBtn.addEventListener('click',()=>{
    modal.classList.remove('open-modal');
})