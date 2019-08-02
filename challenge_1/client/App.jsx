import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Components/Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchChange(e) {
    if (e.key === 'Enter') {
      this.handleSearchSubmit()
    } else {
      this.setState({ search: e.target.value })
    }
  }

  handleSearchSubmit(e) {
    console.log('You tried to search for:', this.state.search)
  }

  render() {
    return (
      <>
        <div>Application successfully mounted</div>
        <Search
          handleSearchChange={this.handleSearchChange}
          handleSearchSubmit={this.handleSearchSubmit}>
        </Search>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));