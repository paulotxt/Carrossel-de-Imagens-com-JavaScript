const imgs = document.getElementById("img");
const img =document.querySelectorAll("#img img ");

let slid= 0;

function carrossel (){

    slid++;

    if ( slid > img.length- 1){
        slid=0;
    }
    imgs.style.transform = `translateX( ${-slid* 800}px)`;
}
setInterval (carrossel, 1800);