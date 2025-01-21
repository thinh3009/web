class Employee{
    public empCode:string;
    private firstName:string;//khong the truy cap duoc
    readonly lastName:string;//chi doc khong sua duoc
    constructor(empCode:string,firstName:string,lastName:string){
        this.empCode=empCode;
        this.firstName=firstName;
        this.lastName=lastName;
    }
}
let emp=new Employee("123","thinh","nguyen");
emp.empCode="1233245";
// emp.firstName="thinh";
//emp.lastName="bui";