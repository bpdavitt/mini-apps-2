import React from 'react';

const Square = (props) => {
  console.log(props)
  return (
    <td id={props.row + props.col}>{props.row + '' + props.col}</td>
  )
}

export default Square;