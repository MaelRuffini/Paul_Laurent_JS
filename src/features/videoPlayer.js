import Plyr from 'plyr';
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import gsap from "gsap";

function videoPlayer() 
{

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    smartphone: {
      smooth: true
    },
    tablet: {
      smooth: true
    },
  }); 

      const player = new Plyr('#player',{
        clickToPlay: true,
        keyboard: true,
    })

    const swiperCs = new Swiper('.swiper--cs', {
        direction: 'horizontal',
        noSwipingClass: 'cs__video__image-container',
        mousewheel: false,
        speed: 900,
        keyboard: {
            enabled: true,
          },
          effect: 'creative',
          creativeEffect: {
            prev: {
              translate: ['-5%', 0, -0.2],
            },
            next: {
              translate: ['100%', 0, 0.2],
            },
          },
      })

    swiperCs.on('slideChange', function () {
      let nextSlide = gsap.utils.selector('.swiper-slide-next');
      let prevSlide = gsap.utils.selector('.swiper-slide-prev');
      let nextImage = nextSlide('.cs__video__image')
      let prevImage = prevSlide('.cs__video__image')
      gsap.fromTo(nextImage, { x: -600, scale: 1.1 },{ x: 0, scale: 1, duration: 0.9, ease: 'power3.easeOut' } )
    });

    let slideOne = document.getElementById('slide--one');
    slideOne.addEventListener('click', ()=>{
        swiperCs.slideTo(0);
    })

    let slideTwo = document.getElementById('slide--two');
    slideTwo.addEventListener('click', ()=>{
        swiperCs.slideTo(1);
    })

    let slideThree = document.getElementById('slide--three');
    slideThree.addEventListener('click', ()=>{
        swiperCs.slideTo(2);
    })

    let slideFour = document.getElementById('slide--four');
    slideFour.addEventListener('click', ()=>{
        swiperCs.slideTo(3);
    })

    let slideFive = document.getElementById('slide--five');
    slideFive.addEventListener('click', ()=>{
        swiperCs.slideTo(4);
    })

    let slideSix = document.getElementById('slide--six');
    slideSix.addEventListener('click', ()=>{
        swiperCs.slideTo(5);
    })

    swiperCs.on('transitionStart', function () {
        var videos = document.querySelectorAll('video');
        Array.prototype.forEach.call(videos, function(video){
        video.pause();
        });
      });    

}

export default videoPlayer