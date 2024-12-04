const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", function(e) {
        //lay toa do button so voi viewport
        const buttonRec = e.target.getBoundingClientRect();
        console.log(buttonRec);
        //lay toa do click so voi viewport
        const x=e.clientX;
        const y=e.clientY;
        console.log(x,y);
        //tinh toa do chuot so voi button
        const xInside=x-buttonRec.left;
        const yInside=y-buttonRec.top;
        //them the span de them class circle
        const hinhTron=document.createElement("span");
        hinhTron.classList.add("circle");//add class moi
        hinhTron.style.top=yInside+"px";
        hinhTron.style.left=xInside+"px";
        
        this.appendChild(hinhTron);
        //set time out sau 500ms thhi xoa
        setTimeout(() => hinhTron.remove(),500);
        
    });
});