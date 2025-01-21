"use strict";
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
