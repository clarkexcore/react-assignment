import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const cockpit = props => {
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

    const assignedClasses = [];
    let btnClass = "";
    if(props.showPersons) {
        btnClass = classes.Red
    }
    if(props.personsLength <= 2){
        assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1){
        assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p>This is really working!!</p>
            <button className={btnClass} onClick={props.toggle}>Switch Name</button>
        </div>
    );
}

export default React.memo(cockpit);