var slideImg = document.getElementById('slideImg');

var images = new Array(
    "./img/carousel-1.jpg",
    "./img/carousel-2.jpg",
    "./img/carosel-3.jpg"

);

var len = images.length;
var i = 0;

function slider(){
    if(i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3500);
}

