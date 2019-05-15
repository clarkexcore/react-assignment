import React, { Component } from 'react';

import withClass from '../../hoc/withClass';
import Aux from '../../hoc/Aux';
import classes from './Person.module.css';

//props can be anything but is universally used by this
//props.children are is whatever is between <Person></Person on the app.js file
class Person extends Component {
    render() {
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name}/>
            </Aux>
        );
    }
};

export default withClass(Person, classes.Person);