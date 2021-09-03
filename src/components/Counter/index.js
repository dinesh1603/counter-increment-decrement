import { Component } from "react";
import "./index.css";

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
      <div className="container">
        <h1 className="heading">
          The Button has been clicked
          <br />
          <span className="count-color"> {count} </span>times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <div className="button-container">
          <button
            type="button"
            className="button btn btn-primary"
            onClick={this.onIncrement}
          >
            Increment!
          </button>
          <button
            type="button"
            className="button btn btn-primary"
            onClick={this.onDecrement}
          >
            Decrement!
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
