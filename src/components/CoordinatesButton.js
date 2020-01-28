import React from 'react'

class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return(
      <button className='coordinates-button' onClick={this.handleClick}>Coordinates</button>
    )
  }

}
export default CoordinatesButton
