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


  return (
    <svg id={props.id} className={props.svgClass} viewBox="0 0 120 210" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'rgb(130, 36, 227)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(130,36,227)', stopOpacity: 0.5 }} />
          </linearGradient>
        </defs>
        <polygon points="64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96" className={props.polygonClass} fill="url(#grad1)"></polygon>          
    </svg>
  );
}

export default Hexagon;
