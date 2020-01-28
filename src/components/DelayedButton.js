// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

  handleClick = e =>{
    e.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  };

  render() {
    return(
      <button onClick={this.handleClick}>Delayed</button>
    )
  }
}

export default DelayedButton;