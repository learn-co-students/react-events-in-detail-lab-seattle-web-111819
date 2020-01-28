// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {

    
    

    coordinates = (event) => {this.props.onReceiveCoordinates([event.clientX, event.clientY])

    }


    render() {
        return (
            <div>
                <button onClick={this.coordinates}>Coordinates</button>
            </div>
        )
    }
}

export default CoordinatesButton
