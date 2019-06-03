import React from 'react';
import logoImage from '../../assets/Images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={logoImage} alt="Burger Time Logo"/>
    </div>
);

export default Logo;