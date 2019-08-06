import React from 'react';
import './App.css';
import Gameboard from './Components/Gameboard.jsx'

function App() {
  return (
    <div className="App">
      <div>Minesweeper App mounted</div>
      <Gameboard/>
    </div>
  );
}

export default App;
