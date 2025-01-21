"use strict";
//number
let test = 9.4;
let test2;
test2 = 10; //dat bien goi sau dung let
//string
let name2 = "thinh \"hoc gioi qua\"";
console.log("check name: ", name2);
//noi chuoi
let name3 = `ielts 8.0`;
let name4 = `${name3}${name2}`;
console.log(name4);
//boolean
// let status:boolean=false;
// let check:boolean=false;
// status=true;
//object
let pro1 = {
    name: "thinh",
    age: 20
};
console.log(pro1);
//array
let myArr = ["thinh", "hng", "erdvdd"];
myArr.push('buiducthinh');
myArr.push(450);
console.log("check arr: ", myArr);
//tuple:phai quan tam ve datatype, va vi tri
let skills = ['ok nhe', 30];
let skill2;
skill2 = ['thinh', true];
console.log(skill2);
//enum:let ke 1 nhom gia tri hang so
var API_STATUS;
(function (API_STATUS) {
    API_STATUS[API_STATUS["PENDING"] = 0] = "PENDING";
    API_STATUS[API_STATUS["FULLFILLED"] = 1] = "FULLFILLED";
    API_STATUS[API_STATUS["REJECTED"] = 2] = "REJECTED";
})(API_STATUS || (API_STATUS = {}));
let a = API_STATUS.PENDING;
let a2 = API_STATUS.FULLFILLED;
console.log("a1= ", a, "a2: ", a2);
//xem them enum
//any type
let myName = 'thinh';
//void type:khong muon tra ve gia tri
const sum = (a, b) => {
    return a + b;
};
console.log(sum(4, 5));
const handleLogs = (message) => {
    console.log("mess: ", message);
};
console.log(handleLogs("hello"));
//never:khong bao gio tra ve gia tri
function handleException(errorMess) {
    throw Error(errorMess);
}
function runInfinity() {
    while (true) {
        console.log("running.....");
    }
}
// let ab=runInfinity();
// console.log(ab);
//union type
function addNumber(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('parameter must be numvers or string');
}
console.log("check: ", addNumber(5, 6));
