import React from 'react';
import './App.css';
import Game from './Game';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <>
          <h1>Conway's Game of Life</h1>
          <h3>Rules to live and die by:</h3>
          <ul>
            <li>
              Any live cell with fewer than two live neighbours dies, as if
              caused by underpopulation.
            </li>
            <li>
              Any live cell with two or three live neighbours lives on to the
              next generation.
            </li>
            <li>
              Any live cell with more than three live neighbours dies, as if by
              overpopulation.
            </li>{' '}
            <li>
              Any dead cell with exactly three live neighbours becomes a live
              cell, as if by reproduction.
            </li>
          </ul>
          <Game />
        </>
      </header>
    </div>
  );
}

export default App;
