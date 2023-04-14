const currentSlideWidth = window.innerWidth;

new Swiper('.slider__block', {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 2500,
    // disableOnInteraction: false,
  },
});
if (currentSlideWidth > 992) {
  new Swiper('.strategy__right', {
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 800,
    loop: true,
    autoplay: {
      delay: 2500,
      // disableOnInteraction: false,
    },
    // direction: 'vertical',
  });
}
