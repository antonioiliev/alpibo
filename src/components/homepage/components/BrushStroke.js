import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    yellowStrokeDiv: {
        clipPath: 'url(#YellowSvgPath)',
        position: 'relative',
        background: '#fff',
        margin: '100px,',
        transform: 'scale(1)',
        transformOrigin: 'left top'
    },
    yellowStrokeSVG: {
        width: '100%',
        position: 'absolute',
        top: '-56px',
        left: '-100px',
        strokeDasharray: '1800',
        strokeDashoffset: '-1800'
    },
    path: {
        stroke: '#8300e9',
        strokeWidth: 24,
        strokeMiterlimit: "10",
    }
});

const BrushStroke = props => {
  const { classes } = props;


  return (
    <div class="container">
        <div class="yellow-stroke">         
            <svg xmlns="http://www.w3.org/2000/svg" id="yellow-stroke">
            <path fill="none" stroke="#8300e9" stroke-miterlimit="10" stroke-width="34" d="M468 96H2l609-84 31 55-279 9L84 86"/>
            </svg>

            <svg >
                <defs>
                    <clipPath id="YellowSvgPath" transform="rotate(-2 471 26)">
                    <path d="M378 2H198L52 1H10L2 2c-3 0 0 1 0 1s6 13 1 16c-3 2 0 8 5 10 3 2 289 2 308 2l12-1c4 0 3-4 5-5h24l74-1 38 1h56c5 0 12-22 0-22l-65-1h-82"/>
                    </clipPath>
                </defs> 
            </svg>
        </div>
    </div>
  );
}

export default withStyles(styles)(BrushStroke);
