let parentElm=document.querySelector("#container");
//them 100 nut
for(let i=0;i<100;i++){
    let button=document.createElement("button");
    button.innerText="buton"+(i+1);
    //them phan tu moi vao phan tu cha
    parentElm.appendChild(button);
    //neu i le doi mau nen
    if(i%2===1){
        button.style.backgroundColor="green";
    }
}