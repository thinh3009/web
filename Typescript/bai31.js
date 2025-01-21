//rest
// function getTotal(...numbers:number[]):number{
//     let total=0;
//     numbers.forEach((num)=>total+=num);
//     return total;
// }
function multi(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (x) { return n * x; });
}
var test31 = multi(10, 1, 2, 3, 4);
console.log("test", test31);
