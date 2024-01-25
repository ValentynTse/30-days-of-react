import React, { Component } from "react";

class MouseCoordinateDisplay extends Component {
   state = {
      mouseX: 0,
      mouseY: 0,
   };

   handleMouseMove = (event) => {
      this.setState({
         mouseX: event.clientX,
         mouseY: event.clientY,
      });
   };

   render() {
      const { mouseX, mouseY } = this.state;

      return (
         <div
            style={{ height: '100vh', border: '1px solid #ccc' }}
            onMouseMove={this.handleMouseMove}
         >
            <p>Mouse Coordinates: ({mouseX}, {mouseY})</p>
         </div>
      );
   }
}

export default MouseCoordinateDisplay;