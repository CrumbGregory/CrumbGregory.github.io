const menuBurger = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__content');
const menuList = document.querySelector('.header__menu-list');
const menuListb = document.querySelector('.header__menu-listb');



if (menuBurger) {
   menuBurger.addEventListener("click", function(e) {
      document.body.classList.toggle('_lock');
      menuBurger.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

if (menuList) {
   menuList.addEventListener("click", function(e) {
      document.body.classList.remove('_lock');
      menuBurger.classList.remove('_active');
      menuBody.classList.remove('_active');
   });
}

if (menuListb) {
   menuListb.addEventListener("click", function(e) {
      document.body.classList.remove('_lock');
      menuBurger.classList.remove('_active');
      menuBody.classList.remove('_active');
   });
}

new Swiper('.image-slider', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },

   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },

   autoHeight: true,

   loop: true,

   preloadImages: false,

   lazy: {
      loadOnTransitionStart : false,
      loadPrevNext: false,
   },
   watchSlidesProgress: true,
   watchSlidesМшышишдшен: true,
});