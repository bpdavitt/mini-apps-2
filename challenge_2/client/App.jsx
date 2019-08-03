import React from 'react';
import ReactDOM from 'react-dom';
import History from './components/History.jsx';
import axios from 'axios';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  shapeData (data) {
    let shaped = []
    for (let keys in data) {
      let date = moment(keys, "YYYY-MM-DD")
      let temp = {};
      temp.t = date;
      temp.y = data[keys];
      shaped.push(temp);
    }
    console.log(shaped);
    this.setState({data: shaped})
  }

  componentDidMount() {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json`)
      .then(result => {
        console.log(result.data.bpi)
        this.shapeData(result.data.bpi)
      })
  }

  render() {
    return (
      <>
        <div>Crypto App Mounted and Ready for Action</div>
        <History data={this.state.data}/>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));