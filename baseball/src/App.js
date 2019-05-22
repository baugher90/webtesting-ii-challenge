import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Display from './components/display/Display';
import './App.css';

class App extends React.Component {
  state ={
    balls: 0,
    strikes: 0
  }

render() {
  return (
    <div className="App">
      <Display
        balls={this.state.balls} 
        strikes={this.state.strikes}
      />
      <Dashboard
        ball={this.ball}
        strike={this.strike}
        foul={this.foul}
        hit={this.hit}
      />
    </div>
  );
}

ball = () => {
  const { balls } = this.state;
  if (balls < 3) {
    this.setState({ balls: this.state.balls + 1 });
  } else {
    this.setState({ balls: 0 });
  }
};

strike = () => {
  const { strikes } = this.state;
  if (strikes < 2) {
    this.setState({ strikes: this.state.strikes + 1 });
  } else {
    this.setState({ strikes: 0 });
  }
};

foul = () => {
  const { strikes } = this.state;
  if (strikes < 2) {
    this.setState({ strikes: this.state.strikes + 1 });
  }
};

hit = () => {
  this.setState({ balls: 0, strikes: 0 });
};
  
}

export default App;
