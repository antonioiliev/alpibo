import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import { withStyles } from '@material-ui/core/styles';
import Hexagon from './Hexagon';

const styles = (theme) => ({
  root: {
    position: 'absolute',
    top: 400,
    right: -700,
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      right: -200,
    }
  },
  svgPolygon: {
    // fill: theme.palette.secondary.main,
    // strokeWidth: 2,
    // stroke: theme.palette.secondary.main,
    strokeDasharray: 1000,
    zIndex: -1
  },
  svgHexagon1: {
    position: 'relative',  
    height: 300,
    width: 170,
    [theme.breakpoints.down('md')]: {
      height: 200,
      width: 110,
    }
  },
  svgHexagon2: {
    position: 'relative',
    top: 150,
    left: -85,
    height: 300,
    width: 170,
    [theme.breakpoints.down('md')]: {
      height: 200,
      width: 110,
    }
  },
  svgHexagon3: {
    position: 'relative',
    top: 150,
    left: -85,
    height: 300,
    width: 170,
    [theme.breakpoints.down('md')]: {
      height: 200,
      width: 110,
    }
  },
  svgHexagon4: {
    position: 'relative',
    top: 150,
    left: -595,
    height: 300,
    width: 170,
    [theme.breakpoints.down('md')]: {
      height: 200,
      width: 110,
    }
  },
  svgHexagon5: {
    position: 'relative',
    top: 0,
    left: -340,
    height: 300,
    width: 170,
    [theme.breakpoints.down('md')]: {
      height: 200,
      width: 110,
    }
  },
  svgHexagon6: {
    position: 'relative',
    top: 300,
    left: -510,
    height: 300,
    width: 170,
    [theme.breakpoints.down('md')]: {
      height: 200,
      width: 110,
    }
  },
  svgHexagon7: {
    position: 'relative',
    top: 445,
    left: -765,
    height: 300,
    width: 170,
    [theme.breakpoints.down('md')]: {
      height: 200,
      width: 110,
    }
  },
  svgHexagon8: {
    position: 'relative',
    top: 300,
    right: 1190,
    height: 300,
    width: 170,
    [theme.breakpoints.down('md')]: {
      height: 200,
      width: 110,
    }
  }
});

function Hexagons(props) {
  const { classes } = props;
  let kurec = undefined;

  React.useEffect(() => {
  

    // kurec = anime({ targets: '#hexagon1', direction: 'alternate', autoplay: false, duration: 4000, opacity: ['1', '0'] });


    // anime({
    //   targets: '#hexagon1',
    //   keyframes: [
    //     // { translateY: -45, translateX: 85 },
    //     { translateY: 0, translateX: 170 },
    //     // { translateY: -45, translateX: 255, delay: 2000 },
    //     { translateY: 0, translateX: 340, delay: 2000 }
    //   ],
    //   duration: 3000,
    //   delay: 5000,
    //   easing: 'easeOutElastic(1, .48)',
    //   loop: true
    // });

    // anime({
    //   targets: '#hexagon5',
    //   keyframes: [
    //     // { translateX: 85, translateY: 50 },
    //     { translateX: 85, translateY: 150 },
    //     // { translateY: 250, delay: 2000 },
    //     {translateY: 300, translateX: 0, delay: 2000}
    //   ],
    //   duration: 3000,
    //   delay: 5000,
    //   easing: 'easeOutElastic(1, .48)',
    //   loop: true
    // });

    // anime({
    //   targets: '#hexagon4',
    //   keyframes: [
    //     // { translateX: -85, translateY: 45 },
    //     { translateX: -170, translateY: 0 },
    //     // { translateX: -255, translateY: 45, delay: 2000 },
    //     { translateX: -340, translateY: 0, delay: 2000 },
    //   ],
    //   duration: 3000,
    //   delay: 5000,
    //   easing: 'easeOutElastic(1, .48)',
    //   loop: true
    // });

    
    // anime({
    //   targets: '#hexagon6',
    //   keyframes: [
    //     // { translateX: -85, translateY: -50 },
    //     { translateX: -85, translateY: -150},
    //     // {translateY: -250, delay: 2000 },
    //     {translateY: -300, translateX: 0, delay: 2000}
    //     // {translateX: 0},
    //     // {translateY: 0}
    //   ],
    //   duration: 3000,
    //   delay: 5000,
    //   easing: 'easeOutElastic(1, .48)',
    //   loop: true
    // });

    // anime({
    //   targets: '#hexagon7',
    //   keyframes: [
    //     { translateX: 85, translateY: -150 },
    //     { translateX: 0, translateY: 0, delay: 2000 },

    //   ],
    //   duration: 3000,
    //   delay: 5000,
    //   easing: 'easeOutElastic(1, .48)',
    //   loop: true
    // });

    // anime({
    //   targets: '#hexagon8',
    //   keyframes: [
    //     { translateX: -85, translateY: 150 },
    //     { translateX: 0, translateY: 0, delay: 2000 },

    //   ],
    //   duration: 3000,
    //   delay: 5000,
    //   easing: 'easeOutElastic(1, .48)',
    //   loop: true
    // });



    // anime({
    //   targets: '#hexagon1',
    //   keyframes: [
    //     {translateY: -50},
    //     {translateX: 340},
    //     {translateY: 0},
    //     // {translateY: 0},
    //     // {translateX: 0},
    //   ],
    //   duration: 3000,
    //   delay: 2000,
    //   easing: 'easeOutElastic(1, .48)',
    //   loop: true
    // });

    // anime({
    //   targets: '#hexagon5',
    //   keyframes: [
    //     {translateX: 90},
    //     {translateY: 250},
    //     {translateY: 300, translateX: 0},
    //     // {translateX: 0},
    //     // {translateY: 0}
    //   ],
    //   duration: 3000,
    //   delay: 2000,
    //   easing: 'easeOutElastic(1, .48)',
    //   loop: true
    // });

    // anime({
    //   targets: '#hexagon4',
    //   keyframes: [
    //     {translateY: 50},
    //     {translateX: -250},
    //     {translateY: 0, translateX: -340 },
    //     // {delay: 300},
    //     // {translateX: 0},
    //     // {translateY: 0}
    //   ],
    //   duration: 3000,
    //   delay: 2000,
    //   easing: 'easeOutElastic(1, .48)',
    //   loop: true
    // });

    
    // anime({
    //   targets: '#hexagon6',
    //   keyframes: [
    //     {translateX: -90},
    //     {translateY: -250},
    //     {translateY: -300, translateX: 0 },
    //     // {translateX: 0},
    //     // {translateY: 0}
    //   ],
    //   duration: 3000,
    //   delay: 2000,
    //   easing: 'easeOutElastic(1, .48)',
    //   loop: true
    // });


  }, []);

  // React.useEffect(() => {
  //   window.addEventListener('scroll', function(e) {
  //      console.log(window.scrollX, window.scrollY);

  //      if (window.scrollY < 400) {
  //        kurec.seek(0);
  //      } if (window.scrollY >= 400 && window.scrollY <= 500) {
  //        const seekAnimation = kurec.duration - ((500 - window.scrollY) / 100) * kurec.duration;
  //        console.log('seek', seekAnimation, `500 - ${window.scrollY} / 100 * ${kurec.duration}`);
  //        kurec.seek(seekAnimation);
  //      }
  //   });

  // }, []);


  return (
    <div className={classes.root}>
      <Hexagon id="hexagon1" svgClass={classes.svgHexagon1} polygonClass={classes.svgPolygon} />
      <Hexagon id="hexagon2" svgClass={classes.svgHexagon2} polygonClass={classes.svgPolygon} />
      <Hexagon id="hexagon3" svgClass={classes.svgHexagon3} polygonClass={classes.svgPolygon} />
      <Hexagon id="hexagon4" svgClass={classes.svgHexagon4} polygonClass={classes.svgPolygon} />
      <Hexagon id="hexagon5" svgClass={classes.svgHexagon5} polygonClass={classes.svgPolygon} />
      <Hexagon id="hexagon6" svgClass={classes.svgHexagon6} polygonClass={classes.svgPolygon} />
      <Hexagon id="hexagon7" svgClass={classes.svgHexagon7} polygonClass={classes.svgPolygon} />
      <Hexagon id="hexagon8" svgClass={classes.svgHexagon8} polygonClass={classes.svgPolygon} />
    </div>
  );
}

export default withStyles(styles)(Hexagons);
