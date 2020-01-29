// Code DelayedButton Component Here
import React, { Component } from 'react'

// This component takes two props: onDelayedClick (a function), and delay (a number).

class DelayedButton extends Component {

    // STEP 1: 
    handleClick = (event) => {
        // can make the event persistent instead of asynchronous
        event.persist()

        // STEP 2: when clicked, button will pass the click event to the onDelayedClick prop within a setTimeout().
        // setTimeout() should be set to this.props.delay
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
        
    }

    render() {
        return (
            <div>
            {/* STEP 3: add event handler */}
                <button onClick={this.handleClick}>Delayed</button>
            </div>
        )
    }
}

export default DelayedButton