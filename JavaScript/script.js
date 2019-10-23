window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function () {
  $('#holisticCard').click(function() {
  $('html, body').animate({
    scrollTop: $("#holisticContent").offset().top
  }, 1000)
}), 
  $('div.middle').click(function (){
    $('html, body').animate({
      scrollTop: $("div.bottom").offset().top
    }, 1000)
  }),
  $('div.bottom').click(function (){
    $('html, body').animate({
      scrollTop: $("div.top").offset().top
    }, 1000)
  })
});
