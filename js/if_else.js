let dtb=Number(prompt("nhap diem: "));
        //kiem tra dieu kien
        if(dtb<=10 && dtb>=8){
            console.log("gioi");
        }
        else if (8>dtb>=6.5){
            console.log("kha");
        }
        else if(6.5>dtb>=5){
            console.log("tb");

        }
        else if(dtb>0 && dtb<5){
            console.log("yeu");

        }
        else{
            console.log("sai cu phap");
        }