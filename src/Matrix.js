import React, { Component } from 'react';
import Cell from './Cell.js'
// we must import our new Cell.js data

export default class Matrix extends Component {
  
  genRow = (vals) => (
//  generate row function with vals as an arguement
//  iterate through vals assigning val as a Cell value
    vals.map(val => <Cell value={val}/>)

  )
  
  genMatrix = () => (
// next create the Matrix using the generated row
// for each prop value create a row
    this.props.values.map(rowVals =>
      // create a div className, <div className="row">
      // use the genRow function to create the cell inside the div. 
    <div className="row">{this.genRow(rowVals)}</div>)

  )
  // return the genMatrix inside its own div id
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

// create the default prop values for the Matrix
// creating 10 x 10 rows.  10 values with 10 generated rows
Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}



// genRow = (vals) => (
// vals.map(val => <Cell value = {vals} />)
// )

// genMatrix = () => (
// this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}/div>
//)

// render() {
// return (
// <div id="matrix">
// {this.genMatrix()}
// </div>
//)
//}
//}

// <div id="matrix">
//    <div className="row" (defRow) </div>
// </div>

// Matrix.defaultProps = {
//  const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
//  return (new Array(10).fill(defRow))
//})()
//}