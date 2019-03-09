import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom'

import NavBar from './NavBar'
import Footer from './Footer'
import MathCube from './MathCube';
import See from './See'
import Solve from './Solve'
import About from './About'

class App extends Component {

  render() {
    return (
      <Fragment>

        {/* HEADER & NAVIGATION */}
        <header>
          <NavBar />
        </header>

        {/* MAIN PAGE */}
        <section className='main-page'>
          <Route exact path='/' component={MathCube} />
          <Route path='/see' component={See} />
          <Route path='/solve' component={Solve} />
          <Route path='/about' component={About} />
        </section>

        {/* FOOTER */}
        <footer>
          <Footer />
        </footer>
      </Fragment>
    );
  }
}

export default App;
