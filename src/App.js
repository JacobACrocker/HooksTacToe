import React, { Component } from 'react';
import Board from './Components/Board'
import Counter from './Components/Count'
import './App.css';

class App extends Component {

  state = {
    gameBoard: Array(9).fill(''),
    startingPlayer: null,
    currentPlayer: 'X',
  }

  render() {

    console.log(`Using React version ${React.version}`);

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <p>
              Tic-Tac-Toe <br />
              with React Hooks!
            </p>
          </div>
        </header>
        <Board data={this.state}/>
        <Counter player='X' initialCount={0}/>
        <Counter player='O' initialCount={0}/>
      </div>
    );
  }
}

export default App;
