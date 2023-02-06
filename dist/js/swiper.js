const images = document.querySelectorAll('.slider-container .swiper-slide' );
const sliderLine = document.querySelector('.slider-container .swiper-wrapper');
let dots = document.querySelectorAll('.dots-item'),
    dotsArea = document.querySelector('.dots-block');
let count = 0;
let width;

function init() {
    //console.log('resize');
    width = document.querySelector('.swiper-container').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}
let timer = 0;
makeTimer(); //Создаем интервал
function makeTimer() {
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function() {
        scrollSlide(1);
        rollSlider(count);
    }, 5000);
}

init();
window.addEventListener('resize', init);

document.querySelector('.swiper-button-next').addEventListener('click', () => scrollSlide(1));

document.querySelector('.swiper-button-prev').addEventListener('click', () => scrollSlide(-1));

dots.forEach((dot, index) => dot.addEventListener('click', () => setSlide(index)));

function scrollSlide(direction) {
    count = (count + direction + images.length) % images.length;
    moveSlide();
}


function moveSlide() {
    document.querySelector('.dots-item.active').classList.remove('active');
    document.querySelectorAll('.dots-item')[count].classList.add('active');
      
    rollSlider();
    makeTimer();
}

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
//swiper 


const swiper = new swiper('.swiper-containerr', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
})




