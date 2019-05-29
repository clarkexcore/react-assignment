import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withClass from '../../hoc/withClass';
import Aux from '../../hoc/Aux';
import classes from './Person.module.css';
import AuthContext from '../../context/auth-context';
//props can be anything but is universally used by this
//props.children are is whatever is between <Person></Person on the app.js file
class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render() {
        return (
            <Aux>
                {this.props.isAuth ? <p>Authenticated</p> : <p>Please Login</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.change} 
                    value={this.props.name} 
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                />
            </Aux>
        );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);