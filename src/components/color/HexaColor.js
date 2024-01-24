import React, { Component } from 'react';
import { hexaColor } from '../../utils/hexadecimal-color-generator';

class HexaColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: hexaColor(),
    };
  }

  changeColor = () => {
    this.setState({
      backgroundColor: hexaColor(),
    });
  };

  render() {
    const { backgroundColor } = this.state;

    return (
      <div
        style={{
          textAlign: 'center',
          border: '2px solid',
          height: 50,
          backgroundColor,
          color:'white',
          cursor: 'pointer',
        }}
        onClick={this.changeColor}
      >
        {backgroundColor}
      </div>
    );
  }
}

export default HexaColor;