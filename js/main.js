document.addEventListener('DOMContentLoaded', function () {

  const header = document.querySelector('.header');
  const banner = document.querySelector('.banner');
  const headerHeight = header.offsetHeight;
  let lastScrollTop = 0;


  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance > lastScrollTop) {
      header.classList.remove('header--fixed');
      banner.style.marginTop = null;

    }
    else {

      header.classList.add('header--fixed');
      banner.style.marginTop = `${headerHeight}px`;
    }

    if (scrollDistance === 0) {
      header.classList.remove('header--fixed');
      banner.style.marginTop = null;
    }
    lastScrollTop = scrollDistance;
  })



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
        slidesPerView: 1.8
      },
      1024: {
        slidesPerView: 3
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
      for (let j = i + 1; j < accordionLinks.length; ++j) {
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
    watchOverflow: true,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 1.7,
      },
      1245: {
        slidesPerView: 2,
      },
      1430: {
        slidesPerView: 2.3,

      }
    },

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
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 50,
        watchOverflow: 0,
      },
      1024: {
        slidesPerView: 3.5,
      },
      1245: {
        slidesPerView: 3.8,
      },
      1430: {
        slidesPerView: 4.2,

      }
    },
    watchOverflow: true,
    spaceBetween: 30,
    centeredSlides: true,
  });

  let modalForm = document.querySelector('.modal');
  let modalBtn = document.querySelector('#banner-btn');
  let modalX = document.querySelector('.modal-x');
  modalBtn.addEventListener('click', function () {
    modalForm.classList.add('modal--open');
  })
  modalX.addEventListener('click', function () {
    modalForm.classList.remove('modal--open');
  }
  )

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');

  burger.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    document.querySelector('.header-list').classList.toggle('container');
    document.querySelector('.burger-img-x').classList.toggle('is-open');
    document.querySelector('.burger-img').classList.toggle('closed');

  })

})