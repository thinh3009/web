const toggleBtn=document.querySelector('.sidebar-toggle');
const closeBtn=document.querySelector('.close-btn');
const sideBar=document.querySelector('.sidebar');

toggleBtn.addEventListener('click',()=>{
    console.log(sideBar.classList);
    // if(sideBar.classList.contains('show-sidebar')){
    //     sideBar.classList.remove('show-sidebar');
    // }
    // else{
    //     sideBar.classList.add('show-sidebar');
    // }

    //use toggle
    sideBar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click',()=>{
    sideBar.classList.remove('show-sidebar');
})