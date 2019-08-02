import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Components/Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div>Application successfully mounted</div>
        <Search></Search>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));