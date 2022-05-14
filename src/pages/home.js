import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import gsap from 'gsap'

function home() 
{
  const bgImageSwiper = new Swiper(".swiper.home-hero_swiper--background", {
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
    parallax: true
  });
  
  const fgImageSwiper = new Swiper(".swiper.home-hero_swiper--poster", {
    direction: "vertical",
    loop: true,
    allowTouchMove: false,
    effect: "slide",
    speed: 1200,
    reverseDirection: true,
    initialSlide: bgImageSwiper.slides.length - 3,
    parallax: true
  });
  
  // Link background slider to foreground slider
  bgImageSwiper.controller.control = fgImageSwiper;
  
  function setText() {
    $('.home-hero_swiper-text').css('transform', 'translateY(100%)');
  }


  
  // When scrolling down
  bgImageSwiper.on("slideNextTransitionStart", function (e) {
    setText();
    // Text leaving
    let outgoingText = $(".home-hero_item").eq(e.previousIndex - 1);
    gsap.fromTo(
      outgoingText.find(".home-hero_swiper-text"),
      { y: "0%",
        opacity: 1,
      },
      { y: "-100%",
      opacity: 0, stagger: { amount: 0.1 }, duration: 0.4, delay: 0 }
    );

    // Text coming in
    let incomingText = $(".home-hero_item").eq(e.realIndex);
    gsap.fromTo(
      incomingText.find(".home-hero_swiper-text"),
      { y: "100%",
        opacity: 0,  
    },
      { y: "0%", opacity: 1, stagger: { amount: 0.1 }, duration: 0.4, delay: 1.2 }
    );

  });


  
  // When scrolling up
  bgImageSwiper.on("slidePrevTransitionStart", function (e) {
    setText();
    // Text leaving
    let outgoingText = $(".home-hero_item").eq(e.activeIndex);
    gsap.fromTo(
      outgoingText.find(".home-hero_swiper-text"),
      { y: "0%",
        opacity: 1,
      },
      {
        y: "100%",
        opacity: 0,
        stagger: { amount: 0.1, from: "end" },
        duration: 0.4,
        delay: 0
      }
    );

    // Text coming in
    let incomingText = $(".home-hero_item").eq(e.realIndex);
    gsap.fromTo(
      incomingText.find(".home-hero_swiper-text"),
      {
        y: "-100%",
        opacity: 0
      },
      {
        y: "0%",
        opacity: 1,
        stagger: { amount: 0.1, from: "end" },
        duration: 0.4,
        delay: 1.2
      }
    );

  });
  
  // Display number for total slide count
  let slideLength = bgImageSwiper.slides.length - 2;
  $(".total").text(("0" + slideLength).slice(-2));
  
  // Update current slide number to display
  bgImageSwiper.on("transitionStart", function (e) {
    let activeNumer = +e.realIndex + 1;
    $(".current").text(("0" + activeNumer).slice(-2));
  });
  
  bgImageSwiper.on('transitionStart', function () {
    let divider = document.querySelectorAll('.home-hero_divider')
    gsap.fromTo(
      divider,
      {
        width: "7em",
      },
      {
        width: "0px",
        duration: 0.6
      }
    );
    var videos = document.querySelectorAll('video');
    Array.prototype.forEach.call(videos, function(video){
    video.pause();
    });
  });
  
  bgImageSwiper.on('transitionEnd', function () {
    let divider = document.querySelectorAll('.home-hero_divider')
    gsap.fromTo(
      divider,
      {
        width: "0px",
      },
      {
        width: "7em",
        duration: 0.6
      }
    );
    var activeIndex = this.activeIndex;
    var activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
    var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
    activeSlideVideo.play();
  });
    
}

export default home