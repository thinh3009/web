const url = 'https://dog.ceo/api/breeds/image/random';
const selectDiv = document.querySelector(".listname");
//add img
function taoAnh(posts) {
    //tao phan tu moi
    const createImg = document.createElement("img");
    // //set atribute img
    //createImg.setAttribute("src","../img/dog.jpg");
    createImg.src = `${posts.message}`;
    //them phan tu
    document.body.append(createImg);

}
function renderAnh(post){
    for(let i of post){
        const createImg=document.createElement("img");
        createImg.src=`${post.message}`;
        //them phan tu
        document.body.append(createImg);

    }
}
//tra ve stream cai luong du lieu
fetch(url)
    .then(function (response) {
        return response.json();
        //khi return se tra ve json.parse=> thanh js type luon
    })
    .then(function (posts) {
        console.log(posts);
        console.log(posts.message);
    
        //nho truyen tham so
        const btnClick=document.querySelector(".btn");
        btnClick.addEventListener("click",()=>{
            taoAnh(posts);
        })
       


    })
    .catch(function (err) {
        console.log(err);

    })

