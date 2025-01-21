type myType=number|string|object|boolean;

function addNumber(a:myType,b:number|string){
    if(typeof a==='number'&& typeof b==='number'){
        return a+b;
    }
    if(typeof a==='string' && typeof b==='string'){
        return a.concat(b);
    }
    throw new Error('parameter must be numvers or string');
}
console.log("check: ",addNumber(5,6));
