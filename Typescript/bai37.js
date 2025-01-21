var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person3 = /** @class */ (function () {
    function Person3(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person3.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person3.prototype.describe = function () {
        return "this is ".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person3;
}());
//ke thua dung extend
var keThua = /** @class */ (function (_super) {
    __extends(keThua, _super);
    function keThua(firstName, lastName, jobTitle) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    keThua.prototype.describe = function () {
        return "".concat(_super.prototype.describe.call(this), "bui duc tinh"); //goi lop cha vao lop con
    };
    return keThua;
}(Person3));
var per = new keThua("bui", "thinh", "winner");
// let ke= new keThua("bui","thinh");
// let ke2=ke.describe();
console.log(per.getFullName());
console.log(per.describe());
