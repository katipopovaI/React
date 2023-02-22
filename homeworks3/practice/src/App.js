import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
    };

    // this.state = {
    //   counter: 0,
    // };
  }

  increment = () => {
    this.setState((state) => ({
      counter: state.counter < 10 ? state.counter + 1 : state.counter,
    }));
  };

  decriment = () => {
    this.setState((state) => ({
      counter: state.counter > -10 ? state.counter - 1 : state.counter,
    }));
  };

  random = () => {
    this.setState({
      counter: +(Math.random() * (10 - -10) + -10).toFixed(0),
    });
    // this.setState((state) => ({
    //   counter: (state.counter= +(Math.random() * (10 - -10) + -10).toFixed(0)),
    // }));
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
    // this.setState((state) => ({
    //   counter: (state.counter = 0),
    // }));
  };

  render() {
    return (
      <div className="app">
        <div className="counter">{this.state.counter}</div>
        <div className="controls">
          <button onClick={this.increment}>INC</button>
          <button onClick={this.decriment}>DEC</button>
          <button onClick={this.random}>RND</button>
          <button onClick={this.reset}>RESET</button>
        </div>
      </div>
    );
  }
}
export default App;
