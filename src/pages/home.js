import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import gsap from 'gsap'

function home() 
{
    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        noSwipingClass: 'home__hero__cl-item',
        loop: true,
        mousewheel: true,
        speed: 1200,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
          },
        keyboard: {
            enabled: true,
          },
        effect: 'creative',
        creativeEffect: {
        prev: {
          translate: [0, 0, -0.2],
        },
        next: {
          translate: [0, '100%', 0.2],
        },
      },
      })
    
      swiper.on('transitionStart', function () {
        var videos = document.querySelectorAll('video');
        Array.prototype.forEach.call(videos, function(video){
        video.pause();
        });
      });
    
      swiper.on('transitionEnd', function () {
        var activeIndex = this.activeIndex;
        var activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
        var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
        activeSlideVideo.play();
      });
    
      swiper.on('slideChange', function () {
        let nextSlide = gsap.utils.selector('.swiper-slide-next');
        let prevSlide = gsap.utils.selector('.swiper-slide-prev');
        let currenSlide = gsap.utils.selector('.swiper-slide-active');
        let nextVideo = nextSlide('.home__hero__video')
        let nextHeading = nextSlide('.home__hero__heading')
        let nextDivider = nextSlide('.home__hero__divider')
        let nextSubHeading = nextSlide('.home__hero__sub-heading')
        let prevHeading = prevSlide('.home__hero__heading')
        let prevDivider = prevSlide('.home__hero__divider')
        let prevSubHeading = prevSlide('.home__hero__sub-heading')
        let currentHeading = currenSlide('.home__hero__heading')
        let currentDivider = currenSlide('.home__hero__divider')
        let currentSubHeading = currenSlide('.home__hero__sub-heading')
        gsap.fromTo(nextVideo, { y: -600 },{ y: 0, duration: 1.1 } )
        gsap.fromTo([nextHeading, prevHeading], { y: 15, opacity: 0 },{ y: 0, opacity: 1, delay: 1.2, duration: 0.3 } )
        gsap.fromTo([nextSubHeading, prevSubHeading], { y: 5, opacity: 0 },{ y: 0, opacity: 1, delay: 1.4, duration: 0.2 } )
        gsap.fromTo([nextDivider, prevDivider], { width:'0em' },{ width:'7em', delay: 1.2, duration: 0.2 } )
        gsap.fromTo([currentHeading, currentSubHeading], { opacity:1, y:0 }, {opacity: 0, y: -15, duration: 0.3 })
        gsap.fromTo(currentDivider, { width:'7em' },{ width:'0em', duration: 0.3 } )
      });

      
    
}

export default home