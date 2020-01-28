// Code CoordinatesButton Component Here
import React from 'react';
import { useImperativeHandle } from "react";

class CoordinatesButton extends React.Component {
  handleClick = (e) => {

  this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }
  
  render() {
    return(
      <button onClick={this.handleClick}>Coords</button>
    )
  }
}

export default CoordinatesButton