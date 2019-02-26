import React, { Component } from 'react';
import MathCube from './MathCube';

class App extends Component {
  render() {
    return (
      <div>

        {/* HEADER */}
        <header className='header'>

          {/* TITLE AND LOGO */}
          <div className='header-title'>
            <h1>JJ's Math Facts</h1>
          </div>

          {/* NAVIGATION */}
          <div className='header-nav'>
            <ul>
              <li>Home</li>
              <li>See It!</li>
              <li>Flip It!</li>
              <li>Solve It!</li>
              <li>Time Challenge!</li>
            </ul>
          </div>

        </header>

        {/* MAIN PAGE */}
        <main className='main-page'>
          <MathCube />
        </main>

        {/* FOOTER */}
        <footer className='main-footer'>
          <p>A simple app for practicing math facts.</p>
        </footer>

      </div>
    );
  }
}

export default App;
