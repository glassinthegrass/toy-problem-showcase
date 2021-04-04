import React, { Component } from 'react';

export default class FilterObject extends Component {

  constructor() {
    super();
    this.state = {
      users: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],

      userInput: '',
      filteredUsers: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterEmployees(input) {
    let unfilteredUsers = this.state.users;
   let match =[]
for(let i =0; i <unfilteredUsers.length; i++){
    for(let key in unfilteredUsers[i]){
      if(key === input){
        match.push(unfilteredUsers[i])
      }
    }
  }
    this.setState({ filteredUsers: match });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.users, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredUsers, null, 10) } </span>
      </div>
    )
  }
}