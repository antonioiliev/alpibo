import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  hexagonClipParent: {
    margin: '0px 10px',
    filter: 'drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.3))',
    '& :hover': {
        cursor: 'pointer',
        transition: 'all .7s ease-out',
        zIndex: 2000
    },
    '& :hover #hexagonClipOverlay': {
        background: 'rgba(0,0,0,0.5)'
    },
    '& :hover #hexagonH2': {
        transform: 'translate3d(0, 0, 0)'
    },
    '& :hover #hexagonLogo': {
        transform: 'translate3d(0, 50px, 0) scale(0.5)'
    }
  },
//   hexagonClipParentAlternate: {
//     position: 'relative',
//     top: '-85px'
//   },
  hexagonClip: {
    width: '350px', 
    height: '400px', 
    backgroundBlendMode: 'normal',
    backgroundColor: 'rgba(0,0,0,0.5)',
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center center', 
    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
  },
  hexagonClipOverlay: {
    width: '100%',
    height: '100%',
    background: 'none',
    transition: 'background .3s ease-out, opacity .7s ease-out'
  },
  hexagonLink: {
    width: '100%',
    height: '100%',
    display: 'flex', 
    justifyContent:'center', 
    alignItems: 'center', 
  },
  hexagonClipH2: {
    width: '100%', 
    fontSize: '18px',
    position: 'absolute', 
    top: '35%', 
    left: 0, 
    color: '#fff', 
    textAlign: 'center',
    transform: 'translate3d(0, -500px, 0)',
    transition: 'transform .6s ease-out, opacity .7s ease-out'
  },
  hexagonLogo: {
    maxWidth: '200px',
    transition: 'transform .6s ease-out, opacity .7s ease-out'
  }
});

const PortfolioItem = props => {
  const { classes, backgroundImage, logo, heading, link, alternate } = props;

  return (
    <div className={classes.hexagonClipParent}>
        <div id='hexagonClip' style={{ backgroundImage: `url(${backgroundImage})` }} className={classes.hexagonClip}>
            <div id="hexagonClipOverlay" className={classes.hexagonClipOverlay}>
                <a href={link} target="_blank" className={classes.hexagonLink}>
                <img id='hexagonLogo' className={classes.hexagonLogo} src={logo} alt={heading} />
                <h2 id='hexagonH2' className={classes.hexagonClipH2}>{heading}</h2>
                </a>
            </div>
        </div>
    </div>
  );
}


export default withStyles(styles)(PortfolioItem);
