import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  servicesH5: {
    color: theme.palette.primary.light,
    fontSize: '22px',
    fontFamily: 'Advent Pro',
    fontWeight: 400,
    textTransform: 'uppercase',
    lineHeight: '1em',
    marginBottom: 0,
    zIndex: 3
  },
  servicesP: {
    color: theme.palette.primary.light,
    fontSize: '16px',
    fontWeight: 500,
    padding: '20px 0px',
    textAlign: 'center'
  },
  serviceDiv: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'space-between', 
    maxWidth: 300,
    paddingTop: 50,
    '& > img': {
      maxWidth: 100
    }
  }
});

const ServiceComponent = props => {
  const { classes, heading, description, image } = props;

  return (
    <div className={classes.serviceDiv}>
        <img src={image} alt="" />
        <h5 className={classes.servicesH5}>{heading}</h5>
        <p className={classes.servicesP}>{description}</p>
    </div>
  );
}


export default withStyles(styles)(ServiceComponent);
