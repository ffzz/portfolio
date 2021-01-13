
const menuBtn = document.querySelector('.header__menu-btn');
const navMQ = document.querySelector('.header__nav--mq-l');
let toggle = 0;
menuBtn.addEventListener('click', function(){
        if(toggle === 0) {
            navMQ.classList.add('show');
            menuBtn.classList.replace('header__menu-btn', 'header__menu-btn-close')
            return toggle = 1;
        } else if (toggle === 1) {
            navMQ.classList.remove('show');
            menuBtn.classList.replace('header__menu-btn-close', 'header__menu-btn')
            return toggle = 0;
        }
        
})

const navFixed = document.getElementById('nav-fixed')
navFixed.addEventListener('click', function(){
        if(toggle === 0) {
            navMQ.classList.add('show');
            menuBtn.classList.replace('header__menu-btn', 'header__menu-btn-close')
            return toggle = 1;
        } else if (toggle === 1) {
            navMQ.classList.remove('show');
            menuBtn.classList.replace('header__menu-btn-close', 'header__menu-btn')
            return toggle = 0;
        }
})


// this function to set window scroll step by step and slow down gradually
 function scrollVertically(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        let step = (target - window.scrollY) / 10;
        // console.log(target);
        // console.log(window.screenY);
        step = step > 0 ? Math.ceil(step) : Math.round(step);
        if (step === 0) {
            clearInterval(obj.timer);
            callback && callback();
        }
        console.log(target);
        console.log(window.scrollY);
        console.log(target - window.scrollY);

        window.scroll(0, window.scrollY + step);
        // console.log(window.scrollY + step);
    }, 15);
    
}

// get element
let backToTop = document.querySelector('.footer__back-to-top');
// click and back to top
backToTop.addEventListener('click', function(){
    scrollVertically(window, 0);
})

//the fixed navbar display when scroll to second page;
let header = document.querySelector('.header')
let aboutMe = document.querySelector('.about-me')
let aboutMePos = aboutMe.offsetTop;

document.addEventListener('scroll', function(e) {
    if(window.innerWidth < 1024){
        header.style.display = 'flex';
    } else {
        if(window.scrollY >= aboutMePos) {
            header.style.display = 'flex';
        } else {
            header.style.display = 'none';
        }
    }
})

