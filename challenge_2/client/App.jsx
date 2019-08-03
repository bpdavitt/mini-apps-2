import React from 'react';
import ReactDOM from 'react-dom';
import History from './components/History.jsx';
import axios from 'axios';
import moment from 'moment';
import Currency from './components/Currency.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currency: 'USD'
    }
    this.currencyChange = this.currencyChange.bind(this);
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

  currencyChange(e) {
    console.log(e.target.value)
    this.setState({currency: e.target.value});
    this.getData();
  }

  getData () {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${this.state.currency}`)
      .then(result => {
        console.log(result.data.bpi)
        this.shapeData(result.data.bpi)
      })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
        <div>Crypto App Mounted and Ready for Action</div>
        <Currency currencyChange={this.currencyChange}/>
        <History data={this.state.data} currency={this.state.currency}/>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));