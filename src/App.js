import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom'
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
          <nav className='nav-list'>
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/see'>See It!</Link>
            <Link className='nav-link' to='/solve'>Solve it!</Link>
            <Link className='nav-link' to='/about'>About!</Link>
          </nav>
        </header>

        {/* MAIN PAGE */}
        <section className='home-page'>
          <Route exact path='/' component={MathCube} />
        </section>
        <section className='content-page'>
          <Route path='/see' component={See} />
          <Route path='/solve' component={Solve} />
          <Route path='/about' component={About} />
        </section>

        {/* FOOTER */}
        <footer className='main-footer'>
          <p>A simple app for practicing math facts.</p>
        </footer>

      </Fragment>
    );
  }
}

export default App;
