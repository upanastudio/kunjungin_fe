


$(document).ready(function () {
   $('.owl-carousel').owlCarousel({
      center: true,
      items: 4,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 1750,
      autoplayHoverPause: true,
      responsive: {
         0: {
            items: 1,
            nav: false
         },
         600: {
            items: 3,
            nav: false
         },
         1000: {
            items: 5,
            nav: false,
            loop: true
         }
      }
   });


   window.onscroll = function () { myFunction() };
   var navbar = document.getElementById("navbar_mobile");
   var sticky = navbar.offsetTop;
   function myFunction() {
      console.log("jalanji");
      if (window.pageYOffset > sticky) {

         navbar.classList.add("sticky");
      } else {

         navbar.classList.remove("sticky");
      }
   }
});

