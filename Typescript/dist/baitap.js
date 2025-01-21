"use strict";
function getCheck(chuoi) {
    let check = true;
    let trueFalseArr = [];
    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i].includes('flick')) {
            check = !check;
        }
        trueFalseArr.push(check);
    }
    return trueFalseArr;
}
let chuoicon = ['hello', 'flick', 'name', 'hihi', 'ohno'];
console.log(getCheck(chuoicon));
