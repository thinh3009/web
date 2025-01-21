const theReview=[
    {
        id:1,
        name:'susan smith',
        job:'web designer',
        img:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text:"culpa unde adipisci dolorem rem? Vitae, mollitia.Nam ipsam ducimus consectetur ipsum ipsa a dolore! Illum adipisci vel accusamus sit. Eligendi perspiciatis asperiores voluptate, ex officia expedita, quasi rerum suscipit veniam placeat doloremb sequi praesentium ab delectus",
    
    
    },
    {
        id:2,
        name:'susan girl',
        job:'web designer',
        img:'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text:"culpa unde adipisci dolorem rem? Vitae, mollitia.Nam ipsam ducimus consectetur ipsum ipsa a dolore! Illum adipisci vel accusamus sit. Eligendi perspiciatis asperiores voluptate, ex officia expedita, quasi rerum suscipit veniam placeat doloremb sequi praesentium ab delectus",
    
    },
    {
        id:3,
        name:'martin nam',
        job:'web designer',
        img:'https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text:"culpa unde adipisci dolorem rem? Vitae, mollitia.Nam ipsam ducimus consectetur ipsum ipsa a dolore! Illum adipisci vel accusamus sit. Eligendi perspiciatis asperiores voluptate, ex officia expedita, quasi rerum suscipit veniam placeat doloremb sequi praesentium ab delectus",
    
    },
    {
        id:4,
        name:'angle hung',
        job:'web designer',
        img:'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text:"culpa unde adipisci dolorem rem? Vitae, mollitia.Nam ipsam ducimus consectetur ipsum ipsa a dolore! Illum adipisci vel accusamus sit. Eligendi perspiciatis asperiores voluptate, ex officia expedita, quasi rerum suscipit veniam placeat doloremb sequi praesentium ab delectus"
    
    }
];

//select item
const img=document.querySelector('.avatar');
const author=document.querySelector('#author');
const job=document.querySelector('#job');
const info=document.querySelector('.info');

prevBtn=document.querySelector(".prev-btn");
nextBtn=document.querySelector(".next-btn");
sup=document.querySelector(".sup");

//set starting item
let currentItem=0;
//load item
window.addEventListener("DOMContentLoaded",()=>{
    showPerson();

    
});

//show per based item

function showPerson(){
    const item=theReview[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

//show next person
nextBtn.addEventListener("click",()=>{
    currentItem++;
    if(currentItem>theReview.length-1){
        currentItem=0;
    }
    showPerson();
});
//show prev person
prevBtn.addEventListener("click",()=>{
    currentItem--;
    if(currentItem<0){
        currentItem=theReview.length-1;

    }
    showPerson();
});

//show random person
sup.addEventListener('click',()=>{
    currentItem=Math.floor(Math.random()*theReview.length);
    showPerson();
})