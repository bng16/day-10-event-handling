let clickCount =0;
const  clickButton=document.querySelector("#click-butt");
let clickText=document.querySelector("#click-text");
clickButton.addEventListener("click",()=>{
    clickCount++;
    clickText.innerText=`click ${clickCount}`;
})


let blurCount=0;
const imageHolder=document.querySelector('#image-holder');
const imageCover=document.querySelector('#cover');

imageHolder.addEventListener("dblclick",()=>{
    blurCount++;
    if(blurCount%2==0){
        imageCover.style.backgroundColor="rgba(255, 255, 255, 0.637)";

    }else{
        imageCover.style.backgroundColor="rgba(255, 255, 255, 0)";
    }
})

let colorChanging=document.querySelector("#color-changing");
colorChanging.addEventListener("mouseover",()=>{
    colorChanging.style.backgroundColor="blue";
})
colorChanging.addEventListener("mouseout",()=>{
    colorChanging.style.backgroundColor="red";
})

const body=document.querySelector("body");
body.addEventListener("keydown",(e)=>{
    console.log(e.key);
})



