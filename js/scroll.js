window.addEventListener('DOMContentLoaded', function () {
    // this function to set window scroll step by step and slow down gradually
    function scrollVertically(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            let step = (target - window.scrollY) / 10;
            step = step > 0 ? Math.ceil(step) : Math.round(step);
            if (step === 0) {
                clearInterval(obj.timer);
                callback && callback();
            }
            console.log(target);
            console.log(window.scrollY);
            console.log(target - window.scrollY);

            window.scroll(0, window.scrollY + step);
        }, 15);
        
    }

// get element
    let nav = document.querySelector('.nav');
    // let navAboutMe = document.getElementById('hhh')
    let header = document.querySelector('.header')
    let home = document.querySelector('.home');
    let aboutMe = document.querySelector('.about-me')
    let resume = document.querySelector('.resume');
    let projects = document.querySelector('.projects');
    let contact = document.querySelector('.contact');
    let backToTop = document.querySelector('.footer__back-to-top');

    let aboutMePos = aboutMe.offsetTop;
    let resumePos = resume.offsetTop - 80;
    let projectsPos = projects.offsetTop;
    let contactPos = contact.offsetTop;
    let homePos = home.offsetTop;
// click and back to top
    backToTop.addEventListener('click', function(){
        scrollVertically(window, 0);
    })

    // this function to locate page when click nav bottom
    function locatePage(e) {
        let target = e.target;
        let navList = {
            'Home': homePos,
             'About Me': aboutMePos, 
             'Resume': resumePos, 
             'Projects': projectsPos, 
             'Contact Me': contactPos
            };
        for(let i in navAboutMe) {
            if (target.innerText === i) {
                scrollVertically(window, navList[i]);
            }
        }
        
    }

// toggle nav
    nav = addEventListener('click', locatePage);



    // let resumeTop = resume.scrollTop;
    document.addEventListener('scroll', function(e) {
        // console.log(resumeTop);
        // console.log(window.scrollY);      
        if(window.scrollY >= aboutMePos) {
            header.style.display = 'flex';
        } else if(window.scrollY <= 100) {
            header.style.display = 'none';
        }

        // if(window.scrollY >= aboutMePos){
        //    navAboutMe.classList.add('nav-hover-style');
        // } else if(window.scrollY <= resumePos) {
        //     navAboutMe.className = '';
        // }

        // if(resumeTop >= 1) {
        //     scrollVertically(window, resumePos);
        // }
        

    });
})

let nav = document.querySelectorAll('.nav');
for(let i = 0; i < nav.length; i++) {
    for(let j = 0; j < nav[i].length; i++) {
        nav[i].addEventListener('click', function(){
            if(nav[i].innerHTML.includes('Home')) {
                document.querySelector('.home').scrollIntoView({behavior: 'auto'})
            } else if(nav[i].innerHTML.includes('About Me')) {
                document.querySelector('.about-me').scrollIntoView({behavior: 'auto'})
            } 
        })
    }
}
document.querySelector('.contact').scrollIntoView({behavior: 'smooth'})