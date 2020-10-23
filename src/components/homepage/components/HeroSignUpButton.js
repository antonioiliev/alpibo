import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '500px',
    marginTop: '50px auto',
    zIndex: 200,
    [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
    }
  },
  svgWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    '&:hover rect': {
      strokeDashoffset: 0,
      strokeDasharray: 1120
    },
    '&:hover #svgBorder': {
      backgroundColor: 'transparent',
      transition: 'background-color 300ms linear',
    }
  },
  svg: {
    background: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: 'transparent',
      transition: 'background-color 300ms linear',
    }
  },
  shape1: {
    strokeDasharray: 1120,
    strokeWidth: '5px',
    fill: 'transparent',
    stroke: theme.palette.primary.dark,
    borderBottom: '5px solid black',
    transitionTimingFunction: 'linear',
    transition: 'stroke-dashoffset 1s, stroke-dasharray 1s',
    strokeDashoffset: 1120,
    zIndex: 200
  },
  shape2: {
    strokeDasharray: 1120,
    strokeWidth: '5px',
    fill: 'transparent',
    stroke: theme.palette.primary.main,
    borderBottom: '5px solid black',
    transitionTimingFunction: 'linear',
    transition: 'stroke-dashoffset 1s, stroke-dasharray 1s',
    strokeDashoffset: -1120,
    zIndex: 200
  },
  buttonText: {
    fontFamily: 'Montserrat',
    fontSize: '22px',
    fontWeight: 700,
    background: 'transparent',
    width: '100%',
    maxWidth: '300px',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#fff',
    top: '-58px',
    position: 'relative',
    padding: '14px',
    textDecoration: 'none',
    zIndex: 2,
    '&:hover': {
      color: '#333'
    }
  }
}));

export default function HeroSignUpButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} ref={props.ctaRef}>
        <div className={classes.svgWrapper}>
          <svg id="svgBorder" className={classes.svg} height="60" width="300" xmlns="http://www.w3.org/2000/svg">
            <rect className={classes.shape1} height="60" width="300" />
            <rect className={classes.shape2} height="60" width="300" />
          </svg>
          <a href="#" className={classes.buttonText}>GET IN TOUCH</a>
        </div>
    </div>
  );
}
