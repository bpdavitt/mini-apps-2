import React from 'react';
import Frame from './Frame.jsx'
import Frame10 from './Frame10.jsx'
import TotalScore from './TotalScore.jsx';

const Scoreboard = (props) => {
  return (
    <div id="scoreboard">
      {props.frames.map((frame, i) => {
        return i < 9 ?
          <Frame frame={frame} key={"frame:" + i} /> :
          <Frame10 frame={frame} key={"frame:" + i} />
      })}
      <TotalScore frames={props.frames} />
    </div>
  )
}

export default Scoreboard;