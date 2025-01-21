//overloading:
// khac tham so nhung truyen vao giong nhau nhung phai
//phai co ham tong de cong gop
 function addNumber(a:number,b:number):number{
    return a+b;
 }
function addString(a:string,b:string):string{
    return a+b;
}

function add11(a:number|string,b:number|string){
    if(typeof a==='number' && typeof b==='number'){
        return a+b;
    }
    if(typeof a==='string' && typeof b==='string'){
        return a+b;
    }

}

function addNew(a:number,b:number):number;
function addNew(a:string,b:string):string;
function addNew(a:any,b:any){
    return a+b;
}
console.log("check: ",addNew(6,7),addNew("thinh","23dsfsdf"));
