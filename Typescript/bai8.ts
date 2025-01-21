
//number
let test:number=9.4;
let test2:number;
test2=10;//dat bien goi sau dung let

//string
let name2:string="thinh \"hoc gioi qua\"";
console.log("check name: ",name2);

//noi chuoi
let name3:string=`ielts 8.0`;
let name4:string=`${name3}${name2}`;
console.log(name4);


//boolean
// let status:boolean=false;
// let check:boolean=false;
// status=true;

//object
let pro1:{
    name:string,
    age:number
} ={
    name:"thinh",
    age:20
}

console.log(pro1);

//array
let myArr:(string|number)[]=["thinh","hng","erdvdd"];
myArr.push('buiducthinh');
myArr.push(450);
console.log("check arr: ",myArr);

//tuple:phai quan tam ve datatype, va vi tri
let skills:[string,number] = ['ok nhe',30];
let skill2:[string,boolean,number?];
skill2=['thinh',true];
console.log(skill2);

//enum:let ke 1 nhom gia tri hang so
enum API_STATUS{
            PENDING, FULLFILLED, REJECTED
}
let a=API_STATUS.PENDING;
let a2=API_STATUS.FULLFILLED;
console.log("a1= ",a,"a2: ",a2);

//xem them enum

//any type
let myName:any='thinh';


//void type:khong muon tra ve gia tri
const sum=(a:number,b:number):number=>{
    return a+b;
}
console.log(sum(4,5));

const handleLogs=(message:string):void =>{
    console.log("mess: ",message);
    
}
console.log(handleLogs("hello"));


//never:khong bao gio tra ve gia tri
function handleException(errorMess:string):never{
    throw Error(errorMess);
}

function runInfinity():void{//void se tra ra undefined
    while(true){
        console.log("running.....");
        
    }
}
// let ab=runInfinity();
// console.log(ab);

//union type
function addNumber(a:number|string,b:number|string){
    if(typeof a==='number'&& typeof b==='number'){
        return a+b;
    }
    if(typeof a==='string' && typeof b==='string'){
        return a.concat(b);
    }
    throw new Error('parameter must be numvers or string');
}
console.log("check: ",addNumber(5,6));






