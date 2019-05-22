import React, { Component } from 'react';
export default class Cell extends Component {
  
  constructor(props) {
  super(props)
  this.state = {
    color:  this.props.value}
  // ...define initial state with a key of 'color' set to the 'value' prop
}
  colorChange = () => {
    //const newColor = this.state.count + 1
    this.setState({
      color: '#333'
    })
  }


  render() {
    return (
      <div className="cell" style={{ backgroundColor: this.state.color }} onClick={this.colorChange } >
        
      </div>
    )
  }

}
