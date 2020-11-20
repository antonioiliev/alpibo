import React from 'react';
import AppAppBar from '../components/homepage/Header';
import AppFooter from '../components/homepage/AppFooter';
import routes from '../constants/routes.json';

const ErrorPage = () => {

  return (
    <React.Fragment>
        <AppAppBar />
        <div style={{ minHeight: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2 style={{ paddingTop: '50px' }}>Oops... The page you are looking for does not exist.</h2>
            <a href={routes.HOME} alt="Link to homepage">Go back</a>
        </div>
        <AppFooter />
    </React.Fragment>
  );
}

export default ErrorPage;
