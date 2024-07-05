let currentSlideNumber=0;
function changeSlide(index){
    let container=document.querySelector(".container");
    container.style.translate=`-${index*25}% 0px`;
}

function left(){
    currentSlideNumber--;
    if(currentSlideNumber<0)
       currentSlideNumber=3;
    changeSlide(currentSlideNumber);
}

function right(){
    currentSlideNumber++;
    if(currentSlideNumber>3)
       currentSlideNumber=0;
    changeSlide(currentSlideNumber);
}



let interVal=setInterval(right,3000);

function disableInterVal(){
    clearInterval(interVal);
}

function enableInterVal(){
    interVal=setInterval(right,3000);
}