var swiper = new Swiper(".mySwiper", {
    spaceBetween: 35,
    slidesPerView: 3    ,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

let btn=document.querySelector('.header__btn')
let overlay=document.querySelector('.overlay')
let close=document.querySelector('.close')

btn.addEventListener(  'click', () => {
    overlay.style.display ='flex'
})

close.addEventListener(  'click', () => {
    overlay.style.display ='none'
})

overlay.addEventListener(  'click', (e) => {
    if(e.target.className === 'overlay'){
        overlay.style.display ='none'
    }

})


let burger =document.querySelector( '.header__burger')
let burgerMenu =document.querySelector( '.header__burger-menu')

burger.addEventListener('click', () =>{
    burger.classList.toggle('active')
    burgerMenu.classList.toggle('active')
})


