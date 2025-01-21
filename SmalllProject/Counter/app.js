let count=0;


//select value and button

const value=document.querySelector("#value");
const btn=document.querySelectorAll(".btn");

btn.forEach(function(btns){
    btns.addEventListener('click',function(e){
        const styles=e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count=0;
        }
        if(count>0){
            value.style.color='green';
        }
        if(count<0){
            value.style.color='red';
        }
        value.textContent=count;
        
    });
    
});