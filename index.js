var mySwiper = new Swiper(".swiper-container", {
  height: 400,
  slidesPerView: 0.8,
  spaceBetween: 25,
  centeredSlides: true,
  touchAngle: 45,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is <= 640px
    900: {
      slidesPerView: 0.8,
      spaceBetween: 25,
    },
  },
});
