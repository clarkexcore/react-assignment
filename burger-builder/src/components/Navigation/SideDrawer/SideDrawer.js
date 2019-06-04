import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationsItems';

import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    // ...Conditionally attach css here.
    return (
        <div className={classes.SideDrawer}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default sideDrawer;