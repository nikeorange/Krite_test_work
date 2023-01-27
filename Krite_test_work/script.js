const headerDropdownCity = document.querySelector('.header__top__left__location__city');
const headerDropdownBtn = document.querySelector('.header__top__left__location__btn');
const headerDropdownList = document.querySelector('.header__top__left__location__dropdown');
const headerDropdownIcon = document.querySelector('.header__top__left__location__btn__icon');
const headerDropdownItem = document.querySelectorAll('.header__top__left__location__dropdown__list__item');

headerDropdownBtn.addEventListener('click', function(){
    headerDropdownList.classList.toggle('dropdown-hidden');
    headerDropdownIcon.classList.toggle('icon-rotate');
})

function clearDropdownItem(){
    headerDropdownItem.forEach(item => {
        item.classList.remove('dropdown-active-item')
    })
}

headerDropdownItem.forEach(item => {
    item.addEventListener('click', function(){
        clearDropdownItem();
        headerDropdownCity.innerHTML = item.innerHTML;
        item.classList.add('dropdown-active-item');
        headerDropdownList.classList.add('dropdown-hidden');
        headerDropdownIcon.classList.remove('icon-rotate');
    })
})


const swiperHero = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 100,
    navigation: {
        nextEl: '.hero__swiper__next',
        prevEl: '.hero__swiper__prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
})


const swiperSale = new Swiper('.sale__swiper', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    speed: 400,
    spaceBetween: 20,
    navigation: {
        nextEl: '.sale__swiper__next',
        prevEl: '.sale__swiper__prev',
    },
    breakpoints: {
    320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20
    },
    767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 40,
    },
    1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
    }
    }
})

const swiperButtons = document.querySelectorAll('.sale__swiper__btn');
const rings = document.querySelector('.rings');
const earrings = document.querySelector('.earrings');
const bracelets = document.querySelector('.bracelets');
const watch = document.querySelector('.watch');

function removeActive(){
    swiperButtons.forEach(btn => {
        btn.classList.remove('sale__swiper__btn-active');
    })
}

swiperButtons.forEach(btn => {
    btn.addEventListener('click', function(e){
        removeActive();
        e.target.classList.add('sale__swiper__btn-active')
    })
})

rings.addEventListener('click', function(){
    swiperSale.slideTo(0, 1000, false);
})

earrings.addEventListener('click', function(){
    swiperSale.slideTo(4, 1000, false)
})

bracelets.addEventListener('click', function(){
    swiperSale.slideTo(8, 1000, false)
})

watch.addEventListener('click', function(){
    swiperSale.slideTo(12, 1000, false)
})

const swiperProduct = new Swiper('.product__swiper', {
    slidesPerView: 1,
    speed: 400,
    pagination: {
        el: '.product__swiper__pagination',
        type: 'bullets',
        clickable: true
      },
})


const swiperDay = new Swiper('.day__swiper', {
    slidesPerView: 1,
    speed: 400,
    navigation: {
        nextEl: '.day__swiper__next',
        prevEl: '.day__swiper__prev',
      },
})

let target_date = new Date().getTime() + (1000*3600*13); 
let days, hours, minutes, seconds; 

const hour = document.querySelector('.countdown__hours');
const minute = document.querySelector('.countdown__minutes');
const second = document.querySelector('.countdown__seconds');
 
getCountdown();
 
setInterval(function () { getCountdown(); }, 1000);
 
function getCountdown(){
    let current_date = new Date().getTime();
    let seconds_left = (target_date - current_date) / 1000;

    hours = pad( parseInt(seconds_left / 3600));
    seconds_left = seconds_left % 3600;

    minutes = pad( parseInt(seconds_left / 60));
    seconds = pad( parseInt( seconds_left % 60));
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}

const colorBtn = document.querySelectorAll('.day__swiper__slide__right__colors__btn');

function clearColor(){
    colorBtn.forEach(btn =>{
        btn.classList.remove('color-active');
    })
}

colorBtn.forEach(btn => {
    btn.addEventListener('click', function(){
        clearColor();
        btn.classList.add('color-active');
    })
})

const sizeBtn = document.querySelectorAll('.day__swiper__slide__right__size__btn');

function clearSize(){
    sizeBtn.forEach(btn =>{
        btn.classList.remove('size-active');
    })
}

sizeBtn.forEach(btn => {
    btn.addEventListener('click', function(){
        clearSize();
        btn.classList.add('size-active');
    })
})

tippy('#myButton', {
    content: `<p class='tip__text'>Также как существующая теория напрямую зависит от экономической целесообразности принимаемых решений.</p>`,
    theme: 'primary',
    maxWidth: 271,
    allowHTML: true,
});

const swiperDayInner= new Swiper('.day__inner__swiper', {
    slidesPerView: 1,
    speed: 400,
    navigation: {
        nextEl: '.day__inner__next',
        prevEl: '.day__inner__prev',
      },
})


const body = document.querySelector('body');
const bg = document.querySelector('.burger-bg');
const burgerBtn = document.querySelector('.burger');
const burgerCloseBtn = document.querySelector('.burger__close');
const nav = document.querySelector('.header__bottom__nav');

burgerBtn.addEventListener('click', function(){
    nav.classList.add('nav-visible')
    bg.classList.add('burger-bg-active')
    body.style.overflow = 'hidden'
    window.scrollTo(0, 0);
})

function closeBurgerMenu(){
    nav.classList.remove('nav-visible')
    bg.classList.remove('burger-bg-active')
    body.style.overflow = 'scroll'
}

burgerCloseBtn.addEventListener('click', closeBurgerMenu)
bg.addEventListener('click', closeBurgerMenu)