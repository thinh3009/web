import { StringLiteral } from "typescript";

//interface
const car:{type:string,model:string,year:number}={
    type:"toyota",
    model:"inova",
    year:2001

};
console.log(car);

//dung interface de tai su dung 
interface Car{
    type:string;
    model:string;
    year:number;
};

interface User{
    name:string;
    age:number;
    car:Car;
};
interface CarCompany{
    title:string;
    country:string;
    car:Car[];
};
const car1:Car={
    type:"toyota",
    model:"inova",
    year:2001
};
const user1:User={
    name:"thinh",
    age:18,
    car:{
        type:"toyota",
        model:"corola",
        year:2001
    }
}

const carCompany:CarCompany={
    title:"toyota ",
    country:"japan",
    car:[
        {
            type:"toyota",
            model:"corola",
            year:2002
        },
        {
            type:"toyota",
            model:"fotuner",
            year:2002
        },
    ]
}
console.log(car1);
console.log(user1);
console.log(carCompany);
