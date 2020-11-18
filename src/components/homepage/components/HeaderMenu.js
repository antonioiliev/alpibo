import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme) => ({
    center: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
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
        color: theme.palette.primary.dark,
        marginLeft: theme.spacing(3),
    },
    link: {
        color: theme.palette.primary.dark,
        padding: '20px 20px',
        fontSize: '24px',
        transition: 'all 0.5s ease-out',
        '&:hover': {
            background: theme.palette.secondary.main,
            color: theme.palette.secondary.light,
            textDecoration: 'none'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.down('md')]: {
            margin: '0px',
        }
    },
    linkSecondary: {
        border: `1px solid ${theme.palette.primary.dark}`,
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
    },
    drawer: {
        '& .MuiDrawer-paper': {
            width: '80%'
        }
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
    const [drawerOpen, setDrawerOpen] = React.useState(false);
  
    const toggleDrawer = open => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerOpen(open);
    };

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
                <React.Fragment>
                    <IconButton 
                        edge="start" 
                        className={classes.menuButton} 
                        color="inherit" 
                        onClick={toggleDrawer(true)}
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor='right'
                        open={drawerOpen}
                        className={classes.drawer}
                        width="100%"
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                        {menuItems.map((value, index) => {
                            return <Link key={`menu-link-${index}`} className={classes.link} href={value.href} onClick={toggleDrawer(false)}>{value.title}</Link>
                        })}
                    </Drawer>
                </React.Fragment>
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
