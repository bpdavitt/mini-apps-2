import React from 'react';
import Square from './Square.jsx'

const Row = (props) => {
  const {row} = props;
  // console.log(row)
  return (
    <tr>
      {row.map((col, i) => {
        return <Square square={col} row={props.rowNum} col={i} key={`row:${props.rowNum} col:${i}`} clickHandler={props.clickHandler}/>
      })}
    </tr>
  )
}

export default Row;