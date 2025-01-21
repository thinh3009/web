class Circle{
    static pi:number=3.14;
    public test:number=69;

    static caculate(radius:number){
        return this.pi*radius*radius;
    }

}
let t = new Circle();
console.log(Circle.caculate(10));
//goi method static bang 
// cach goi class truc tiep khong can tao object
