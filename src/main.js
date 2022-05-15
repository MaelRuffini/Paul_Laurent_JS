import './styles/style.css'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import gsap from 'gsap'
import Plyr from 'plyr';

import load from './features/load.js';
import home from './pages/home.js'
import caseStudy from './pages/cs.js'
import resume from './pages/resume.js'
import transition from './features/transition.js'

transition()

var isHome = document.querySelector('body').classList.contains('body--home');
if(isHome) {
  // load()
  home()
}

var isCs = document.querySelector('body').classList.contains('body--cs');
if(isCs) {
  caseStudy()
}

var isResume = document.querySelector('body').classList.contains('body--resume');
if(isResume) {
  resume()
}


