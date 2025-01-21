"use strict";
class Employee {
    constructor(empCode, firstName, lastName) {
        this.empCode = empCode;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let emp = new Employee("123", "thinh", "nguyen");
emp.empCode = "1233245";
// emp.firstName="thinh";
//emp.lastName="bui";
