import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import styles from './styles'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import See from './See'
import Solve from './Solve'
import About from './About'

class App extends Component {

  render() {
    const { classes } = this.props
    
    return (
      <Fragment>

        {/* HEADER & NAVIGATION */}
        <header>
          <NavBar />
        </header>

        {/* MAIN PAGE */}
        <section className={classes.mainPage}>
          <Route exact path='/' component={Home} />
          <Route path='/see' component={See} />
          <Route path='/solve' component={Solve} />
          <Route path='/about' component={About} />
        </section>

        {/* FOOTER */}
        <footer className={classes.footer}>
          <Footer />
        </footer>
        
      </Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)