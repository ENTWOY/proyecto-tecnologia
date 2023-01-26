/* Animacion de letras */
/* var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
}).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
}); */
/* ============================================================================== */
/* Animacion de cambio de imagenes */
var imgs=new Array("img/anuncio1.jpg","img/anuncio2.jpg","img/pc_gaming.png");
var imgs1=new Array("img/anuncio2.jpg","img/anuncio3.jpg","img/anuncio1.jpg");
var imgs2=new Array("img/anuncio3.jpg","img/anuncio1.jpg","img/anuncio2.jpg");
var c=0;

function animationImgs()
{
    c++;
    if(c>=3) {c=0;}
    document.getElementById("imgCam").setAttribute("src",imgs[c]);
    document.getElementById("imgCam2").setAttribute("src",imgs1[c]);
    document.getElementById("imgCam3").setAttribute("src",imgs2[c]);
    setTimeout("animationImgs()",5000);
}
/* =============================================================================== */
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
})
.add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
}).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
}).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});

/* ======================================= */
/* NEXT AND PREV */
$(document).ready(function(){
    $('.next').click(function(){ /* SIGUIENTE */
        $('.pagination').find('.pageNumber.active').next().addClass('active');
        $('.pagination').find('.pageNumber.active').prev().removeClass('active');
    })

    $('.prev').click(function(){ /* ANTERIOR */
        $('.pagination').find('.pageNumber.active').prev().addClass('active');
        $('.pagination').find('.pageNumber.active').next().removeClass('active');
    })
})