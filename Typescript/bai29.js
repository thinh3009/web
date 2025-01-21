var sum1 = function (x, y, z) {
    if (z) {
        return x + y + z;
    }
    return x + y;
};
console.log("check: ", sum1(1, 2), sum1(1, 2, 3));
