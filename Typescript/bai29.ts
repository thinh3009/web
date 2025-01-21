let sum1=(x:number,y:number,z?:number)=>{
    //dau cham hoi de thong bao co the co hoac khong co gia tri
    if(z){
        return x+y+z;
    }
    return x+y;
}
console.log("check: ",sum1(1,2),sum1(1,2,3));
