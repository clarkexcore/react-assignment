import React, { Component } from 'react';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundry';
import Person from '../Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log("[Persons.js] getDerivedState");
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Persons.js] ShouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("[Persons.js] getSnapShotBefore");
        return {message: "snapshot!"}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Persons.js] componentDidUpdate");
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log("[Persons.js] component will unmount");
    }

    render() {
        return this.props.persons.map((person, index) => {
            return (
                <ErrorBoundary key={person.id}>
                    <Person
                        name={person.name}
                        click={() => this.props.clicked(index)}
                        age={person.age}
                    change={(event) => this.props.changed(event, person.id)}
                    />
                </ErrorBoundary>
            )
        });
    }
}


export default Persons;