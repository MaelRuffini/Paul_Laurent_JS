import './styles/style.css'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import gsap from 'gsap'
import Plyr from 'plyr';

import home from './pages/home.js'
import caseStudy from './pages/cs.js'
import resume from './pages/resume.js'
import work from './pages/work.js'
import transition from './features/transition.js'
import scroll from './features/scroll.js'
import favorites from './features/favorites.js'
import favoritesCol from './features/favoritesCol.js'

transition()

var isHome = document.querySelector('body').classList.contains('body--home');
if(isHome) {
  home()
}

var isCs = document.querySelector('body').classList.contains('body--cs');
if(isCs) {
  caseStudy()
  favorites()
}

var isWork = document.querySelector('body').classList.contains('body--work');
if(isWork) {
  work()
}

var isResume = document.querySelector('body').classList.contains('body--resume');
if(isResume) {
  resume()
}

var isAbout = document.querySelector('body').classList.contains('body--about');
if(isAbout) {
  scroll()
}

var isCollection = document.querySelector('body').classList.contains('body--col');
if(isCollection) {
  favoritesCol()
}






