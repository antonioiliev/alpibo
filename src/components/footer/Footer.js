import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Footer = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center" style={{ position: 'absolute', bottom: 0, padding: '50px 0px 30px 0px' }}>
        {'Copyright © '}
        <Link color="inherit" href="https://hostcourse.com/">
          HOSTCOURSE
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export default Footer;