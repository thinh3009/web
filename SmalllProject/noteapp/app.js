const noteContainer=document.querySelector('.notes-container');
const createBtn=document.querySelector('.btn');
let notes=document.querySelectorAll('.input-box');

function showNotes(){
    noteContainer.innerHTML=localStorage.getItem('notes');
}
showNotes();

function updateStorage(params){
    localStorage.setItem('notes',noteContainer.innerHTML);

}

createBtn.addEventListener('click',()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="https://th.bing.com/th/id/OIP.m98rRDOJFdK9GRT85luivQHaIF?rs=1&pid=ImgDetMain";
    noteContainer.appendChild(inputBox).appendChild(img);
});

noteContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll('.input-box');
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener('keydown',event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
