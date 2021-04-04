import React, {Component} from 'react';

class FilterString extends Component {
constructor() {
  super()
  this.state ={
    userInput: '',
    names: ['Jared','Lisa','Reagan','Finn','Sadie','Lucy','Harry','Laura','Eric'],
    filteredNames:[]
  }
}

handleInput =(val)=> {
this.setState({userInput: val})
}

handleButton =(input)=>{
let  filtered = this.state.names.filter( ele => ele.includes(input)) 
this.setState({filteredNames: filtered})
}

    render() {
      return(
        <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText">{this.state.names}</span>
        <input className="inputLine" onChange={e => this.handleInput(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.handleButton(this.state.userInput)}></button>
        <span className="resultsBox filterStringRB">{this.state.filteredNames}</span>
      </div>
      )
    }
  }
  
  export default FilterString;
  