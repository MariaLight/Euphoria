document.addEventListener('DOMContentLoaded', function () {

    let mySwiper = new Swiper('.swiper-container', {

        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

          slidesPerView: 5,
          watchOverflow: true,
          spaceBetween: 95,
          centeredSlides: true,
    });

    const accordionLinks = document.querySelectorAll('.accordion-item__link');
    const accordionBtns = document.querySelectorAll('.accordion-item__btn');
    for (let i = 0; i < accordionLinks.length; ++i) {
      accordionLinks[i].addEventListener('click', function () {
        accordionBtns[i].classList.toggle('cross');
      })
    }


})