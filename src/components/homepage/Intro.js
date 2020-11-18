import React from 'react';
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
    [theme.breakpoints.down('md')]: {
      paddingTop: '50px'
    },
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px 70px',
    maxWidth: '2100px',
    [theme.breakpoints.up('md')]: {
      flexBasis: '100%'
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 20px',
      marginBottom: 50,
      flexBasis: '90%'
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
    [theme.breakpoints.down('md')]: {
      fontSize: '55px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px'
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

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        
        <h2 ref={headingRef} className={classes.heroH2}>Let`s <span className={classes.boldSpan}>design, develop</span> and <span className={classes.boldSpan}>grow</span> your 
        <span id="web-presence" style={{ display: 'block' }}>
          web presence
        </span></h2>

        <p ref={descriptionRef} className={classes.heroP}>We rely on our expertise to deliver eye-catching and easy to use software solutions that will elevate your online presence and drive more sales</p>
        <HeroSignUpButton ctaRef={ctaRef} />
        <Hexagons />
      </div>
    </div>
  );
}

export default withStyles(styles)(Intro);
