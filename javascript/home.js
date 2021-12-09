var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
      },
      "@0.75": {
        slidesPerView: 2,
      },
      "@1.00": {
        slidesPerView: 3,
      },
      "@1.50": {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }

  });

