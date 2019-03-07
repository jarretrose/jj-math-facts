import React, { Component, Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom'
import MathCube from './MathCube';
import See from './See'
import Solve from './Solve'
import About from './About'

class App extends Component {

  handleClick = (navButton) => {
    let homeStyle = document.getElementById('home-nav-button').classList
    let seeStyle = document.getElementById('see-nav-button').classList
    let solveStyle = document.getElementById('solve-nav-button').classList
    let aboutStyle = document.getElementById('about-nav-button').classList

    navButton === 'home' ? homeStyle.add('selected-btn') : homeStyle.remove('selected-btn')
    navButton === 'see' ? seeStyle.add('selected-btn') : seeStyle.remove('selected-btn')
    navButton === 'solve' ? solveStyle.add('selected-btn') : solveStyle.remove('selected-btn')
    navButton === 'about' ? aboutStyle.add('selected-btn') : aboutStyle.remove('selected-btn')
  }

  render() {

    return (
      <Fragment>

        {/* HEADER & NAVIGATION */}
        <header className='nav-header'>
          <h1 className='header-title'>JJ's Math Facts</h1>
          <nav>
            <NavLink to='/'>
              <button className='button-nav' id='home-nav-button' onClick={() => this.handleClick('home')}>Home</button>
            </NavLink>

            <NavLink to='/see'>
              <button className='button-nav' id='see-nav-button' onClick={() => this.handleClick('see')}>See It!</button>
            </NavLink>

            <NavLink to='/solve'>
              <button className='button-nav' id='solve-nav-button' onClick={() => this.handleClick('solve')}>Solve It!</button>
            </NavLink>

            <NavLink to='/about'>
              <button className='button-nav' id='about-nav-button' onClick={() => this.handleClick('about')}>About</button>
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
