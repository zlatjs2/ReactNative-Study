import React, { Component } from 'react';
import MyName from './MyName';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyName />
        <Counter />
      </div>
    );
  }
}

export default App;
