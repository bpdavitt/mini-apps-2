import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Components/Search.jsx';
import Events from './Components/Events.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      events: []
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
    axios.get(`http://localhost:3000/events?q=${this.state.search}`)
      .then(result => {
        console.log(result.data);
        this.setState({events: result.data})
      })
      .catch(() => {
        console.log('Sorry, you cannot even make a local server work');
      })
  }

  render() {
    return (
      <>
        <div>Application successfully mounted</div>
        <Search
          handleSearchChange={this.handleSearchChange}
          handleSearchSubmit={this.handleSearchSubmit}>
        </Search>
        {this.state.events.length === 0 ? null :
          <Events events={this.state.events}></Events>}
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));