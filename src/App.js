import React, { Component } from 'react';
import MathCube from './MathCube';
import Multiplication from './Multiplication';
import Division from './Division';
import Addition from './Addition';
import Subtraction from './Subtraction';

class App extends Component {
  render() {
    return (
      <div className='page-wrapper'>
        <header>
          <h1>JJ's Math Facts</h1>
          <p>Choose a learning exercise to get started.</p>
        </header>

        <main className='main-page'>
          <MathCube />
          <Addition />
          <Subtraction />
          <Multiplication />
          <Division />
        </main>

        <footer>
          <p>A simple app for practicing math facts.</p>
        </footer>

      </div>
    );
  }
}

export default App;
