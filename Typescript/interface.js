"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//interface
var car = {
    type: "toyota",
    model: "inova",
    year: 2001
};
console.log(car);
;
;
;
var car1 = {
    type: "toyota",
    model: "inova",
    year: 2001
};
var user1 = {
    name: "thinh",
    age: 18,
    car: {
        type: "toyota",
        model: "corola",
        year: 2001
    }
};
var carCompany = {
    title: "toyota ",
    country: "japan",
    car: [
        {
            type: "toyota",
            model: "corola",
            year: 2002
        },
        {
            type: "toyota",
            model: "fotuner",
            year: 2002
        },
    ]
};
console.log(car1);
console.log(user1);
console.log(carCompany);
