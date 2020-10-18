import React from 'react';
import AppFooter from '../components/homepage/AppFooter';
import Intro from '../components/homepage/Intro';
import WhatWeDo from '../components/homepage/WhatWeDo';
import AppAppBar from '../components/homepage/Header.js';

const HomePage = () => {

  return (
    <React.Fragment>
        <AppAppBar />
        <Intro />
        <WhatWeDo />
    </React.Fragment>
  );
}

export default HomePage;
