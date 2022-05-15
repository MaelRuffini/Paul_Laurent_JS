import LocomotiveScroll from 'locomotive-scroll'
import Plyr from 'plyr';
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import gsap from "gsap";

function caseStudy() 
{

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    smartphone: {
      smooth: false
    },
    tablet: {
      smooth: true
    },
  }); 

      const player = new Plyr('#player',{
        clickToPlay: true,
        keyboard: true,
    })


    /* Swiper
    **************************************************************/
    var swiperCs = Swiper;
    var init = false;


    function swiperMode() {
      let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
      let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
      let desktop = window.matchMedia('(min-width: 1025px)');
  
      // Enable (for mobile)
      if(desktop.matches) {
          if (!init) {
              init = true;
              

              swiperCs = new Swiper('.swiper--cs', {
                direction: 'vertical',
                noSwipingClass: 'cs__video__image-container',
                mousewheel: false,
                speed: 800,
                keyboard: {
                    enabled: true,
                  },
                  effect: 'slide',
                  parallax: true,
              })
        
        
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
  
      }
  
      // Disable (for tablet)
      else if(tablet.matches) {
        swiperCs.destroy();
          init = false;
      }
  
      // Disable (for desktop)
      else if(mobile.matches) {
        swiperCs.destroy();
          init = false;
      }
  }

  
  window.addEventListener('load', function() {
    swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
    swiperMode();
});



   

}

export default caseStudy





