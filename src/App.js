import React, { Component } from "react";
import "./App.css";


class App extends Component {
  state = { show: false,count:0 };
  handleClick = () => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
  };

  increment=()=>{
    this.setState({count: this.state.count+1})
  }
  decrement=()=>{
    this.state.count>0 &&  this.setState({count: this.state.count-1}) 
       
  }

  render() {
    return (
      <div className="App">
        <button
          onClick={this.handleClick}
          /* className={this.state.show ? "btnTrue" : "btnFlse"} */
          style={this.state.show ? {backgroundColor:"green"}: {backgroundColor:"red"}}
        >
          changeMyStyle
        </button>
        <div>
        <button onClick={this.increment}>+</button>
        <h3>{this.state.count}</h3>
        <button onClick={this.decrement}>-</button>
        </div>

      </div>
    );
  }
}
export default App;
