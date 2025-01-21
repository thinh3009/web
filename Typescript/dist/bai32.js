"use strict";
//overloading:
// khac tham so nhung truyen vao giong nhau nhung phai
//phai co ham tong de cong gop
function addNumber(a, b) {
    return a + b;
}
function addString(a, b) {
    return a + b;
}
function add11(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
}
function addNew(a, b) {
    return a + b;
}
console.log("check: ", addNew(6, 7), addNew("thinh", "23dsfsdf"));
