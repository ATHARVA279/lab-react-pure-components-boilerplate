import React, { PureComponent } from 'react';

export default class PureCounterComponent extends PureComponent {
  constructor() {
    super();

    this.state = {
      count: 0,
      toggle: false,
    };
  }

  handleClick = () => {
    if (this.state.toggle) {
      this.setState({ count: this.state.count + 1 });
      console.log('this is a pure component');
    }
  };

  render() {
    let { count, toggle } = this.state;

    return (
      <div>
        <h2>Pure Counter Components</h2>
        <h3>{count}</h3>
        <button onClick={() => this.setState({ toggle: !toggle })}>Toggle</button>
        <button onClick={this.handleClick}>Counter</button>
      </div>
    );
  }
}
