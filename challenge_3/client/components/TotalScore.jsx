import React from 'react';

const TotalScore = (props) => {
  let {frames} = props
  console.log(frames)
  let total = 0;
  if (frames.length > 0) {

    total = frames.map(el => el.frameScore).reduce((acc, cur) => {
      return acc + cur;
    })
  }
  console.log(total);
  return (
    <h3>Total Score: {total}</h3>
  )
}

export default TotalScore;