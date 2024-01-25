import React, { Component } from "react";
class AlertBox extends Component {
   render() {
      const { type, message } = this.props
      return (
         <div className={`alert-box ${type}`}>
            <p>{message}</p>
         </div>
      );
   }
};

export default AlertBox;