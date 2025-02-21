// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// const swiper = new Swiper('.swiper', {
//   // containerModifierClass: 'swiper-container',
//   wrapperClass: 'swiper-wrapper',
//   slideClass: 'swiper-slide',
//   direction: 'horizontal',
//   centeredSlides: true,
//   loop: false,
//   freeMode: false,
//   resistance: true,
//   resistanceRatio: 0.85,

//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

// const swiperSlide = new Swiper('.mySwiper', {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//   },
// });

const swiper = new Swiper('.swiper', {
  loop: false,
  centeredSlides: true,
  direction: 'horizontal',
  lazyloading: true,
  // effect: 'fade',
  freeMode: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
