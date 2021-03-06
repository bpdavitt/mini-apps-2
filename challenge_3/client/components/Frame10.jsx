import React from 'react';

const Frame10 = (props) => {
  let {frame} = props;
  console.log(frame)
  return (
    <div id="frame">
      <div>Frame: {frame.frame}</div>
      <div>Roll 1: {frame.roll1}</div>
      <div>Roll 2: {frame.roll2}</div>
      <div>Roll 3: {frame.roll3}</div>
      <div>Frame Score: {frame.frameScore}</div>
    </div>
  )
}

export default Frame10;