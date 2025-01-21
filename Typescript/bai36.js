var Employee2 = /** @class */ (function () {
    function Employee2(_empCode, firstName, lastName) {
        this._empCode = _empCode;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Employee2.prototype, "empCode", {
        //getter setter
        get: function () {
            return this._empCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee2.prototype, "EMP", {
        set: function (empCode2) {
            if (empCode2 < 0 || empCode2 > 150) {
                throw Error("invalid age");
            }
            this._empCode = empCode2;
        },
        enumerable: false,
        configurable: true
    });
    return Employee2;
}());
var emp2 = new Employee2(46, "thinh", "nguyen");
//emp2.setAge(69)
//getter
var checkAge = emp2.empCode;
//setter
emp2.EMP = 59;
console.log("code: ", emp2); //lay bang method (getter)
