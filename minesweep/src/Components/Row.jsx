import React from 'react';
import Square from './Square.jsx'

const Row = (props) => {
  const cols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <tr>
      {cols.map(col => {
        return <Square row={props.row} col={col} key={`row:${props.row} col:${col}`}/>
      })}
    </tr>
  )
}

export default Row;