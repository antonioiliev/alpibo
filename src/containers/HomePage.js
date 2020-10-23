import React from 'react';
import AppFooter from '../components/homepage/AppFooter';
import Intro from '../components/homepage/Intro';
import WhatWeDo from '../components/homepage/WhatWeDo';
import TechStack from '../components/homepage/components/TechStack';
import AppAppBar from '../components/homepage/Header';
import Portfolio from '../components/homepage/Portfolio';
import Partners from '../components/homepage/Partners';

const HomePage = () => {

  return (
    <React.Fragment>
        <AppAppBar />
        <Intro />
        <WhatWeDo />
        <TechStack />
        <Portfolio />
        <Partners />
        <AppFooter />
    </React.Fragment>
  );
}

export default HomePage;
