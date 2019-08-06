import React from 'react';
import Row from './Row.jsx'

const Gameboard = (props) => {
  let rows = [0,1,2,3,4,5,6,7,8,9]

  return (
    <table>
      {rows.map(row => {
        return <Row key={"row" + row } row={row}/>
      })}
    </table>
  )
}

export default Gameboard;