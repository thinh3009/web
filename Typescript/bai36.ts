class Employee2{
    private _empCode:number;
    public firstName:string;//khong the truy cap duoc
    public lastName:string;//chi doc khong sua duoc
    constructor(_empCode:number,firstName:string,lastName:string){
        this._empCode=_empCode;
        this.firstName=firstName;
        this.lastName=lastName;
    }
    //getter setter
    get empCode(){
        return this._empCode;    
    }
    set EMP(empCode2:number){
        if(empCode2<0 || empCode2>150){
            throw Error("invalid age");
        }
        this._empCode=empCode2;
    }
}
let emp2=new Employee2(46,"thinh","nguyen");
//emp2.setAge(69)
//getter
let checkAge=emp2.empCode;
//setter
emp2.EMP=59;
console.log("code: ",emp2);//lay bang method (getter)
