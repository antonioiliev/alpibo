import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import JSLogo from '../../../media/logo/js.svg';
import NodeJSLogo from '../../../media/logo/nodejs-white.svg';
import ReactLogo from '../../../media/logo/react.svg';
import PHPLogo from '../../../media/logo/php.svg';
import WordPressLogo from '../../../media/logo/wordpress.svg';
import ServiceComponent from './ServiceComponent';

const styles = (theme) => ({
  root: {
    background: theme.palette.secondary.main,
    // background: theme.palette.primary.dark,
    zIndex: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',    
    maxWidth: '100%',
    [theme.breakpoints.up('lg')]: {
      padding: '0px 70px',
    },
  },
  container: {
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: '1200px',
    padding: '0px 70px 0px 70px',
    [theme.breakpoints.down('md')]: {
      padding: '0px 20px'
    }
  },
  flexRow: {
    display: 'flex', 
    flexFlow: 'row wrap', 
    justifyContent: 'space-between', 
    width: '100%'
  },
  heroH2: {
    color: theme.palette.primary.dark,
    fontSize: '96px',
    fontFamily: 'Advent Pro',
    fontWeight: 400,
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
    color: theme.palette.secondary.light,
    fontSize: '18px',
    fontWeight: 500,
    padding: '20px 0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    }
  },
  servicesP: {
    color: theme.palette.secondary.light,
    fontSize: '16px',
    fontWeight: 500,
    padding: '20px 0px'
  },
  serviceDiv: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'space-between', 
    maxWidth: 300,
    paddingTop: 50,
    '& > img': {
      maxWidth: 100
    }
  },
  techstackH2: {
    fontFamily: 'Advent PRO',
    color: theme.palette.secondary.main, 
    fontSize: '68px',
    marginTop: '150px',
    letterSpacing: '2px',
    fontWeight: 900,
    zIndex: 10,
    textShadow: '2px 0 #fff, 0 -2px #fff, 2px 0 #fff, 2px 2px #fff, 2px 2px #fff, -2px -2px #fff, -2px 2px #fff, 2px -2px #fff',
  },
  techstackSpan: {
    color: theme.palette.primary.light,
    background: theme.palette.secondary.main,
    padding: '0px 10px',
    fontWeight: 200
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
    // strokeDashoffset: 100,
  },
  shapeDivider: {
    position: 'absolute',
    left: 0,
    width: '100%',
    overflow: 'hidden',
    lineHeight: 0,
    '& svg': {
      position: 'relative',
      display: 'block',
      width: '100%',
      height: '350px',
      width: 'calc(192% + 1.3px)',
      transform: 'rotateY(180deg)',
    },
    '& path': {
      fill: '#fff'
    }
  },
  boldSpan: {
    fontWeight: 900,
    color: theme.palette.secondary.main,
    textShadow: '2px 0 #fff, 0 -2px #fff, 2px 0 #fff, 2px 2px #fff, 2px 2px #fff, -2px -2px #fff, -2px 2px #fff, 2px -2px #fff',
  },
  techStackDiv: {
    width: '100%',
    background: 'red'
  }
});

const TechStack = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.shapeDivider}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>
        <h2 className={classes.techstackH2}>#TECHSTACK</h2>
        <div className={classes.flexRow}>
            <ServiceComponent
                description='JavaScript'
                image={JSLogo}
                color="white"
            />
            <ServiceComponent
                description='NodeJS'
                image={NodeJSLogo}
                color="white"
            />
            <ServiceComponent
                description='ReactJS/React Native'
                image={ReactLogo}
                color="white"
            />
            <ServiceComponent
                description='PHP'
                image={PHPLogo}
                color="white"
            />
            <ServiceComponent
                description='WordPress Development'
                image={WordPressLogo}
                color="white"
            />
        </div>
      </div>
    </div>
  );
}


export default withStyles(styles)(TechStack);
