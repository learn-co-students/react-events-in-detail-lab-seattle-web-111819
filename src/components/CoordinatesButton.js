// Code CoordinatesButton Component Here
import React, { Component } from 'react'

// This component takes in one prop: onReceiveCoordinates 
// onReceiveCoordinates prop is a function passed down from index.js

class CoordinatesButton extends Component {

    // STEP 1: create an array with two elements: the X and Y coordinates of the mouse. 
    // Find these using the event data by passing it in as an argument for the onReceiveCoordinates prop.
    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
        <div>
        {/* STEP 2: add button and event handler  */}
        <button onClick={this.handleClick}>Coordinates</button>
        </div>
        )
    }

}

export default CoordinatesButton