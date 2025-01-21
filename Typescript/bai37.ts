class Person3{
    firstName:string;
    lastName:string;

    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getFullName():string{
        return `${this.firstName} ${this.lastName}`;
    }
    describe():string{
        return `this is ${this.firstName} ${this.lastName}`;
    }
}

//ke thua dung extend
class keThua extends Person3{
    private jobTitle;
    constructor(firstName:string,lastName:string,jobTitle:string){
        super(firstName,lastName);
        this.jobTitle=jobTitle;
    }
    describe(): string {
        return `${super.describe()}bui duc tinh`;//goi lop cha vao lop con
    }
}

let per= new keThua("bui","thinh","winner");
// let ke= new keThua("bui","thinh");
// let ke2=ke.describe();
console.log(per.getFullName());
console.log(per.describe());


