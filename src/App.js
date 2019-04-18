import React from 'react';
import Board from './Components/Board'
import Counter from './Components/Count'
import './App.css';

function App() {
      
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
        <Board />
        <Counter player='X' initialCount={0}/>
        <Counter player='O' initialCount={0}/>
      </div>
    );
  }

export default App;
