//number
var test = 9.4;
var test2;
test2 = 10; //dat bien goi sau dung let
//string
var name2 = "thinh \"hoc gioi qua\"";
console.log("check name: ", name2);
//noi chuoi
var name3 = "ielts 8.0";
var name4 = "".concat(name3).concat(name2);
console.log(name4);
//boolean
// let status:boolean=false;
// let check:boolean=false;
// status=true;
//object
var pro1 = {
    name: "thinh",
    age: 20
};
console.log(pro1);
//array
var myArr = ["thinh", "hng", "erdvdd"];
myArr.push('buiducthinh');
myArr.push(450);
console.log("check arr: ", myArr);
//tuple:phai quan tam ve datatype, va vi tri
var skills = ['ok nhe', 30];
var skill2;
skill2 = ['thinh', true];
console.log(skill2);
//enum:let ke 1 nhom gia tri hang so
var API_STATUS;
(function (API_STATUS) {
    API_STATUS[API_STATUS["PENDING"] = 0] = "PENDING";
    API_STATUS[API_STATUS["FULLFILLED"] = 1] = "FULLFILLED";
    API_STATUS[API_STATUS["REJECTED"] = 2] = "REJECTED";
})(API_STATUS || (API_STATUS = {}));
var a = API_STATUS.PENDING;
var a2 = API_STATUS.FULLFILLED;
console.log("a1= ", a, "a2: ", a2);
//xem them enum
//any type
var myName = 'thinh';
//void type:khong muon tra ve gia tri
var sum = function (a, b) {
    return a + b;
};
console.log(sum(4, 5));
var handleLogs = function (message) {
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
