//https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png
//chon phan tu cha
// const container=document.querySelector("#container");
// let image="https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";
// const newImg=document.createElement("img");
// newImg.src=`${image}1.png`;
// //them phan tu con vao container
// container.appendChild(newImg);
//them nhieu hinh vao
// const container=document.querySelector("#container");
// let linkImg="https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";
// for(let i=0;i<=150;i++){
//     const newImg=document.createElement("img");
//     newImg.src=`${linkImg}${i}.png`;
//     container.appendChild(newImg);
// }

const container=document.querySelector("#container");
let linkImg="https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";
for(let i=0;i<=150;i++){
    const div_img=document.createElement("div");
    //khi tao xong the div phai them vao cuoi container
    const parentDiv=container.appendChild(div_img);
    //phan tu con
    const childImg=document.createElement("img");
    const add_div=parentDiv.appendChild(childImg);
    add_div.src=`${linkImg}${i+1}.png`;

    parentDiv.appendChild(add_div);
    const childSpan=document.createElement("span");
    childSpan.innerText=`#pokemon${i+1}`
    //sau khi tao the span xong phai append vao
    parentDiv.appendChild(childSpan);
    
    
    
}


