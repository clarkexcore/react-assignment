// Always need to import React
import React, { Component } from 'react';
import classes from './App.module.css';
import './App.css';

import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Person/Persons/Persons';

import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props){
    super(props);
    console.log("[App.js] constructor");
  }
  //State is really important 
  state = {
    persons: [
      {id: 1, name: 'Alex', age: 28},
      {id: 2, name: 'Matty', age: 27},
      {id: 3, name: 'Brent', age: 38}
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }
  

  static getDerivedStateFromProps(props, state){
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] Component Did Mount");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[App.js] should component update");
    return true;
  }

  componentDidUpdate(){
    console.log("[App.js] Component Did Update");
  }

  //Method for Switch Names
//   switchNameHandler = (newName) => {
//     //console.log("This was clicked");
//     //DO NOT USE this.state.persons[0].name = "Alexander";
//     this.setState({
// 		persons: [
// 			{ name: 'Alexander', age: 28},
// 			{ name: 'Matty', age: 28},
// 			{ name: newName, age: 39}
// 		]
//     })
// 	}

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }
	
	nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        //The Old way
        //const person = Object.assign({}, this.state.persons[personIndex]);

        //This NEW Way
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

		  this.setState((prevState, props) => {
        return{
          persons: persons, 
          changeCounter: prevState.changeCounter + 1
        }
      });
    }
    
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    loginHandler = () => {
      console.log("Yo");
      this.setState({
        authenticated: true
      });
    }

   //Always need to render HTML to the DOM
  render() {
    console.log("[App.js] render");
    //People like to create style in JS
    //Inline styles are scoped to the component/module/elements
    // const style = {
    //     backgroundColor : 'white',
    //     font: 'inherit',
    //     border: '1px solid blue',
    //     padding: '8px',
    //     cursor: 'pointer',
    // };

    //Making the conditions for the render object. Preferred way of outputting content.
    let persons = null;

    if (this.state.showPersons) {
        persons = 
            <Persons 
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}
                isAuthenticated={this.state.authenticated}
            />
    }

    return (
      //This is JSX not HTML.
      	<Aux>
          <button onClick={() => {this.setState({ showCockpit: false })}}>Remove Cockput</button>
          <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
          {this.state.showCockpit ? 
            <Cockpit
              personsLength={this.state.persons.length}
              title={this.props.appTitle} 
              toggle={this.togglePersonsHandler}
              showPersons={this.state.showPersons}
              login={this.loginHandler}
            /> 
            : null}
          {persons}        
          </AuthContext.Provider>
      	</Aux>
      
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

//We need to always export these things.
//Radium() is a higher order function.  
export default withClass(App, classes.App);
 