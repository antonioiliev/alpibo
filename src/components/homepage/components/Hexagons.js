import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Hexagon from './Hexagon';

const styles = (theme) => ({
  root: {
    position: 'absolute',
    top: 360,
    right: -770,
    zIndex: 1,
    [theme.breakpoints.up('xl')]: {
      top: 250,
      right: -200,
    },
    [theme.breakpoints.down('xl')]: {
      top: 250,
      right: -400,
    },
    ['@media (min-width: 1281px) and (max-width: 1779px)']: {
      right: -800,
    },
    [theme.breakpoints.down('md')]: {
      top: 200,
      right: -700,
    },
    ['@media (max-width: 1120px)']: {
      display: 'none'
    }
  },
  svgPolygon: {
    // fill: theme.palette.secondary.main,
    // strokeWidth: 2,
    // stroke: theme.palette.secondary.main,
    strokeDasharray: 1000,
    zIndex: -1
  },
  svgHexagon1: {
    position: 'relative',  
    height: 300,
    width: 170,
    [theme.breakpoints.down('md')]: {
      height: 250,
      width: 140,
      top: 275,
      left: -155
    },
    ['@media (max-width: 1120px)']: {
      display: 'none'
    }
  },
  svgHexagon2: {
    position: 'relative',
    top: 150,
    left: -85,
    height: 300,
    width: 170,
    [theme.breakpoints.down('md')]: {
      height: 250,
      width: 140
    },
    ['@media (max-width: 1120px)']: {
      display: 'none'
    }
  },
  svgHexagon3: {
    position: 'relative',
    top: 150,
    left: -85,
    height: 300,
    width: 170,
    [theme.breakpoints.down('md')]: {
      height: 250,
      width: 140,
    },
    ['@media (max-width: 1120px)']: {
      display: 'none'
    }
  },
  svgHexagon4: {
    position: 'relative',
    top: 150,
    left: -595,
    height: 300,
    width: 170,
    [theme.breakpoints.down('md')]: {
      height: 250,
      width: 140,
      left: -645,
    },
    ['@media (max-width: 1120px)']: {
      display: 'none'
    }
  },
  svgHexagon5: {
    position: 'relative',
    top: 0,
    left: -340,
    height: 300,
    width: 170,
    [theme.breakpoints.down('md')]: {
      height: 250,
      width: 140,
      top: 25,
      left: -435
    },
    ['@media (max-width: 1120px)']: {
      display: 'none'
    }
  },
  svgHexagon6: {
    position: 'relative',
    top: 300,
    left: -510,
    height: 300,
    width: 170,
    [theme.breakpoints.down('md')]: {
      height: 250,
      width: 140,
      top: 275,
      left: -575
    },
    ['@media (max-width: 1120px)']: {
      display: 'none'
    }
  },
  svgHexagon7: {
    position: 'relative',
    top: 445,
    left: -765,
    height: 300,
    width: 170,
    [theme.breakpoints.down('md')]: {
      height: 250,
      width: 140,
      top: 150,
      left: -925
    },
    ['@media (max-width: 1120px)']: {
      display: 'none'
    }
  },
  svgHexagon8: {
    position: 'relative',
    top: 300,
    right: 1190,
    height: 300,
    width: 170,
    [theme.breakpoints.down('md')]: {
      height: 250,
      width: 140,
      top: 275,
      right: 1275
    },
    ['@media (max-width: 1120px)']: {
      display: 'none'
    }
  }
});

function Hexagons(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Hexagon id="hexagon1" svgClass={classes.svgHexagon1} polygonClass={classes.svgPolygon} />
      <Hexagon id="hexagon2" svgClass={classes.svgHexagon2} polygonClass={classes.svgPolygon} />
      <Hexagon id="hexagon3" svgClass={classes.svgHexagon3} polygonClass={classes.svgPolygon} />
      <Hexagon id="hexagon4" svgClass={classes.svgHexagon4} polygonClass={classes.svgPolygon} />
      <Hexagon id="hexagon5" svgClass={classes.svgHexagon5} polygonClass={classes.svgPolygon} />
      <Hexagon id="hexagon6" svgClass={classes.svgHexagon6} polygonClass={classes.svgPolygon} />
      <Hexagon id="hexagon7" svgClass={classes.svgHexagon7} polygonClass={classes.svgPolygon} />
      <Hexagon id="hexagon8" svgClass={classes.svgHexagon8} polygonClass={classes.svgPolygon} />
    </div>
  );
}

export default withStyles(styles)(Hexagons);
