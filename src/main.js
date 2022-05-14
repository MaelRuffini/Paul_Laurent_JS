import './styles/style.css'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import gsap from 'gsap'
import Plyr from 'plyr';

// import load from './features/load.js';
// import home from './pages/home.js'
// import caseStudy from './pages/cs.js'
// import resume from './pages/resume.js'


// var isCs = document.querySelector('body').classList.contains('is--cs');
// if(isCs) {
//   caseStudy()
// }

// var isHome = document.querySelector('body').classList.contains('is--home');
// if(isHome) {
//   // load()
//   home()
// }

// var isResume = document.querySelector('body').classList.contains('is--resume');
// if(isResume) {
//   resume()
// }




const swiper = new Swiper('.swiper', {
  direction: "vertical",
  loop: true,
  mousewheel: true,
  keyboard: true,
  followFinger: false,
  effect: "slide",
  speed: 1200,
  controller: {
    inverse: true
  },
  parallax: true,
  // autoplay: {
  //     delay: 10000,
  //     disableOnInteraction: false,
  //   },
})

      swiper.on('slideChange', function () {
        let nextSlide = gsap.utils.selector('.swiper-slide-next');
        let prevSlide = gsap.utils.selector('.swiper-slide-prev');
        let currenSlide = gsap.utils.selector('.swiper-slide-active');
        let nextHeading = nextSlide('.home__hero__heading')
        let nextDivider = nextSlide('.home__hero__divider')
        let nextSubHeading = nextSlide('.home__hero__sub-heading')
        let prevHeading = prevSlide('.home__hero__heading')
        let prevDivider = prevSlide('.home__hero__divider')
        let prevSubHeading = prevSlide('.home__hero__sub-heading')
        let currentHeading = currenSlide('.home__hero__heading')
        let currentDivider = currenSlide('.home__hero__divider')
        let currentSubHeading = currenSlide('.home__hero__sub-heading')
        gsap.fromTo([nextHeading, prevHeading], { y: 15, opacity: 0 },{ y: 0, opacity: 1, delay: 1.2, duration: 0.3 } )
        gsap.fromTo([nextSubHeading, prevSubHeading], { y: 5, opacity: 0 },{ y: 0, opacity: 1, delay: 1.4, duration: 0.2 } )
        gsap.fromTo([nextDivider, prevDivider], { width:'0em' },{ width:'7em', delay: 1.2, duration: 0.2 } )
        gsap.fromTo([currentHeading, currentSubHeading], { opacity:1, y:0 }, {opacity: 0, y: -15, duration: 0.1 })
        gsap.fromTo(currentDivider, { width:'7em' },{ width:'0em', duration: 0.3 } )
      });
