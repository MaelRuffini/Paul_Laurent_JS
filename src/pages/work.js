import LocomotiveScroll from 'locomotive-scroll'

function work ()
{

const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    direction: 'horizontal',
    smartphone: {
      smooth: false
    },
    tablet: {
      smooth: true
    },
}); 

}

export default work