import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log("[Cockpit.js] useEffect");
        //Http request...
        setTimeout(() => {
            alert("Saved Data to Cloud");
        }, 1000);
        return () => {
            console.log("[Cockpit.js] Cleanup UE")
        }
    }, []);

    useEffect(() => {
        console.log("[Cockpit.js] 2 useEffect")
        return () => {
            console.log("[Cockpit.js] 2 Cleanup UE")
        }
    });

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

export default Cockpit;