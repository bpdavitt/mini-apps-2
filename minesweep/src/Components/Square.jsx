import React from 'react';

const Square = (props) => {
  // console.log(props)
  let {square} = props;
  return (
    <td id={props.row + '' + props.col} onClick={(e)=> {props.clickHandler(e)}}>{square.value}</td>
  )
}

export default Square;