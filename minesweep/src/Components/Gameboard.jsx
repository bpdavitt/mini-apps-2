import React from 'react';
import Row from './Row.jsx'

const Gameboard = (props) => {
  let { spaces } = props;
  console.log(spaces)

  return (
    <table>
      <tbody>
        {spaces.map((row, i) => {
          return <Row key={"row" + i} rowNum={i} row={row} clickHandler={props.clickHandler} />
        })}
      </tbody>
    </table>
  )
}

export default Gameboard;