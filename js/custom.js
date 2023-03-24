// Initialize AOS
AOS.init();

// Header Section **************
const header = document.getElementById('header')


function stickyNavbar(){

    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        header.classList.add('sticky-header')
    }else{
        header.classList.remove('sticky-header')
    }
}

stickyNavbar()

document.addEventListener('scroll', () => stickyNavbar())


// Mobile Navbar
const navbarShowBtn = document.getElementById('navbar-show-btn')
const navbarHideBtn = document.getElementById('navbar-hide-btn')
const navbarWrapper = document.getElementById('nav-wrapper')

navbarShowBtn.addEventListener('click', function(){
    navbarWrapper.classList.add('show')
})

navbarHideBtn.addEventListener('click', function(){
    navbarWrapper.classList.remove('show')
})

// Testimonial Selection **************

let swiper = new Swiper(".testimonial-slider", {


    navigation: {
    nextEl: ".slider-prev",
    prevEl: ".slider-next",
    },

    autoplay: {
        delay: 3000,
      },
    loop: false,
});

// Back To Top  **************

const backTopBtn = document.getElementById('back-top')

window.addEventListener('scroll', function(){

    function backTopShow() {
    
        if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            backTopBtn.style.visibility = 'visible'
            backTopBtn.style.bottom = '30px'
    
        }else{
    
            backTopBtn.style.visibility = 'hidden'
            backTopBtn.style.bottom = '0'
        }
    }

    backTopShow()
    
})

backTopBtn.addEventListener('click', function(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    document.documentElement.style.transition = '.4s'
})