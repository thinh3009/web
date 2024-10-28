//tao object
//object khac json
//key khong can dau nhay
let sinhvien={
    //key:value
    fullname:"buiducthinh",
    age:20,
    gender:true,
    hobbies:["reading","coding","music"],
    //value la object{}
    adress:{
        city:"HCM",
        country:"vietNam"
    },
    //value la expression function: co the truy cap key value
    //this dai dien cho objecct sinh vien
    hello:function(){
        return this.fullname;
    },
    //value la arrow function:khong the truy cap key value
    //khong cos this
    hi:()=>{
        return "buiducthinh";
    },

};

document.querySelector("#btn1").addEventListener("click",()=>{
    document.querySelector("#show").innerHTML=
        `ten=${sinhvien.fullname}, tuoi=${sinhvien.age},diachi=${sinhvien.adress.country},hello=${sinhvien.hello()}`;
});

//luu thong tin duoi may ng dung
//cookie phai duoi 2mb, co thoi gian ton tai
//localstorage: luu tru duoi may ng dung,khong gioi han ton tai
//luu xuong may ng dung
localStorage.setItem("sinhvien",JSON.stringify(sinhvien))


localStorage.setItem("fullname",sinhvien.fullname);

alert(localStorage.getItem("sinhvien"));
//xoa du lieu trong localstore
//localStorage.removeItem("sinhvien");

//xoa sach
localStorage.clear();
