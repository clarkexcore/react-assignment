import React from 'react';

import "./UserOutput.css";

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Welcome {props.name}, this is a React Assignment for the react course on Udemy.</p>
            <p>This is a practice assignment course. Where you can change your username, {props.name}, to anything you'd like!</p>
        </div>

    );

};

export default userOutput;