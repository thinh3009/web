"use strict";
let sum1 = (x, y, z = false) => {
    if (z === false) {
        return x + y;
    }
    if (z) {
        return x - y;
    }
};
console.log(sum1(1, 2), sum1(1, 2, true));
