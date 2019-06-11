// import React, {component} from 'react
import React, { Component } from 'react';

export default class Cell extends Component {

constructor(props) {
    // create constructor for class Cell
    super(props)    
    this.state = {
    // declare the state of the constructor.  State will be the color: state.props.values
        color: this.props.value
        }
    }

    // create a listener to update the state to the following color
    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }

    //  render the action in a div.  <div className="cell" 
    //  style: backgroundColor: this.state.color (found in handleClick)
    //  action handleClick activated by click
    render() {
        return (
            <div 
            className='cell'
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}>
            </div>
        )
    }
}
