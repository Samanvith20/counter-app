import React, { Component } from 'react';
import "./index.css"

class Counter extends Component {
  state = { count: 0 };

  onIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  onDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count } = this.state;
    return (
        <div className="outer-container">
      <div className="container">
        <h1 className="header">Counter</h1>
        <h1 className="count">{count}</h1>
        <div className="button-container">
          <button className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrement
          </button>
        </div>
      </div>
      </div>
    )
  }
}

export default Counter; // Move this line outside the class definition
