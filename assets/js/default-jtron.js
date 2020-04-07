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
   // sticky = stick + 40;
   function myFunction() {
      if (window.pageYOffset > sticky) {
         navbar.classList.add("sticky", "nav-mobile-padding", "blue-transparant");
      } else {
         navbar.classList.remove("sticky", "nav-mobile-padding", "blue-transparant");
      }
   }

   var screenWidth = window.screen.width;
   var colDestinasi = document.getElementById("col-destinasi");
   console.log(screenWidth);
   if (screenWidth < 769) {
      colDestinasi.classList.remove("offset-sm-1", "col-sm-4");
      colDestinasi.classList.add("col-sm-5");
   }
   else {
      colDestinasi.classList.add("offset-sm-1", "col-sm-4");
      colDestinasi.classList.remove("col-sm-5");
   }
});

