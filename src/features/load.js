import gsap from 'gsap'

function load ()
{

    window.onload = function(){
        setTimeout(function(){
            const loader = gsap.timeline()
            loader
                .from('.transition-wrapper', { display: 'block' })
                .to('.transition-bar', { scaleX: 0, duration: 1, ease: "power3.out", delay: 0.2 })
                .to('.transition-wrapper', { opacity: 0.0, duration: 0.2 })
                .to('.transition-wrapper', { display: 'none' })
        }, 3000);
       };
    
}


export default load