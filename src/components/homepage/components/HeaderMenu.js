import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import routes from '../../../constants/routes.json';

const styles = (theme) => ({
    center: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.primary.light,
        marginLeft: theme.spacing(3),
    },
    link: {
        color: theme.palette.primary.light,
        padding: '0px 10px',
        margin: '0px 10px'
    },
    linkSecondary: {
        border: `1px solid ${theme.palette.primary.light}`,
        color: theme.palette.primary.dark,
        padding: '5px 15px',
        borderRadius: 5
    },
    loggedAvatar: {
        cursor: 'pointer', 
        background: theme.palette.primary.light,
        border: `1px solid ${theme.palette.primary.light}`,
        color: theme.palette.primary.dark
    },
    menuButton: {
        color: theme.palette.primary.dark
    }
});

const menuItems = [
    {
        title: 'Services',
        href: '#services'
    },
    {
        title: 'Portfolio',
        href: '#portfolio'
    },
    {
        title: 'Partners',
        href: '#partners'
    },
    {
        title: 'Contact us',
        href: '#contact-us'
    },
    {
        title: 'Blog',
        href: '/blog'
    }
];

const HeaderMenu = props => {
  const { classes } = props;
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
        setScreenWidth(window.innerWidth);
        console.log('inner width', window.innerWidth);
    });
  }, []);

  return (
    <React.Fragment>
        {screenWidth >= 960 ? (
            <React.Fragment>
                <div className={classes.center}>
                    {menuItems.map((value, index) => {
                        return <Link key={`menu-link-${index}`} className={classes.link} href={value.href}>{value.title}</Link>
                    })}
                    
                </div>
            </React.Fragment>
        ) : (
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
        )}
    </React.Fragment>
  );
}

HeaderMenu.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderMenu);
