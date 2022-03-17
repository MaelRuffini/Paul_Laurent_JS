import { ScrollTrigger } from "gsap/ScrollTrigger"
import LocomotiveScroll from 'locomotive-scroll'
import gsap from 'gsap'



function scroll()
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

  gsap.registerPlugin(ScrollTrigger);

  locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy('.main', {
    scrollTop(value) {
    	return arguments.length ? locoScroll.scrollTo(value, 0, 0) : 		locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector('.main').style.transform ? "transform" : "fixed"
});

var texts = document.querySelectorAll('.resume__text')
var dividers = document.querySelectorAll('.resume__divider')

texts.forEach( text => {
  var tl = gsap.timeline({
     scrollTrigger:{
         trigger: text,
         scroller:".main",
         start: "bottom bottom",
         toggleActions: "play none none reverse"
        //  end: "top top",
  }})
    tl.from(text, {
    opacity: 0,
    x: - 20,
    duration: 0.6,
    ease: 'power3.easeOut'
    })
})

dividers.forEach( divider => {
  var tl = gsap.timeline({
     scrollTrigger:{
         trigger: divider,
         scroller:".main",
         start: "bottom bottom",
         toggleActions: "play none none reverse"
        //  end: "top top",
  }})
    tl.from(divider, {
    width: '0%',
    duration: 0.8,
    ease: 'power2.easeOut'
    })
})




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


}
export default scroll
