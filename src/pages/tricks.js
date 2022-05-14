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


const bgImageSwiper = new Swiper(".swiper.main", {
  direction: "vertical",
  loop: true,
  mousewheel: true,
  keyboard: true,
  followFinger: false,
  effect: "slide",
  speed: 800,
  controller: {
    inverse: true
  },
  parallax: true
});

const fgImageSwiper = new Swiper(".swiper.small", {
  direction: "vertical",
  loop: true,
  allowTouchMove: false,
  effect: "slide",
  speed: 800,
  reverseDirection: true,
  initialSlide: bgImageSwiper.slides.length - 3,
  parallax: true
});

// Link background slider to foreground slider
bgImageSwiper.controller.control = fgImageSwiper;

function setText() {
	$('.swiper_text').css('transform', 'translateY(100%)');
  $('.swiper_sub').css('opacity', '0');
}

// When scrolling down
bgImageSwiper.on("slideNextTransitionStart", function (e) {
	setText();
  // Text leaving
  let outgoingText = $(".text_item").eq(e.previousIndex - 1);
  gsap.fromTo(
    outgoingText.find(".swiper_text"),
    { y: "0%" },
    { y: "-100%", stagger: { amount: 0.1 }, duration: 0.4, delay: 0 }
  );
  gsap.fromTo(
    outgoingText.find(".swiper_sub"),
    { opacity: 1 },
    { opacity: 0, duration: 0.4, delay: 0 }
  );
  // Text coming in
  let incomingText = $(".text_item").eq(e.realIndex);
  gsap.fromTo(
    incomingText.find(".swiper_text"),
    { y: "100%" },
    { y: "0%", stagger: { amount: 0.1 }, duration: 0.4, delay: 0.6 }
  );
  gsap.fromTo(
    incomingText.find(".swiper_sub"),
    { opacity: 0 },
    { opacity: 1, duration: 0.4, delay: 0.8 }
  );
});

// When scrolling up
bgImageSwiper.on("slidePrevTransitionStart", function (e) {
	setText();
  // Text leaving
  let outgoingText = $(".text_item").eq(e.activeIndex);
  gsap.fromTo(
    outgoingText.find(".swiper_text"),
    { y: "0%" },
    {
      y: "100%",
      stagger: { amount: 0.1, from: "end" },
      duration: 0.3,
      delay: 0
    }
  );
  gsap.fromTo(
    outgoingText.find(".swiper_sub"),
    { opacity: 1 },
    { opacity: 0, duration: 0.3, delay: 0 }
  );
  // Text coming in
  let incomingText = $(".text_item").eq(e.realIndex);
  gsap.fromTo(
    incomingText.find(".swiper_text"),
    { y: "-100%" },
    {
      y: "0%",
      stagger: { amount: 0.1, from: "end" },
      duration: 0.3,
      delay: 0.5
    }
  );
  gsap.fromTo(
    incomingText.find(".swiper_sub"),
    { opacity: 0 },
    { opacity: 1, duration: 0.3, delay: 0.7 }
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