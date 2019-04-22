import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
     //This is going to be our state.
    state = {
        userName: [
            {name: 'clarkexcore'},
            {name: 'alexSharke'}
        ]
    }

    usernameChange = (event) => {
        this.setState({
            userName: [
                {name: event.target.value},
                {name: 'alexSharke'}
            ]
        });
    }


    render() {
        const style = {
            color: "red"
        }
        return (
        <div className="App">
            <h1 style={style}>Hello {this.state.userName[0].name}</h1>
            <UserOutput  name={this.state.userName[0].name} />
            <UserOutput name={this.state.userName[0].name} />
            <UserOutput name={this.state.userName[1].name} />
            <UserInput change={this.usernameChange} value={this.state.userName[0].name}/>
        </div>
        );
    }
}

export default App;
