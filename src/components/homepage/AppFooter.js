import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 100px',
    backgroundColor: theme.palette.primary.dark,
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
    justifyContent: 'flex-end'
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
  pGrid: {
    padding: '20px'
  },
  p: {
    color: '#fff',
    textTransform: 'capitalize',
    fontWeight: 300,
    margin: 'auto'
  }
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container>

          <Grid item xs={6} sm={4} md={3}>

          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <h6 className={classes.h6}>Explore</h6>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <a href="#" className={classes.listLink}>Features</a>
              </li>
              <li className={classes.listItem}>
                <a href="#" className={classes.listLink}>Pricing</a>
              </li>
              <li className={classes.listItem}>
                <a href="#" className={classes.listLink}>Examples</a>
              </li>
              <li className={classes.listItem}>
                <a href="#" className={classes.listLink}>Courses</a>
              </li>
            </ul>
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <h6 className={classes.h6}>Company</h6>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <a href="#" className={classes.listLink}>About</a>
              </li>
              <li className={classes.listItem}>
                <a href="#" className={classes.listLink}>Careers</a>
              </li>
              <li className={classes.listItem}>
                <a href="#" className={classes.listLink}>Blog</a>
              </li>
              <li className={classes.listItem}>
                <a href="#" className={classes.listLink}>Affiliates</a>
              </li>
            </ul>
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <h6 className={classes.h6}>Support</h6>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <a href="#" className={classes.listLink}>Knowledge Base</a>
              </li>
              <li className={classes.listItem}>
                <a href="#" className={classes.listLink}>Contact Support</a>
              </li>
              <li className={classes.listItem}>
                <a href="#" className={classes.listLink}>Contact Sales</a>
              </li>
              <li className={classes.listItem}>
                <a href="#" className={classes.listLink}>Privacy Policy</a>
              </li>
              <li className={classes.listItem}>
                <a href="#" className={classes.listLink}>Terms Of Use</a>
              </li>
              <li className={classes.listItem}>
                <a href="#" className={classes.listLink}>Cookie Policy</a>
              </li>
            </ul>
          </Grid>

        </Grid>
        <Grid container className={classes.bottomFooter}>
          <Grid item xs={12} sm={6} md={6} justifyContent="flex-start" className={classes.pGrid}>
            <p className={classes.p}>© Hostcourse {new Date().getFullYear()}. All rights reserved</p>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className={classes.socialIconsDiv}>
              <IconButton color="primary" className={classes.socialIcon}>
                <Icon className="fab fa-facebook" />
              </IconButton>
                <IconButton color="primary" className={classes.socialIcon}>
              <Icon className="fab fa-twitter" />
              </IconButton>
              <IconButton color="primary" className={classes.socialIcon}>
                <Icon className="fab fa-instagram" />
              </IconButton>
              <IconButton color="primary" className={classes.socialIcon}>
                <Icon className="fab fa-pinterest" />
              </IconButton>
              <IconButton color="primary" className={classes.socialIcon}>
                <Icon className="fab fa-linkedin-in" />
              </IconButton>
            </div>
          </Grid>
        </Grid>
    </div>
  );
}
