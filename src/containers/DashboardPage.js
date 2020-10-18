import React from 'react';
import { Switch, Route } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Icon from '@material-ui/core/Icon';
import Backdrop from '@material-ui/core/Backdrop';
import SideMenuItems from '../components/dashboard/SideMenuItems';
import Footer from '../components/footer/Footer';

import Dashboard from '../components/dashboard/Dashboard';
import Courses from '../components/courses/Courses';
import AddCourse from '../components/courses/AddCourse';
import CourseModules from '../components/courses/modules/CourseModules';
import AddCourseModule from '../components/courses/modules/AddCourseModule';
import DynamicTitle from '../components/dashboard/DynamicTitle';
import UploadVideoComponent from '../components/courses/upload/UploadVideoComponent';
import routes from '../constants/routes.json';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    minHeight: '55px'
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.primary.dark}`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'fixed',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    position: 'fixed',
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: '60px',
    [theme.breakpoints.up('sm')]: {
      width: '60px',
    },
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  }
}));

export default function DashboardPage(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout = () => {
    window.localStorage.removeItem('hostcourse_token');
    window.localStorage.removeItem('hostcourse_email');
    props.history.push(routes.LOGIN);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            <DynamicTitle match={props.match} />
          </Typography>
          
          <Tooltip title="Logout">
            <IconButton color="inherit" onClick={logout}> 
              <Icon className="fas fa-sign-out-alt" />
            </IconButton>
          </Tooltip>

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
            <SideMenuItems />
        </List>
      </Drawer>

      <div style={{ marginTop: '80px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Switch>
            <Route exact path={[routes.DASHBOARD]}>
                <Dashboard history={props.history} drawerWidth={drawerWidth} open={open} />
            </Route>
            <Route exact path={routes.COURSES_ADD}>
                <AddCourse history={props.history} drawerWidth={drawerWidth} open={open} />
            </Route>
            <Route exact path={routes.COURSES}>
                <Courses history={props.history} drawerWidth={drawerWidth} open={open} />
            </Route>
            <Route exact path={routes.COURSE_MODULES}>
                <CourseModules history={props.history} drawerWidth={drawerWidth} open={open} />
            </Route>
            <Route exact path={routes.COURSE_MODULES_ADD}>
                <AddCourseModule history={props.history} drawerWidth={drawerWidth} open={open} />
            </Route>
            <Route exact path={routes.UPLOAD_VIDEO}>
                <UploadVideoComponent history={props.history} drawerWidth={drawerWidth} open={open} />
            </Route>
        </Switch>

        <Backdrop open={open} onClick={handleDrawerClose} style={{ zIndex: 999 }} />
      </div>  
    </div>
  );
}