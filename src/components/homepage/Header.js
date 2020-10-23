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
    height: '70px',
    background: theme.palette.primary.dark,
  },
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 300,
    marginLeft: '20px',
    color: theme.palette.primary.light
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  svgLineDiv: {
    background: theme.palette.primary.dark,
  },
  svg: {
    background: theme.palette.primary.dark,
  },
  svgLine: {
    stroke: theme.palette.secondary.light, 
    strokeWidth: 10,
    strokeDasharray: 100,
    strokeDashoffset: 100,
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
      <AppBar position="relative" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href={routes.HOME}
          >
            {'ALPIBO'}
          </Link>
          <HeaderMenu />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}


export default withStyles(styles)(Header);
