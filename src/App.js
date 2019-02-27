import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MathCube from './MathCube';
import See from './See'
import Solve from './Solve'

class App extends Component {
  render() {
    return (
      <div>

        {/* HEADER */}
        <header className='header'>
          <div className='header-title'>
            <h1>JJ's Math Facts</h1>
          </div>
        </header>

          {/* NAVIGATION */}
          <nav className='navbar'>
            <ul className='nav-links'>
              <li className='nav-item'><Link to='/'>Home</Link></li>
              <li className='nav-item'><Link to='/see'>See It!</Link></li>
              <li className='nav-item'><Link to='/solve'>Solve it!</Link></li>
            </ul>
          </nav>

        {/* MAIN PAGE */}
        <main className='main-page'>
          <Route exact path='/' component={MathCube} />
          <Route path='/see' component={See} />
          <Route path='/solve' component={Solve} />
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
