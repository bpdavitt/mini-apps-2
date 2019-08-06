import React from 'react';
import './App.css';
import Gameboard from './Components/Gameboard.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'playing',
      spaces: [],
    }
    this.totalClicked = 0;
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

  generateBoard() {
    let mines = this.getMines();
    // console.log(mines);
    let spaces = [];
    for (let i = 0; i < 100; i ++) {
      let space = {
        id: i,
        value: mines.has(i) ? 'mine' : 0,
        clicked: false
      }
      spaces.push(space);
    }
    this.getValues(spaces)
    let matrix = []
    for (let i = 0; i < 100; i += 10) {
      matrix.push(spaces.slice(i, i + 10));
    }
    // console.log(matrix);
    this.setState({spaces: matrix})
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
    this.generateBoard();
  }

  clickHandler(id) {
    console.log(id)
    if(id.length === 1) {
      id = '0' + id;
    }
    if(Number(id) < 0 || Number(id) > 99) {
      return;
    }
    if (this.state.status === 'lost') {
      return alert('You already lost, start a new game')
    }
    if (this.state.status === 'won') {
      return alert('You already won, start a new game')
    }
    let row = Number(id[0]);
    let col = Number(id[1])
    let idNum = Number(id)
    // console.log(clicked)
    // console.log(this.state.spaces[clicked[0]][clicked[1]].value)
    console.log(this.state.spaces[row][col])
    let value = this.state.spaces[row][col].value;
    console.log(value);
    let spaces = this.state.spaces;
    let alreadyClicked = this.state.spaces[row][col].clicked;
    if(!alreadyClicked) {
      spaces[row][col].clicked = true;
      if (value === 0) {
        this.clickHandler(idNum - 10 + '')
        this.clickHandler(idNum + 10 + '')
        if (col !== 0) {
          this.clickHandler(idNum - 11 + '')
          this.clickHandler(idNum - 1 + '')
          this.clickHandler(idNum + 9 + '')
        }
        if (col !== 9) {
          this.clickHandler(idNum - 9 + '')
          this.clickHandler(idNum + 1 + '')
          this.clickHandler(idNum + 11 + '')
        }
      }

      if (value === 'mine') {
        alert('Game over, you hit a mine');
        this.setState({status:'lost'})
      }
      this.totalClicked ++;
      this.setState({spaces: spaces});
      if(this.totalClicked === 90) {
        alert('Congrats, you won!');
        this.setState({status:'won'})
      }
    }
      
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
