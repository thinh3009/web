"use strict";
class Person3 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    describe() {
        return `this is ${this.firstName} ${this.lastName}`;
    }
}
//ke thua dung extend
class keThua extends Person3 {
    constructor(firstName, lastName, jobTitle) {
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    describe() {
        return `${super.describe()}bui duc tinh`; //goi lop cha vao lop con
    }
}
let per = new keThua("bui", "thinh", "winner");
// let ke= new keThua("bui","thinh");
// let ke2=ke.describe();
console.log(per.getFullName());
console.log(per.describe());
