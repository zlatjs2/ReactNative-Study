import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }
  handleDecrease = () => {
    this.setState(({ number }) => ({
      number: number - 1
    }));
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값 : {this.state.number}</div>
        <button type="button" onClick={this.handleIncrease}>증가</button>
        <button type="button" onClick={this.handleDecrease}>감소</button>
      </div>
    );
  }
}

export default Counter;
