//bai1
const hamDoiSo=(...number:number[])=>{
    return [...number]
}

console.log(hamDoiSo(1,2,3,4,5));


//bai2
function ketHop(){
    const mang1:number[]=[1,2,3,4,5];
    const mang2:any[]=[...mang1,'obama','donaltrump','kimjongun'];
    return mang2
}
console.log(ketHop());

//bai3

function doiSo(a: number, b: number, c: number): number {
    return a + b + c;
}

let so: [number, number, number] = [3, 4, 5];
let results = doiSo(...so);
console.log(results);

//bai4
function mergeObject(){
    const object1={
        name:"thinh",
        id:"6969",
        classId:"123ad"
    }
    const object2={
        dateOfBirth:"30/09/1220",
        address:"3423 ngo gia tu"
    }
    const object3={
        ...object1,
        ...object2
    }
    return object3
}
console.log(mergeObject());

//bai5

let mang1:any=[1,2,3,4,5,6];
function checkDup(){
    for(let i=0;i<mang1.length;i++){
        let mangNew:any=[...mang1,22,34,23,234,1,2,4];
        if(mangNew===mang1[i]){
            mangNew.remove(mang1[i]);

        }
        return mangNew;

    }


}
console.log(checkDup());

//bai5
let mang1: any = [1, 2, 3, 4, 5, 6];

function checkDup() {
  let mangNew: any = [...mang1, 22, 34, 23, 234, 1, 2, 4];
  for (let i = 0; i < mang1.length; i++) {
    if (mangNew.includes(mang1[i])) {
      mangNew = mangNew.filter((item: any) => item !== mang1[i]);
    }
  }
  return mangNew;
}

console.log(checkDup());

//bai_nangcao
//bai1
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, b: 4 };
const obj3 = { d: 5 };
function mergeObjects(obj1:any,obj2:any,obj3:any){
  const obj4={...obj1,...obj2,...obj3};
  return obj4;
}
console.log(mergeObjects(obj1,obj2,obj3));

//bai3
let mangRong:number[]=[];
function chunkArray(number:number[],size:number){
  for(let i=0;i<number.length;i++){
    const mangTach:number[]=number.slice(0,size) 
    mangRong.push(mangTach);
  }
}
const numbers = [1, 2, 3, 4, 5, 6, 7];
const chunkedArray = chunkArray(numbers, 3);
console.log(chunkedArray); // Output: [[1, 2, 3], [4, 5, 6], [7]]

//bai4
let mangRong: number[][] = [];

function chunkArray(numbers: number[], size: number): number[][] {
  mangRong = []; 
  for (let i = 0; i < numbers.length; i += size) {
    const mangTach: number[] = numbers.slice(i, i + size);
    mangRong.push(mangTach);
  }
  return mangRong;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
const chunkedArray = chunkArray(numbers, 3);
console.log(chunkedArray); 


//bai5



const pairs:(string|number)[][]=[['name', 'Alice'], ['age', 30], ['city', 'New York']];




