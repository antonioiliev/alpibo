import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BusinessTrendLogo from '../../media/logo/business-trend.png';

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
    [theme.breakpoints.down('md')]: {
      paddingTop: '50px',
    },
  },
  container: {
    // marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px 70px',
    [theme.breakpoints.up('md')]: {
      flexBasis: '90%'
    },
    [theme.breakpoints.down('md')]: {
      flexBasis: '90%',
      padding: '0px 20px'
    }
  },
  contentDiv: {
    width: '100%', 
    maxWidth: '700px',
    display: 'flex',
    alignItems: 'center', 
    margin: 'auto', 
    borderRadius: '5px', 
    background: '#f2f2f2', 
    padding: '20px', 
    margin: '50px auto', 
    boxShadow: '0px 0px 5px rgba(0,0,0,0.5)',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '20px 0px'
    }
  },
  partnerLogo: {
    width: '300px', 
    height: '100px',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      maxWidth: 200,
      margin: '20px 0px'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 100
    }
  },
  heroH2: {
    color: theme.palette.primary.main,
    fontSize: '96px',
    fontFamily: 'Advent Pro',
    fontWeight: 400,
    textTransform: 'uppercase',
    lineHeight: '1em',
    marginBottom: 0,
    zIndex: 3,
    [theme.breakpoints.down('md')]: {
      fontSize: '65px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '55px',
      textAlign: 'center'
    }
  },
  boldSpan: {
    fontWeight: 900,
    color: theme.palette.secondary.light,
    textShadow: '-2px 0 #8224e3, 0 -2px #8224e3, 2px 0 #8224e3, 0 2px #8224e3, 2px 2px #8224e3, -2px -2px #8224e3, -2px 2px #8224e3, 2px -2px #8224e3, 6px 6px #8224e3'
  },
});

function Partners(props) {
  const { classes } = props;

  return (
    <div id="partners" className={classes.root}>
        <div className={classes.container}>
            <h2 className={classes.heroH2}><span className={classes.boldSpan}>Our Partners</span></h2>

            <div className={classes.contentDiv}>
                <img className={classes.partnerLogo} src={BusinessTrendLogo} alt="Business Trend"/>
                <div style={{ padding: '0px 20px' }}>
                    <h3>BusinessTrend</h3>
                    <p>Business Trend is an agency that specializes in Google Ads, Facebook Ads and SEO optimisation. These experts have time and time again shown results for us and our clients.</p>
                    <a href="#" target="_blank">Visit website</a>
                </div>
            </div>
        </div>
    </div>
  );
}


export default withStyles(styles)(Partners);
