import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import { withStyles } from '@material-ui/core/styles';
import HeroSignUpButton from './components/HeroSignUpButton';
import Hexagons from './components/Hexagons';

const styles = (theme) => ({
  root: {
    color: theme.palette.primary.dark,
    background: theme.palette.primary.light,
    zIndex: 20,
    display: 'flex',
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      padding: '0px 70px',
    },
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px 70px',
    [theme.breakpoints.up('md')]: {
      flexBasis: '90%'
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 20px'
    }
  },
  heroH2: {
    color: theme.palette.primary.main,
    fontSize: '86px',
    fontFamily: 'Advent Pro',
    fontWeight: 900,
    textTransform: 'uppercase',
    lineHeight: '1em',
    marginBottom: 0,
    zIndex: 3,
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '55px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    }
  },
  heroP: {
    fontFamily: 'Montserrat',
    color: theme.palette.primary.dark,
    fontSize: '18px',
    fontWeight: 500,
    padding: '20px 0px',
    maxWidth: 550,
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    }
  },
  boldSpan: {
    fontWeight: 900,
    color: theme.palette.secondary.light,
    textShadow: '-2px 0 #8224e3, 0 -2px #8224e3, 2px 0 #8224e3, 0 2px #8224e3, 2px 2px #8224e3, -2px -2px #8224e3, -2px 2px #8224e3, 2px -2px #8224e3, 6px 6px #8224e3'
  },
  svgPolygon: {
    fill: 'none',
    strokeWidth: 2,
    stroke: '#fff'
  },
  letterMaskSVG: {
    position: 'relative',
    left: 40,
    top: '-60px',
    zIndex: -1
  },
  letterMaskRectSVG: {
    strokeDasharray: 1120,
    strokeWidth: '20px',
    // fill: 'transparent',
    stroke: theme.palette.secondary.main,
    borderBottom: '5px solid black',
    transitionTimingFunction: 'linear',
    transition: 'stroke-dashoffset 1s, stroke-dasharray 1s',
    strokeDashoffset: -1120,
    zIndex: 200
  },
  svg: {
    position: 'relative',
    height: 40,
    width: 580,
    top: -40,
    left: 40,
    zIndex: 1,
    [theme.breakpoints.down('lg')]: {
      width: 400
    },
    [theme.breakpoints.down('md')]: {
      top: -20,
      height: 20,
      width: 250
    }
  },
  svgLine: {
    stroke: theme.palette.secondary.main, 
    strokeWidth: 250,
    strokeDasharray: 100,
    strokeDashoffset: 100,
  },
  pipelineSVGContainer: {
    position: 'absolute',
    top: 200,
    left: 0,
    zIndex: 20000,
    width: '90%'
  },
  st0: {
    fill: 'none',
    stroke: '#fff',
    strokeWidth: 37,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }
});

function Intro(props) {
  const { classes } = props;
  const headingRef = React.useRef(null);
  const descriptionRef = React.useRef(null);
  const ctaRef = React.useRef(null);
  const letterMaskingRef = React.useRef(null);

  let animations = React.useRef({
    header: {},
    description: {},
    cta: {},
    headingMask: {}
  });

  const getScrollPercent = () => {
    const h = document.documentElement, b = document.body;;
    return (h['scrollTop'] || b['scrollTop']) / ((h['scrollHeight'] || b['scrollHeight']) - h.clientHeight) * 100;
  }

  React.useEffect(() => {

    animations.current.header = anime({
      targets: headingRef.current,
      translateX: ['-1000px', '0px'],
      opacity: ['0', '1'],
      loop: false,
      autoplay: true,
      duration: 1000,
      easing: 'easeInQuart'
    });

    animations.current.description = anime({
      targets: descriptionRef.current,
      translateX: ['-1000px', '0px'],
      opacity: ['0', '1'],
      loop: false,
      autoplay: true,
      duration: 1200,
      easing: 'easeInQuart'
    });

    animations.current.cta = anime({
      targets: ctaRef.current,
      translateX: ['-1000px', '0px'],
      opacity: ['0', '1'],
      loop: false,
      autoplay: true,
      duration: 1300,
      easing: 'easeInQuart'
    });

    animations.current.headingMask = anime({
      targets: letterMaskingRef.current,
      strokeDashoffset: [100, 0],
      autoplay: true,
      duration: 100,
      delay: 1000,
      easing: 'easeInQuart'
    });

    // console.log('animations', animations);
    // animations.current.header.play();
    // window.addEventListener('scroll', function(e) {
    //   // console.log(`${getScrollPercent()}%`, animations.current.header);

    //   const { header, description, cta, headingMask } = animations.current;

    //   if (window.scrollY >= 200 && window.scrollY < 300) {
    //     header.seek(header.duration);
    //     headingMask.seek(headingMask.duration);
    //   } else if (window.scrollY >= 300 && window.scrollY <= 500) {
    //     // animations.current.header.seek(animations.current.header.duration * (getScrollPercent( ) * 0.01))
    //     header.seek(header.duration - (window.scrollY - 300) * 5);
    //     headingMask.seek(headingMask.duration - (window.scrollY - 300) * 5);
    //   }

    //   if (window.scrollY >= 400 && window.scrollY < 500) {
    //     description.seek(description.duration);
    //     cta.seek(cta.duration);
    //   } else if (window.scrollY >= 500 && window.scrollY <= 600) {
    //     // animations.current.header.seek(animations.current.header.duration * (getScrollPercent( ) * 0.01))
    //     description.seek(description.duration - (window.scrollY - 500) * 10);
    //     cta.seek(cta.duration - (window.scrollY - 500) * 10);
    //   }
    // });

  }, []);


  return (
    <div className={classes.root}>
      <div className={classes.container}>
        
        <h2 ref={headingRef} className={classes.heroH2}>Let`s <span className={classes.boldSpan}>design, develop</span> and <span className={classes.boldSpan}>grow</span> your 
        <span id="web-presence" style={{ display: 'block' }}>
          web presence
        </span></h2>
        <div>
          {/* <svg className={classes.svg} viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <line ref={letterMaskingRef} x1="0" y1="0" x2="100%" y2="0" className={classes.svgLine}></line>
          </svg> */}
        </div>
        <p ref={descriptionRef} className={classes.heroP}>We rely on our expertise to deliver eye-catching and easy to use software solutions that will elevate your online presence and drive more sales</p>
        <HeroSignUpButton ctaRef={ctaRef} />
        <Hexagons />
        {/* <div className={classes.pipelineSVGContainer}>
          <svg version="1.1" id="pipeline-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 515.1 1208.1" style={{ enableBackground: 'new 0 0 515.1 1208.1' }}>
            <g id="Page-1_1_">
                <polyline id="path-bg" className={classes.st0} points="496.6,24.8 496.6,321.7 18.5,380.9 18.5,668 496.6,685.9 496.6,1136.1 164.5,1136.1 
                164.5,1208.1" style={{ strokeDasharray: 2398.68, strokeDashoffset: 0 }}></polyline>
            </g>
          </svg>
        </div> */}
      </div>
    </div>
  );
}

export default withStyles(styles)(Intro);
