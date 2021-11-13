var mySwiper = new Swiper(".swiper-container", {
  height: 400,
  slidesPerView: 1.3,
  spaceBetween: 15,
  centeredSlides: true,
  touchAngle: 45,
  breakpoints: {
    // when window width is <= 640px
    900: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
});
