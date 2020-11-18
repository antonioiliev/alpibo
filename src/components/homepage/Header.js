import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from './components/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import routes from '../../constants/routes.json';
import anime from 'animejs/lib/anime.es.js';
import HeaderMenu from './components/HeaderMenu';

const styles = (theme) => ({
  appbar: {
    background: theme.palette.primary.light,
    [theme.breakpoints.up('md')]: {
      padding: '0px 70px'
    }
  },
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 300,
    marginLeft: '20px',
    color: theme.palette.primary.dark
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    maxWidth: '2000px',
    margin: 'auto',
    [theme.breakpoints.down('lg')]: {
      flexBasis: '90%'
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between',
      
    }
  },
  svgLineDiv: {
    background: theme.palette.primary.dark,
  },
  svg: {
    background: theme.palette.primary.dark,
  },
  svgLine: {
    stroke: theme.palette.secondary.dark, 
    strokeWidth: 10,
    strokeDasharray: 100,
    strokeDashoffset: 100,
  },
  logo: {
    maxWidth: '50px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '50px'
    }
  }
});

const Header = props => {
  const { classes } = props;

  React.useEffect(() => {
    anime({
      targets: ['#svgBorder line'],
      strokeDashoffset: [100, 0],
      loop: false,
      direction: 'alternate',
      easing: 'easeInOutExpo'
    });
  }, []);

  return (
    <React.Fragment>
      <AppBar position="fixed" elevation={2} className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href={routes.HOME}
          >
            <img className={classes.logo} src={process.env.PUBLIC_URL + '/logo.svg'} alt="Alpibo logo" />
          </Link>
          <HeaderMenu />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}


export default withStyles(styles)(Header);
