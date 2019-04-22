import React from 'react';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundry';
import Person from '../Person';

const persons = (props) =>  props.persons.map((person, index) => {
    return <ErrorBoundary key={person.id}>
        <Person
            name={person.name}
            click={() => props.clicked(index)}
            age={person.age}
            change={(event) => props.changed(event, person.id)}
        />
    </ErrorBoundary>
});

export default persons;