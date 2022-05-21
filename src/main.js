import './styles/style.css'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import gsap from 'gsap'
import Plyr from 'plyr';

import load from './features/load.js';
import home from './pages/home.js'
import caseStudy from './pages/cs.js'
import resume from './pages/resume.js'
import work from './pages/work.js'
import transition from './features/transition.js'

transition()

var isHome = document.querySelector('body').classList.contains('body--home');
if(isHome) {
  home()
}

var isCs = document.querySelector('body').classList.contains('body--cs');
if(isCs) {
  caseStudy()
}

var isWork = document.querySelector('body').classList.contains('body--work');
if(isWork) {
  work()
}

var isResume = document.querySelector('body').classList.contains('body--resume');
if(isResume) {
  resume()
}


