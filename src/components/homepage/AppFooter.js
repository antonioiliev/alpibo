import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.secondary.main,
  },
  container: {
    color: theme.palette.primary.light,
    minHeight: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 150,
    '& a': {
      fontFamily: 'Advent PRO',
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      color: theme.palette.secondary.main,
      textDecoration: 'none',
      fontSize: '75px',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      margin: '10px 0px',
      fontWeight: 900,
      // color: theme.palette.secondary.light,
      // textShadow: '-2px 0 #8224e3, 0 -2px #8224e3, 2px 0 #8224e3, 0 2px #8224e3, 2px 2px #8224e3, -2px -2px #8224e3, -2px 2px #8224e3, 2px -2px #8224e3, 6px 6px #8224e3'
      textShadow: '2px 0 #fff, 0 -2px #fff, 2px 0 #fff, 2px 2px #fff, 2px 2px #fff, -2px -2px #fff, -2px 2px #fff, 2px -2px #fff',
      transition: 'all 0.3s ease-out',
      [theme.breakpoints.down('sm')]: {
        fontSize: '40px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '24px'
      }
    },
    '& a:hover': {
      color: theme.palette.secondary.light,
      textShadow: 'none'
    },
    '& i': {
      paddingRight: 15
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
  bottomFooter: {
    borderTop: '2px solid #fff',
    paddingTop: '20px'
  },
  list: {
    padding: '0px',
  },
  listItem: {
    listStyleType: 'none',
    padding: '10px 0px'
  },
  listLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  socialIconsDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    '& a': {
      margin: '0px 10px',
    }
  },
  socialIcon: {
    border: `1px solid ${theme.palette.primary.light}`,
    padding: '10px',
    margin: '0px 5px'
  },
  h6: {
    color: theme.palette.primary.light,
    fontSize: '20px',
    margin: '30px 0px 20px 0px',
    fontWeight: 300
  },
  copyrightsDiv: {
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    padding: '20px',
    '& p': {
      textTransform: 'uppercase',
    }
  },
  p: {
    color: '#fff',
    textTransform: 'capitalize',
    fontWeight: 300,
    margin: 'auto',
    textAlign: 'center'
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
      width: 'calc(143% + 1.3px)',
      height: '93px',
    },
    '& path': {
      fill: theme.palette.secondary.light
    }
  },
  footerLinks: {
    color: theme.palette.primary.light,
    margin: '20px auto', 
    '& a': {
      color: theme.palette.primary.light,
      textDecoration: 'none',
      padding: '0px 10px'
    }
  }
}
));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}> 
      <div className={classes.shapeDivider}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
      </div>


      <div id="contact-us" className={classes.container}>
        <a href="mailto:antonio@alpibo.com">antonio@alpibo.com</a>
        <a href="https://www.facebook.com/alpibowebdesign" target="_blank" rel="noopener noreferrer">Follow on Facebook</a>
        <a href="https://twitter.com/AlpiboA" target="_blank" rel="noopener noreferrer">Follow on Twitter</a>
        <a href="https://github.com/antonioiliev" target="_blank" rel="noopener noreferrer">Visit GitHub</a>
      </div>
      <div className={classes.copyrightsDiv}>
        <div className={classes.footerLinks}>
          <a href="/privacy-policy">Privacy Policy</a>|
          <a href="https://blog.alpibo.com">Blog</a>
        </div>
        <p className={classes.p}>COPYRIGHT © ALPIBO {new Date().getFullYear()}. All rights reserved</p>

      </div>
    </div>
  );
}
