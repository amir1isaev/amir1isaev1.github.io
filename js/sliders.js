var mySwiper = new Swiper('.swiper-container', {
   autoHeight: true,
   // // Optional parameters
   // direction: 'vertical',
   // loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },
   loop: true,
   autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnteraction: false,
   },
   speed: 2000,

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
   },
})