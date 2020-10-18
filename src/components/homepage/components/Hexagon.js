import React from 'react';
import anime from 'animejs/lib/anime.es.js';

const Hexagon = props => {
  let exitAnimation = React.useRef(null);

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  }

  React.useEffect(() => {
    anime({ targets: `#${props.id}`, translateY: [getRandomIntInclusive(-1200, 1200), 0], translateX: [getRandomIntInclusive(-1200, 1200), 0], opacity: ['0', '1'], delay: getRandomIntInclusive(500, 900) });
  }, []);

  
  // React.useEffect(() => {
  //   window.addEventListener('scroll', function(e) {
  //     if (props.id === 'hexagon7') {
  //       console.log('exit animation', exitAnimation);
  //       console.log(window.scrollX, window.scrollY);

  //       if (window.scrollY < 400) {
  //         exitAnimation.seek(0);
  //       } else if (window.scrollY >= 400 && window.scrollY <= 500) {
  //         const seekAnimation = exitAnimation.duration - ((500 - window.scrollY) / 100) * exitAnimation.duration;
  //         console.log('seek', seekAnimation, `500 - ${window.scrollY} / 100 * ${exitAnimation.duration}`);
  //         exitAnimation.seek(seekAnimation);
  //       }
  //     }
  //   });

  //   if (props.id === 'hexagon7') {
  //     exitAnimation = anime({ targets: '#hexagon7', direction: 'alternate', autoplay: false, duration: 4000, opacity: ['1', '0'] });
  //   }


  // }, []);

  return (
    <svg id={props.id} className={props.svgClass} viewBox="0 0 120 210" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96" className={props.polygonClass}></polygon>          
    </svg>
  );
}

export default Hexagon;