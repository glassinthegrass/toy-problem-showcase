import React, {Component} from 'react';

class Palindrome extends Component {
  constructor(){
    super()
    this.state={
      userInput:'',
      palindrome:''
    }
  }
  handleInput =(val) => this.setState({userInput: val})

  handleClick =(userInput) => {
    let forwards = userInput;
    let backwards = userInput;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');

    if ( forwards === backwards ) {
      this.setState({ palindrome: 'true' });
    } else {
      this.setState({ palindrome: 'false' });
    }

  }
    render() {
      return(
        <div className='puzzleBox palindromePB'>
           <h4> Palindrome 
             <p>{this.state.userInput}</p>
           </h4>

           <input className='inputLine' onChange={e => this.handleInput(e.target.value)}placeholder='type here idiot'></input>
           <button className='confirmationButton' onClick={()=> this.handleClick(this.state.userInput)}>PalindromeemordnilaP</button>
           <span className="resultsBox">{this.state.palindrome}</span>
      </div>
      )
    }
  }
  
  export default Palindrome;
  