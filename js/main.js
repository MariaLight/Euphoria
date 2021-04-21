document.addEventListener('DOMContentLoaded', function () {

  let animSwiper = new Swiper('.anim-container', {
    slideClass: 'anim-slide',
    wrapperClass: 'anim-wrapper',
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.anim-button-next',
      prevEl: '.anim-button-prev',
    },

    watchOverflow: true,
    spaceBetween: 60,
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      1380: {
        slidesPerView: 5,
        spaceBetween: 40
      },
      1750: {
        slidesPerView: 5,
        spaceBetween: 50
      }
    }
  });
  $(function () {
    $("#accordion").accordion(
      {
        collapsible: true,
        active: false,
        heightStyle: 'content',
        animate: {
          duration: 500
        }
      }
    );

  });

  const accordionLinks = document.querySelectorAll('.accordion-item__link');
  const accordionBtns = document.querySelectorAll('.accordion-item__button');
  for (let i = 0; i < accordionLinks.length; ++i) {
    accordionLinks[i].addEventListener('click', function () {
      for (let j = 0; j < i; ++j) {
        accordionBtns[j].classList.remove('up');
      }
      for (let j = i+1; j < accordionLinks.length; ++j) {
        accordionBtns[j].classList.remove('up');
      }
      accordionBtns[i].classList.toggle('up');

    })
  }

  let gallerySwiper = new Swiper('.swiper-container', {
    // slideClass: 'gallery-slide',
    // wrapperClass: 'gallery-wrapper',
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.gallery-button-next',
      prevEl: '.gallery-button-prev',
    },
    pagination: {
      el: '.gallery-pagination',
      type: 'fraction',
    },

    slidesPerView: 2.3,
    watchOverflow: true,
    spaceBetween: 30,
    centeredSlides: true,
  });
  let feedbackSwiper = new Swiper('.feedback-container', {
    slideClass: 'feedback-slide',
    wrapperClass: 'feedback-wrapper',
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.feedback-button-next',
      prevEl: '.feedback-button-prev',
    },

    slidesPerView: 4.2,
    watchOverflow: true,
    spaceBetween: 30,
    centeredSlides: true,
  });

  let modalForm = document.querySelector('.modal');
  let modalBtn = document.querySelector('#banner-btn');
  let modalX = document.querySelector('.modal-x');
  modalBtn.addEventListener('click', function(){
    modalForm.classList.add('modal--open');
  })
  modalX.addEventListener('click', function(){
    modalForm.classList.remove('modal--open');
  }
  )

})