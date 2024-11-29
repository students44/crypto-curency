var navOpener = document.querySelector(".navBar-toggler");
var navCloser = document.querySelector(".nav-closer span");
var navBar = document.querySelector(".nabvar-link");
var body = document.querySelector("html");

navBar.addEventListener("click", function(){
	navBar.style.right = "0";

},true)
navOpener.addEventListener('click', function(){
	navBar.style.right = "0";

},true);

navCloser.addEventListener('click', function(){
	navBar.style.right = "-100%";

},true);

body.addEventListener('click', function(){
	navBar.style.right = '-100%';

},true)


// NAVBAR STICKY 

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        // navbar_height = document.querySelector('.navbar').offsetHeight;
        // document.body.style.paddingTop = 60 + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
});