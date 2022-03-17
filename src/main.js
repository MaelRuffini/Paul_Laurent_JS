import './styles/style.css'
import slider from './features/slider.js'
import videoPlayer from './features/videoPlayer.js'
import scroll from './features/scroll.js'


var isCs = document.querySelector('body').classList.contains('is--cs');
if(isCs) {
  videoPlayer()
}

var isHome = document.querySelector('body').classList.contains('is--home');
if(isHome) {
  slider()
}

var isResume = document.querySelector('body').classList.contains('is--resume');
if(isResume) {
  scroll()
}


