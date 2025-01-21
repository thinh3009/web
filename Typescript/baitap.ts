// //baitap1
function getCheck(chuoi: string[]): boolean[] {
    let check: boolean = true;
    let trueFalseArr: boolean[] = [];

    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i].includes('flick')) {
            check = !check;
        }
        trueFalseArr.push(check);
    }

    return trueFalseArr;
}

let chuoicon: string[] = ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'];
console.log(getCheck(chuoicon));

//baitap2


function ThangMay(L:number,R:number,Call:number){
    let tinh1=Math.abs(Call-L);
    let tinh2=Math.abs(Call-R);
    if(tinh1<tinh2){
        return "L";
    }
    else{
        return "R";
    }


}   
console.log(ThangMay(0,1,1));

//baitap3
let x:number=0;
let y:number=0;
let check:number=0;
const mang:string[]=["3:1", "2:2", "0:1","3:1", "2:2", "0:1","3:1", "2:2", "0:1","3:1"];
for(let i of mang){
    //gan gia tri cho string
    x=parseInt(i[0]);
    y=parseInt(i[2]);
    if (x>y){
        check+=3
    }
    else if(x<y){
        check+=0
    }
    else{
        check+=1
    }
}
console.log(check);

//bai4
let theki:number = 2742;
let x:number = 0;
x=Math.ceil(theki/100);
console.log(x);

//bai5

let mang:number[]=[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68];
let mang2:number[]=[];
for(let i =0;i<=mang.length;i++){
    if(mang[i]%i===0){
        mang2.push(mang[i]);
        
    }
}
console.log(mang2);
