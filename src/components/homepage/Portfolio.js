import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import BrandonBackgroundImage from '../../media/portfolio/brandon/brandon_hall_hexagon.jpg';
import BrandonHallLogo from '../../media/portfolio/brandon/brandon_white_logo.svg';
import ArdoeBackgroundImage from '../../media/portfolio/ardoe/ardoe_house_blairs_hexagon.jpg';
import ArdoeHouseLogo from '../../media/portfolio/ardoe/ardoe_house_logo_proper_white.svg';
import Novagel1BackgroundImage from '../../media/portfolio/novagel1/novagel_hexagon.jpg';
import Novagel1Logo from '../../media/portfolio/novagel1/novagel-logo.svg';
import MatchFrameBackgroundImage from '../../media/portfolio/matchframe/matchframe_hexagon.jpg';
import MatchFrameLogo from '../../media/portfolio/matchframe/matchframe-logo.svg';
import EuromebelBackgroundImage from '../../media/portfolio/euromebel/euromebel_hexagon.jpg';
import EuromebelLogo from '../../media/portfolio/euromebel/euromebel_logo_white.svg';
import MyChocolatierBackgroundImage from '../../media/portfolio/mychocolatier/mychocolatier_hexagon.jpg';
import MyChocolatierLogo from '../../media/portfolio/mychocolatier/my-chocolatier-logo-cocoa-bean-white.svg';
import PrettyCowBackgroundImage from '../../media/portfolio/prettycow/pretty-cow-hexagon.jpg';
import PrettyCowLogo from '../../media/portfolio/prettycow/prettycow-logo-white.svg';
import DalioBackgroundImage from '../../media/portfolio/dalio/dalio-hexagon.jpg'
import DalioLogo from '../../media/portfolio/dalio/logo_dalio.svg'

import PortfolioItem from './components/PortfolioItem';

const styles = (theme) => ({
  root: {
    // background: theme.palette.primary.dark,
    background: '#fff',
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
    // marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px 70px',
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
    justifyContent: 'center', 
    width: '100%',
    maxWidth: '1600px'
  },
  flexRowAlternate: {
    position: 'relative',
    top: '-80px'
  },
  heroH2: {
    color: theme.palette.primary.main,
    fontSize: '96px',
    marginLeft: '100px',
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
    color: theme.palette.primary.light,
    fontSize: '22px',
    fontWeight: 500,
    marginTop: '0px',
    padding: '0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    }
  },
  svg: {
    position: 'relative',
    height: 40,
    width: 580,
    top: -20,
    left: 80,
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
  svgDivider: {
    position: 'absolute', 
    left: 0,
    '& path': {
      fill: theme.palette.secondary.main
    }
  },
  boldSpan: {
    fontWeight: 900,
    color: theme.palette.secondary.light,
    textShadow: '-2px 0 #8224e3, 0 -2px #8224e3, 2px 0 #8224e3, 0 2px #8224e3, 2px 2px #8224e3, -2px -2px #8224e3, -2px 2px #8224e3, 2px -2px #8224e3, 6px 6px #8224e3'
  },
});

function Portfolio(props) {
  const { classes } = props;

  return (
    <div id="portfolio" className={classes.root}>
        <div className={classes.container}>
            <h2 className={classes.heroH2}><span className={classes.boldSpan}>Our</span> Portfolio</h2>

            <p className={classes.heroP}>All of our projects are created with your and your customers` expectations in mind. Excellent user experience and elegance is at the forefront of everything we do.</p>
          {/* 
            <svg style={{ position: 'absolute', top: '2500', right: 50, zIndex: 2 }} width="500" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF0066" d="M26.9,-43.2C39.9,-39,59,-42,71,-36C83,-30,87.9,-15,86.1,-1C84.3,13,75.9,26,63.8,31.8C51.7,37.6,35.9,36.2,24.7,42.8C13.4,49.4,6.7,63.9,-4.4,71.5C-15.4,79.1,-30.9,79.7,-40,71.9C-49.2,64.1,-52,47.9,-53.6,34.5C-55.1,21.1,-55.4,10.6,-59.4,-2.3C-63.4,-15.2,-71.1,-30.3,-67.8,-40.7C-64.5,-51.1,-50.2,-56.7,-37.1,-60.8C-24,-64.9,-12,-67.6,-2.5,-63.2C6.9,-58.8,13.9,-47.4,26.9,-43.2Z" transform="translate(100 100)" />
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" id="svgDivider" className={classes.svgDivider} viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,256L60,218.7C120,181,240,107,360,69.3C480,32,600,32,720,37.3C840,43,960,53,1080,53.3C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>


            <div className={classes.flexRow}>
              <PortfolioItem 
                backgroundImage={BrandonBackgroundImage} 
                logo={BrandonHallLogo} 
                heading="Brandon Hall Hotel and Spa"
                link="https://brandonhallhotelandspa.co.uk"
              />

              <PortfolioItem 
                backgroundImage={ArdoeBackgroundImage} 
                logo={ArdoeHouseLogo} 
                heading="Ardoe House Hotel and Spa"
                link="https://ardoehouseblairs.co.uk"
              />

              <PortfolioItem 
                backgroundImage={Novagel1BackgroundImage} 
                logo={Novagel1Logo} 
                heading="Novagel1"
                link="https://novagel1.com"
              />
            </div>
            <div className={clsx(classes.flexRow, classes.flexRowAlternate)}>

              <PortfolioItem 
                backgroundImage={MatchFrameBackgroundImage} 
                logo={MatchFrameLogo} 
                heading="MatchFrame Studio"
                link="https://matchframe.alpibo.com"
                alternate
              />

              <PortfolioItem 
                backgroundImage={EuromebelBackgroundImage} 
                logo={EuromebelLogo} 
                heading="Euromebel"
                link="https://euromebel.com"
                alternate
              />
            </div>

            <div className={clsx(classes.flexRow, classes.flexRowAlternate)} style={{ top: '-160px' }}>
              <PortfolioItem 
                backgroundImage={MyChocolatierBackgroundImage} 
                logo={MyChocolatierLogo} 
                heading="MY Chocolatier"
                link="https://mychocolatier.bg"
              />

              <PortfolioItem 
                backgroundImage={PrettyCowBackgroundImage} 
                logo={PrettyCowLogo} 
                heading="PrettyCow"
                link="https://prettycow.bg"
              />

              <PortfolioItem 
                backgroundImage={DalioBackgroundImage} 
                logo={DalioLogo} 
                heading="Dalio"
                link="https://dalio.io"
              />
            </div>
        </div>
    </div>
  );
}


export default withStyles(styles)(Portfolio);
