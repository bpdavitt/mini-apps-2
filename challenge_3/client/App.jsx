import React from 'react';
import ReactDOM from 'react-dom'
import Scoreboard from './components/Scoreboard.jsx';
import Selector from './components/Selector.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinsLeft: 10,
      pinsHit: 0
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
      // Log result, check to see if new frame, etc => helper fx
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