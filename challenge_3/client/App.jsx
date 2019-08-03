import React from 'react';
import ReactDOM from 'react-dom'
import Scoreboard from './components/Scoreboard.jsx';
import Selector from './components/Selector.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinsLeft: 10,
      pinsHit: 0,
      frame: 1,
      roll: 1,
      twoAgo: null,
      last: null,
      //frameTracker will be an array of frame objects (frame, roll1, roll2, frameScore)
      frameTracker: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.key === 'Enter') {
      this.handleSubmit()
    } else {
      console.log(e.target.value)
      this.setState({ pinsHit: e.target.value })
    }
  }

  handleSubmit(e) {
    console.log('Tried to submit a score')
    if(this.state.pinsHit > this.state.pinsLeft) {
      alert(`Please enter a valid score; must be <= ${this.state.pinsLeft}`)
    } else {
      this.processRoll()
      // Log result, check to see if new frame, etc => helper fx
    }
  }

  processRoll() {
    let curFrame = this.state.frame
    let pinsHit = this.state.pinsHit
    // Pull frameTracker or create one if does not exist
    let curFrameTrack = this.state.frameTracker[curFrame - 1] || {
      frame: curFrame,
      roll1: pinsHit,
      frameScore: pinsHit
    }
    // If not first roll update frameTracker with roll2 and cummulative score
    if (this.state.roll === 2) {
      curFrameTrack.roll2 = pinsHit;
      curFrameTrack.frameScore += pinsHit;
    }
    let twoAgoTracker = {};
    let lastTracker = {};
    // Add score to spares/strikes as appropriate
    if (this.state.twoAgo === 'strike') {
      if (this.state.last === 'strike') {
        twoAgoTracker = this.state.frameTracker[curFrame - 3]
        twoAgoTracker.frameScore += pinsHit;
      } else {
        lastTracker = this.state.frameTracker[curFrame - 2]
      }
    }
    if (this.state.last === 'strike' || this.state.last === 'spare') {
      lastTracker = this.state.frameTracker[curFrame - 2]
    }
    // Have processed previous strike/spare; will move last to twoAgo
    let twoAgo = this.state.last
    let last = pinsHit;
    let pinsRemain = this.state.pinsLeft - this.state.pinsHit;
    // If pinsRemain is zero => strike or spare was bowled
    if (pinsRemain === 0) {
      if (this.state.roll === 1) {
        last = 'strike'
      } else {
        last = 'spare'
      }
    }
    if (pinsRemain === 0 || this.state.roll === 2) {
      this.setState({pinsLeft:10, pinsHit: 0, frame: curFrame + 1, roll: 1, twoAgo: twoAgo, last: last})
    } else {
      this.setState({pinsLeft:pinsRemain, roll: 2, twoAgo: twoAgo, last: last})
    }
  }

  render() {
    return (
      <>
        <div>Lebowski Lanes Open For Business</div>
        <Selector handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}></Selector>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))