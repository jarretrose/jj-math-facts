import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    width: '100vw',
  },
}

class NavBar extends Component {
  state = { value: 0 }

  handleChange = (event, value) => this.setState({value})

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Tabs value={value} onChange={this.handleChange}>
            
            <Tab label='Home' component={Link} to={'/'} />
            <Tab label='See It!' component={Link} to={'/see'} />
            <Tab label='Solve It!' component={Link} to={'/solve'} />
            <Tab label='About' component={Link} to={'/about'} />

          </Tabs>
        </AppBar>
      </div >
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavBar);