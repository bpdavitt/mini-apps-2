import React from 'react';

const Square = (props) => {
  // console.log(props)
  let { square } = props;
  return (
    <>
      {square.clicked === false ?
        <td id={props.row + '' + props.col} onClick={(e) => { props.clickHandler(e) }}></td> :
        <td id={props.row + '' + props.col} className="clicked" onClick={(e) => { props.clickHandler(e) }}>{square.value}</td>
      }
    </>
  )
}

export default Square;