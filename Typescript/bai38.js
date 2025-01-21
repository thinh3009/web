var Circle = /** @class */ (function () {
    function Circle() {
        this.test = 69;
    }
    Circle.caculate = function (radius) {
        return this.pi * radius * radius;
    };
    Circle.pi = 3.14;
    return Circle;
}());
console.log(Circle.caculate(10));
