import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import ToggleSwitch from '../ToggleSwitch';


const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
      <ToggleSwitch label="dark-mode" />
    </header>
  );
};

export default MainHeader;
