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
    maxWidth: 300,
    paddingTop: 50,
    '& > img': {
      width: 100
    }
  }
});

const ServiceComponent = props => {
  const { classes, heading, description, image, color } = props;

  return (
    <div className={classes.serviceDiv}>
        <img src={image} alt="" />
        {heading !== undefined && (
          <h5 className={classes.servicesH5}>{heading}</h5>
        )}
        <p className={classes.servicesP, color !== undefined ? classes.colorLight : classes.colorDark}>{description}</p>
    </div>
  );
}


export default withStyles(styles)(ServiceComponent);
