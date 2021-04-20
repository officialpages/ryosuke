document.addEventListener('DOMContentLoaded', function() {
  new MobileMenu();
  const swiper = new Swiper('.hero-swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: 'fade',
    centerdSlides: true,
    slidesPerView: 1,
    //duration
    speed: 1500,
    autoplay: {
      delay: 3000
    }
  });

  const swiper2 = new Swiper('.actual-swiper-container', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

//   const el = document.querySelector('.career__image');
//   const options = {
//             root: document.querySelector('.carreer__inner'),
//             rootMargin: "-200px",
//             threshold: 0,
//             once: true
//   }
// const cd = function(entries, observer) {
//   entries.forEach(entry => {
//     //要素が画面が入ったとき
//     if (entry.isIntersecting) {
//       entry.target.classList.toggle('inview');
//       observer.unobserve(entry.target);
//       //要素が画面が出たとき
//     }
//   });
// }
// const io = new IntersectionObserver(cd, options);
// io.observe(el);

});