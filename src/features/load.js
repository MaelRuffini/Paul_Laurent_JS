import gsap from 'gsap'
import { nodeName } from 'jquery';

function load ()
{

    window.onload = function(){
        setTimeout(function(){
            const loader = gsap.timeline()
            loader
                .to('.transition-bar', { scaleX: 0, duration: 1, ease: "power3.out", delay: 0.2 })
                .to('.transition-wrapper', { opacity: 0.0, duration: 0.2 })
                .to('.transition-wrapper', { display: 'none' })
        }, 1200);
       };
    
}


export default load