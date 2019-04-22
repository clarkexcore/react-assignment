import React from 'react';
import './Person.css';

//props can be anything but is universally used by this
//props.children are is whatever is between <Person></Person on the app.js file
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
};

export default person;