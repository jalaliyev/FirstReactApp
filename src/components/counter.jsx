import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }
  /*constructor() {
    super();
    this.handleInc = this.handleInc.bind(this);
  }*/
  /*handleInc = () => {
    this.setState({ value: this.state.value + 1 });
  };
*/
  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Inc
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-thirdly btn-sm"
        >
          Dec
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

//JSX, Rendering Lists, Conditional Rendering, Handling Events, Updating the State
//Composing Components: Pass Data, Raise and Handle Events, Multiple Components, Lifcicle Hook
