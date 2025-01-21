//rest

// function getTotal(...numbers:number[]):number{
//     let total=0;
//     numbers.forEach((num)=>total+=num);
//     return total;
// }

function multi(n:number,...m:number[]):number[]{//m:la array number
    
    return m.map((x)=>n*x);//map chay tung phan tu 1
}
const test31=multi(10,1,2,3,4);

console.log("test",test31);

function Great(n:string,...m:string[]){
    
    return n+" "+m.join(",")+"!";
}
console.log(Great("xn chao","thinh"));

