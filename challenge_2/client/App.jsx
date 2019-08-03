import React from 'react';
import ReactDOM from 'react-dom';
import View from './components/View.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <div>Crypto App Mounted and Ready for Action</div>
        <View/>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));