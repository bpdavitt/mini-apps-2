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

  componentDidMount() {
    this.fillFrames();
  }

  fillFrames() {
    let holder = [];
    for (let i = 0; i < 10; i++) {
      let frame = {
        frame: i + 1,
        frameScore: 0
      }
      holder.push(frame);
    }
    this.setState({frameTracker: holder})
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
    if (this.state.pinsHit > this.state.pinsLeft) {
      alert(`Please enter a valid score; must be <= ${this.state.pinsLeft}`)
    } else if (document.getElementById('pin-selector').value === '') {
      alert('Please enter a value');
    }else {
      this.processRoll()
      // Log result, check to see if new frame, etc => helper fx
    }
    document.getElementById('pin-selector').value = '';
  }

  processRoll() {
    let curFrame = this.state.frame
    let pinsHit = Number(this.state.pinsHit)
    let frameTracker = this.state.frameTracker.slice(0);
    console.log(frameTracker)
    // Pull frameTracker or create one if does not exist
    let curFrameTrack = frameTracker[curFrame - 1]
    
    // If not first roll update frameTracker with roll2 and cummulative score
    if (this.state.roll === 1) {
      curFrameTrack.roll1 = pinsHit;
    } else {
      curFrameTrack.roll2 = pinsHit;
    }
    curFrameTrack.frameScore += pinsHit;
    // Pull tracking objects for previous 2 frames
    let twoAgoTracker = frameTracker[curFrame - 3];
    let lastTracker = frameTracker[curFrame - 2]
    // Add score to spares/strikes as appropriate
    if (this.state.twoAgo === 'strike') {
      if (this.state.last === 'strike') {
        twoAgoTracker.frameScore += pinsHit;
      } else {
        lastTracker.frameScore += pinsHit;
      }
    }
    if (this.state.last === 'strike' || this.state.last === 'spare') {
      lastTracker.frameScore += pinsHit;
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
      this.setState({ pinsLeft: 10, pinsHit: 0, frame: curFrame + 1, roll: 1, twoAgo: twoAgo, last: last, frameTracker: frameTracker })
    } else {
      this.setState({ pinsLeft: pinsRemain, roll: 2, twoAgo: twoAgo, last: last, frameTracker: frameTracker })
    }
  }

  render() {
    return (
      <>
        <div>Lebowski Lanes Open For Business</div>
        <Selector handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}></Selector>
        <Scoreboard frames={this.state.frameTracker} />
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))