import React, { Component, Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom'
import MathCube from './MathCube';
import See from './See'
import Solve from './Solve'
import About from './About'

class App extends Component {

  render() {

    return (
      <Fragment>

        {/* HEADER & NAVIGATION */}
        <header className='nav-header'>
          <h1 className='header-title'>JJ's Math Facts</h1>
          <nav>
            <NavLink to='/'>
              <button className='button-nav'>Home</button>
            </NavLink>

            <NavLink to='/see'>
              <button className='button-nav'>See It!</button>
            </NavLink>

            <NavLink to='/solve'>
              <button className='button-nav'>Solve It!</button>
            </NavLink>

            <NavLink to='/about'>
              <button className='button-nav'>About</button>
            </NavLink>

          </nav>
        </header>

        {/* MAIN PAGE */}
        <section className='home-page'>
          <Route exact path='/' component={MathCube} />
          <Route path='/see' component={See} />
          <Route path='/solve' component={Solve} />
          <Route path='/about' component={About} />
        </section>

        {/* FOOTER */}
        <footer className='main-footer'>
          <p>A simple app for practicing math facts.</p>
          <p id='credit'>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></p>
        </footer>

      </Fragment>
    );
  }
}

export default App;
