import React from 'react';
import ReactDOM from 'react-dom'
import Scoreboard from './components/Scoreboard.jsx';
import Selector from './components/Selector.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <div>Lebowski Lanes Open For Business</div>
        <Selector></Selector>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))