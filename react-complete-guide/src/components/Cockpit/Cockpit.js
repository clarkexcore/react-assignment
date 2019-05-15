import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    let btnClass = "";
    btnClass = classes.Red
    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p>This is really working!!</p>
            <button className={btnClass} onClick={props.toggle}>Switch Name</button>
        </div>
    );
}

export default cockpit;