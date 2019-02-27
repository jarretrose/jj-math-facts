import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import MathCube from './MathCube';
import See from './See'
import Solve from './Solve'

class App extends Component {
  render() {
    return (
      <div>

        {/* HEADER & NAVIGATION */}
        <header className='nav-header'>
          <h1 className='header-title'>JJ's Math Facts</h1>
          <nav className='nav-list'>
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/see'>See It!</Link>
            <Link className='nav-link' to='/solve'>Solve it!</Link>
          </nav>
        </header>

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
