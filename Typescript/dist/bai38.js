"use strict";
class Circle {
    constructor() {
        this.test = 69;
    }
    static caculate(radius) {
        return this.pi * radius * radius;
    }
}
Circle.pi = 3.14;
let t = new Circle();
console.log(Circle.caculate(10));
//goi method static bang 
// cach goi class truc tiep khong can tao object
