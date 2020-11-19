import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../constants/routes.json';
import HomePage from './HomePage';
import PrivacyPolicyPage from './PrivacyPolicy';
import Cookies from 'js-cookie';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  cookieDiv: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    background: theme.palette.secondary.main,
    zIndex: 999,
    padding: '20px 30px',
    '& p': {
      color: '#fff',
      textAlign: 'center',
      fontSize: '14px'
    }
  },
  flexRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  consentButton: {
    background: '#fff',
    color: '#333',
    padding: '10px 50px',
    border: 'none',
    fontSize: '18px',
    border: `1px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.secondary.main,
      color: '#fff',
      border: `1px solid #fff`
    },
    [theme.breakpoints.down('sm')]: {
      margin: '10px 0px'
    }
  },
  privacyPolicyLink: {
    color: '#fff',
    margin: '0px 10px',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});

const App = props => {
  const { classes } = props;
  const [hasValidCookie, setHasValidCookie] = React.useState(false);
  React.useEffect(() => {
    const hasCookie = Cookies.get('alpibo-consent-cookie');
    if (hasCookie !== undefined) {
      setHasValidCookie(true);
    }
  }, []);

  const consent = () => {
    Cookies.set('alpibo-consent-cookie', '1', { expires: 30 });
    setHasValidCookie(true);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route exact path={routes.PRIVACY_POLICY} component={PrivacyPolicyPage} />
      </Switch>
      {!hasValidCookie && (
        <div className={classes.cookieDiv}>
          <p>Our website is set to allow cookies. We use cookies to ensure that you have the best website experience. Through your interactions with our website, we can make sure our digital marketing is personalised to you. If you click the 'I understand' button or continue to use this site we will assume that you are happy with it. </p>
          <div className={classes.flexRow}>
            <button onClick={consent} className={classes.consentButton}>I understand</button>
            <a href="/privacy-policy" className={classes.privacyPolicyLink} alt="Link to privacy policy page">Privacy and cookies policy</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default withStyles(styles)(App);
