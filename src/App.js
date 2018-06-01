import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [ 
      { name : 'Phil', age : 28 },
      { name : 'Andrew', age : 29 },
      { name : 'Jon Snow', age : 26 }
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was Clicked!!!');
    this.setState( {
      persons : [ 
        { name : newName, age : 28 },
        { name : 'Andrew', age : 29 },
        { name : 'Jon Snow', age : 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons : [ 
        { name : 'Phil', age : 28 },
        { name : event.target.value, age : 29 },
        { name : 'Jon Snow', age : 26 }
      ]
    } )
  }

  render() {
    //Inline style in react
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };
    return (
      <div className="App">
        <h1> Hi, I'm a React App </h1>
        <p> This is really Working !! </p>
        <button 
        style = {style}
        onClick={() => this.switchNameHandler('Phil!!!!!  ')}> Switch Name </button> {/*This type of bind can be used but not recommended*/}
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age} />
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, 'PHIL!!!!')} 
          changed = {this.nameChangedHandler} > My Hobbies : Racing </Person> {/*This bind is mostly recommended*/}
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>
      </div>
    );
    // The above code is JSX code which is compiled and written like below code which is done by the React.
    //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Does this work now??') );
    //This code is not recommended whereas above code is recommended
  }
}

export default App;
