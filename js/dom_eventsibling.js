//event-eventbubbling-stopProgram-capture

const child=document.querySelector("#child");
const parent=document.querySelector("#parent");
const grandparent=document.querySelector("#grandparent");

// child.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log("child click");
    
// });

// parent.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log("parent clicked");
    
// });

// grandparent.addEventListener("click",()=>{
//     console.log("grand parent clicked");
    
// });



//dung capture
// child.addEventListener("click",()=>{
   
//     console.log("child click");
    
// },
// true
// );

// parent.addEventListener("click",()=>{

//     console.log("parent clicked");
    
// },
// true

// );

// grandparent.addEventListener("click",()=>{
//     console.log("grand parent clicked");
    
// },
// true
// );

//stopPropagation:ngan chan duoc su kien cua cha nhung 
//khong ngan chan su kien con cung bac
// child.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log("child click");
    
// });

// child.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log("child click2");
    
// });


// parent.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log("parent clicked");
    
// });

// grandparent.addEventListener("click",()=>{
  
//     console.log("grand parent clicked");
    
// });

//stopImmediatePropagation:ngan chan duoc su kien cung bac
child.addEventListener("click",(e)=>{
    e.stopImmediatePropagation();
    console.log("child click");
    
});

child.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("child click2");
    
});


parent.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("parent clicked");
    
});

grandparent.addEventListener("click",()=>{
  
    console.log("grand parent clicked");
    
});