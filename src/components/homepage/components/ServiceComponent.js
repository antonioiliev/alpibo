import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  servicesH5: {
    color: theme.palette.primary.dark,
    fontSize: '22px',
    fontFamily: 'Advent Pro',
    fontWeight: 400,
    textTransform: 'uppercase',
    lineHeight: '1em',
    marginBottom: 0,
    textAlign: 'center',
    zIndex: 3
  },
  servicesP: {
    fontSize: '16px',
    fontWeight: 500,
    padding: '20px 0px',
    textAlign: 'center'
  },
  colorLight: {
    color: theme.palette.primary.light,
  },
  colorDark: {
    color: theme.palette.primary.dark,
  },
  serviceDiv: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'flex-start',
    // maxWidth: 300,
    width: '350px',
    padding: '50px 20px 0px 20px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '90%',
      minWidth: '200px',
      marginTop: 70
    }
  },
  img: {
    [theme.breakpoints.down('sm')]: {
      width: '130px'
    },
    ['@media (max-width: 439px)']: {
      width: '150px'
    }
  },
  imgNormalWidth: {
    width: 100
  },
  imgNodeJS: {
    width: 160
  }
});

const ServiceComponent = props => {
  const { id, classes, heading, description, image, color } = props;

  return (
    <div id={id} className={classes.serviceDiv}>
        <img loading="lazy" src={image} className={clsx(classes.img, id == 'nodejs-service-component' ? classes.imgNodeJS : classes.imgNormalWidth)} alt={heading} />
        {heading !== undefined && (
          <h5 className={classes.servicesH5}>{heading}</h5>
        )}
        <p className={clsx(classes.servicesP, color && classes.colorLight, !color && classes.colorDark)}>{description}</p>
    </div>
  );
}


export default withStyles(styles)(ServiceComponent);
