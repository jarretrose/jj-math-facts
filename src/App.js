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

          {/* TITLE AND LOGO */}
          <div className='header'>
            <h1>JJ's Math Facts</h1>
          </div>

          {/* NAVIGATION */}
          <div className='main-nav'>
            <ul>
              <li>Home</li>
              <li>Addition</li>
              <li>Subtraction</li>
              <li>Multiplication</li>
              <li>Division</li>
            </ul>
          </div>
        </header>

        {/* MAIN PAGE */}
        <main className='main-page'>
          <MathCube />
          {/* <Addition /> */}
          {/* <Subtraction />
          <Multiplication />
          <Division /> */}
        </main>

        {/* FOOTER */}
        <footer>
          <p>A simple app for practicing math facts.</p>
        </footer>

      </div>
    );
  }
}

export default App;
