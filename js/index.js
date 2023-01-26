var currentSlide = 1;
var $slider = $(".slides");
var slideCount = $slider.children().length;
var slideTime = 3000;
var animationTime = 1000;

setInterval(function () {
  $slider.animate(
    {
      marginLeft: "-=1349px",
    },
    animationTime,
    function () {
      currentSlide++;
      if (currentSlide === slideCount) {
        currentSlide = 1;
        $(this).css("margin-left", "0px");
      }
    }
  );
}, slideTime);

/* document.getElementById("log").addEventListener("click", function() {
  document.querySelector(".popup").style.display = "flex"; 
}) */

/* document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none"; 
}) */
