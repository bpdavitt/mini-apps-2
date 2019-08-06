import React from 'react';
import './App.css';
import Gameboard from './Components/Gameboard.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'playing',
      spaces: []
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  getMines() {
    let mines = new Set();
    while (mines.size < 10) {
      let random = Math.floor(Math.random() * 100)
      mines.add(random);
    }
    return mines;
  }

  generateBoard(mines) {
    let spaces = [];
    for (let i = 0; i < 100; i ++) {
      let space = {
        id: i,
        value: mines.has(i) ? 'mine' : 0,
        clicked: false
      }
      spaces.push(space);
    }
    return spaces;
  }

  getValues(spaces) {
    for (let i = 0; i < 100; i++) {
      if (spaces[i].value !== 'mine') {
        if(spaces[i - 10] !== undefined && spaces[i-10].value === 'mine') {
          spaces[i].value ++
        }
        if(spaces[i + 10] !== undefined && spaces[i + 10].value === 'mine') {
          spaces[i].value ++
        }
        if (i % 10 !== 0) {
          if(spaces[i - 11] !== undefined && spaces[i - 11].value === 'mine') {
            spaces[i].value ++
          }
          if(spaces[i - 1] !== undefined && spaces[i - 1].value === 'mine') {
            spaces[i].value ++
          }
          if(spaces[i + 9] !== undefined && spaces[i + 9].value === 'mine') {
            spaces[i].value ++
          }
        }
        if (i % 10 !== 9) {
          if(spaces[i - 9] !== undefined && spaces[i - 9].value === 'mine') {
            spaces[i].value ++
          }
          if(spaces[i + 1] !== undefined && spaces[i + 1].value === 'mine') {
            spaces[i].value ++
          }
          if(spaces[i + 11] !== undefined && spaces[i + 11].value === 'mine') {
            spaces[i].value ++
          }
        }
      }
    }
    return spaces;
  }

  componentDidMount() {
    let mines = this.getMines();
    console.log(mines);
    let spaces = this.generateBoard(mines);
    this.getValues(spaces);
    console.log(spaces)
    let matrix = []
    for (let i = 0; i < 100; i += 10) {
      matrix.push(spaces.slice(i, i + 10));
    }
    console.log(matrix);
    this.setState({spaces: matrix})
  }

  clickHandler(e) {
    console.log(e.target.id)
  }

  render() {
    return (
      <div className="App">
        <div>Minesweeper App mounted</div>
        <Gameboard clickHandler={this.clickHandler} spaces={this.state.spaces}/>
      </div>
    );
  }
}

export default App;
