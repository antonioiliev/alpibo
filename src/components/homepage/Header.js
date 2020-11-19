import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from './components/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import routes from '../../constants/routes.json';
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
    color: theme.palette.primary.dark,
    display: 'flex'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    maxWidth: '2000px',
    margin: 'auto',
    padding: '0px 50px',
    [theme.breakpoints.down('lg')]: {
      flexBasis: '90%',
      padding: '0px 50px',
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between',
      padding: '0px 0px'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0px 20px'
    }
  },
  logo: {
    maxWidth: '120px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '80px'
    }
  }
});

const Header = props => {
  const { classes } = props;

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
            <img loading="lazy" className={classes.logo} src={process.env.PUBLIC_URL + '/logo_name.svg'} alt="Alpibo logo" />
          </Link>
          <HeaderMenu />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}


export default withStyles(styles)(Header);
