import React, { Component } from 'react';
import  * as math from 'mathjs';
import Numbers from './components/numbers';
import InputNum from './components/InputNum';
import Header from './components/Header';
import './App.css';


class App extends Component {

  state = {
    input: ""
  }

  handleNumClick = event => {
    let input = event.target.value
    this.setState({
      input: this.state.input + input
    })
  }

  handleEqual = () => {
    let expr = this.state.input;
    this.setState({input: math.eval(expr)})
   // math.eval(expr)
  }
 
  resetInput = () => {
    this.setState({
      input: ""
    })
  }


  render() {
        return (
      <div className="App">
        <Header />
        <InputNum default={this.state.input}/>
        <Numbers handleNumClick={this.handleNumClick} resetInput={this.resetInput} handleEqual={this.handleEqual}/>
      </div>
    );
  }
}

export default App;
