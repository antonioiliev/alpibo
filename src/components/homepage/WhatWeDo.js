import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import JSLogo from '../../media/logo/js.svg';
import NodeJSLogo from '../../media/logo/nodejs-white.svg';
import ReactLogo from '../../media/logo/react.svg';
import PHPLogo from '../../media/logo/php.svg';
import WordPressLogo from '../../media/logo/wordpress.svg';
import BusinessConsultingSVG from '../../media/whatwedo/consulting.svg';
import WebsiteSVG from '../../media/whatwedo/web.svg';
import MobileAppSVG from '../../media/whatwedo/mobile-app.svg';
import ServiceComponent from './components/ServiceComponent';

const styles = (theme) => ({
  root: {
    color: theme.palette.primary.light,
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
    padding: '0px 70px',
    [theme.breakpoints.up('md')]: {
      flexBasis: '90%'
    },
    [theme.breakpoints.down('md')]: {
      flexBasis: '100%',
      padding: '0px 20px'
    }
  },
  heroH2: {
    color: theme.palette.primary.light,
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
  servicesH5: {
    color: theme.palette.primary.light,
    fontSize: '22px',
    fontFamily: 'Advent Pro',
    fontWeight: 400,
    textTransform: 'uppercase',
    lineHeight: '1em',
    marginBottom: 0,
    zIndex: 3
  },
  heroP: {
    color: theme.palette.primary.light,
    fontSize: '22px',
    fontWeight: 500,
    padding: '20px 0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    }
  },
  servicesP: {
    color: theme.palette.primary.light,
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
  }
});

function WhatWeDo(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <div className={classes.container}>
          <h2 className={classes.heroH2}>What we do</h2>
          <p className={classes.heroP}>We offer an all-round service so your business`s online presence is covered from all aspects. Our mission is to elevate your online presence by delivering a quality product, continually evaluate our work and improve it at no extra cost.</p>

          <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between', width: '100%' }}>
            <div className={classes.serviceDiv}>
              <img src={JSLogo} style={{ width: '100px' }} alt="" />
              <p className={classes.servicesP}>JavaScript</p>
            </div>

            <div className={classes.serviceDiv}>
              <img src={NodeJSLogo} style={{ width: '100px' }} alt="" />
              <p className={classes.servicesP}>NodeJS</p>
            </div>

            <div className={classes.serviceDiv}>
              <img src={ReactLogo} style={{ width: '100px' }} alt="" />
              <p className={classes.servicesP}>ReactJS/React Native</p>
            </div>

            <div className={classes.serviceDiv}>
              <img src={PHPLogo} style={{ width: '100px' }} alt="" />
              <p className={classes.servicesP}>PHP</p>
            </div>

            <div className={classes.serviceDiv}>
              <img src={WordPressLogo} style={{ width: '100px' }} alt="" />
              <p className={classes.servicesP}>WordPress Development</p>
            </div>
            
          </div>

          <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between', width: '100%' }}>
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
              description='We will design and develop a professional corporate website that represents you and your company`s culture'
              image={MobileAppSVG}
            />
 
            <div className={classes.serviceDiv}>
              <img src={BusinessConsultingSVG} alt="" />
              <h5 className={classes.servicesH5}>Consultation</h5>
              <p className={classes.servicesP}>Don`t worry if you feel lost. We are here to discuss your needs and will give advice as to what the best course of action for you business will be.</p>
            </div>
            <div className={classes.serviceDiv}>
              <img src={BusinessConsultingSVG} alt="" />
              <h5 className={classes.servicesH5}>Consultation</h5>
              <p className={classes.servicesP}>Don`t worry if you feel lost. We are here to discuss your needs and will give advice as to what the best course of action for you business will be.</p>
            </div>
            <div className={classes.serviceDiv}>
              <img src={BusinessConsultingSVG} alt="" />
              <h5 className={classes.servicesH5}>Consultation</h5>
              <p className={classes.servicesP}>Don`t worry if you feel lost. We are here to discuss your needs and will give advice as to what the best course of action for you business will be.</p>
            </div>
            <div className={classes.serviceDiv}>
              <img src={BusinessConsultingSVG} alt="" />
              <h5 className={classes.servicesH5}>Consultation</h5>
              <p className={classes.servicesP}>Don`t worry if you feel lost. We are here to discuss your needs and will give advice as to what the best course of action for you business will be.</p>
            </div>
            <div className={classes.serviceDiv}>
              <img src={BusinessConsultingSVG} alt="" />
              <h5 className={classes.servicesH5}>Consultation</h5>
              <p className={classes.servicesP}>Don`t worry if you feel lost. We are here to discuss your needs and will give advice as to what the best course of action for you business will be.</p>
            </div>
          </div>
        </div>
    </div>
  );
}


export default withStyles(styles)(WhatWeDo);
