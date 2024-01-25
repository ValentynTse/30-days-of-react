import React, { Component } from 'react';

class InputComponent extends Component {
    
  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder="Type something..."
      />
    );
  }
}

export default InputComponent;
