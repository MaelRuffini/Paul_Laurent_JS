import './styles/style.css'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import gsap from 'gsap'
import Plyr from 'plyr';

import load from './features/load.js';
import home from './pages/home.js'
import caseStudy from './pages/cs.js'
import resume from './pages/resume.js'


var isCs = document.querySelector('body').classList.contains('is--cs');
if(isCs) {
  caseStudy()
}

var isHome = document.querySelector('body').classList.contains('is--home');
if(isHome) {
  // load()
  home()
}

var isResume = document.querySelector('body').classList.contains('is--resume');
if(isResume) {
  resume()
}
