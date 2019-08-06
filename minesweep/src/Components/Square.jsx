import React from 'react';

const Square = (props) => {
  // console.log(props)
  let { square } = props;
  return (
    <>
      {square.clicked === false ?
        <td id={props.row + '' + props.col} onClick={(e) => { props.clickHandler(e.target.id) }}></td> :
        <td id={props.row + '' + props.col} className={square.value === 'mine' ? 'mine' : 'clicked'} >{square.value === 0 ? '' : square.value}</td>
      }
    </>
  )
}

export default Square;