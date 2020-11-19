import React from 'react';
import AppAppBar from '../components/homepage/Header';
import AppFooter from '../components/homepage/AppFooter';
import PrivacyPolicyContent from '../components/privacy/PrivacyPolicy';

const PrivacyPolicyPage = () => {

  return (
    <React.Fragment>
        <AppAppBar />
        <PrivacyPolicyContent />
        <AppFooter />
    </React.Fragment>
  );
}

export default PrivacyPolicyPage;
