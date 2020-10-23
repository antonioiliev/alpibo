import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BusinessConsultingSVG from '../../media/whatwedo/consulting.svg';
import WebsiteSVG from '../../media/whatwedo/web.svg';
import MobileAppSVG from '../../media/whatwedo/mobile-app.svg';
import DesktopAppSVG from '../../media/whatwedo/desktop.svg';
import ECommerceSVG from '../../media/whatwedo/sale.svg';
import ServiceComponent from './components/ServiceComponent';

const styles = (theme) => ({
  root: {
    background: theme.palette.primary.light,
    // background: theme.palette.primary.dark,
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
    padding: '50px 70px 0px 70px',
    [theme.breakpoints.up('md')]: {
      flexBasis: '90%'
    },
    [theme.breakpoints.down('md')]: {
      flexBasis: '100%',
      padding: '0px 20px'
    }
  },
  flexRow: {
    display: 'flex', 
    flexFlow: 'row wrap', 
    justifyContent: 'space-evenly', 
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
    color: theme.palette.primary.dark,
    fontSize: '18px',
    fontWeight: 500,
    padding: '20px 0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    }
  },
  servicesP: {
    color: theme.palette.primary.dark,
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
    color: theme.palette.primary.dark, 
    fontSize: '48px',
    marginTop: '100px',
    zIndex: 10,
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
      height: '550px',
      width: 'calc(192% + 1.3px)',
      transform: 'rotateY(180deg)',
    },
    '& path': {
      fill: theme.palette.secondary.main
    }
  },
  boldSpan: {
    fontWeight: 900,
    color: theme.palette.secondary.light,
    textShadow: '-2px 0 #8224e3, 0 -2px #8224e3, 2px 0 #8224e3, 0 2px #8224e3, 2px 2px #8224e3, -2px -2px #8224e3, -2px 2px #8224e3, 2px -2px #8224e3, 6px 6px #8224e3'
  },
  techStackDiv: {
    width: '100%',
    background: theme.palette.secondary.main
  }
});

function WhatWeDo(props) {
  const { classes } = props;

  return (
    <div id="services" className={classes.root}>
      <div className={classes.container}>
        <h2 className={classes.heroH2}>What <span className={classes.boldSpan}>we</span> do</h2>
        {/* <div>
          <svg className={classes.svg} viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="0" className={classes.svgLine}></line>
          </svg>
        </div> */}
        <p className={classes.heroP}>We offer an all-round service so your business`s online presence is covered from all aspects. Our mission is to elevate your online presence by delivering a quality product, continually evaluate our work and improve it at no extra cost.</p>

        <div className={classes.flexRow}>
          <ServiceComponent 
            heading='Consultation'
            description='Don`t worry if you feel lost. We are here to discuss your needs and will give advice as to what the best course of action for you business will be.'
            image={BusinessConsultingSVG}
          />
          <ServiceComponent 
            heading='Company Websites'
            description='We will design and develop a professional corporate website that represents you and your company`s culture'
            image={WebsiteSVG}
          />
          <ServiceComponent 
            heading='Mobile Applications (Android/iOS)'
            description='If your business needs dictate it, we can plan and develop a beautiful and functional Android and/or iOS app'
            image={MobileAppSVG}
          />
          <ServiceComponent 
            heading='Desktop Applications (Windows/MacOS)'
            description='Whether it is an automation system, a bespoke ERP system or anything in between, we will be more than happy to create the perfect solution for you'
            image={DesktopAppSVG}
          />
          <ServiceComponent 
            heading='ECommerce Solutions'
            description='Do not lag behind. In this day and age, having an e-commerce business is crucial. We specialise in building custom software to fit your needs or use a platform such as WordPress (WooCommerce)'
            image={ECommerceSVG}
          />
        </div>

      </div>
    </div>
  );
}


export default withStyles(styles)(WhatWeDo);
