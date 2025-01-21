class Person{
    ssn:string;
    firstName:string;
    lastName:string;

    constructor(ssn:string,firstName:string,lastName:string){
        this.ssn=ssn;
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getFullName():string{
        return `${this.firstName} ${this.lastName}`;
    }
    
}
let hoc= new Person("123","thinh","bui");
console.log(hoc.getFullName());

    