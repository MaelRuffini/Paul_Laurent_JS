import LocomotiveScroll from 'locomotive-scroll'

function scroll ()
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

}
  
export default scroll