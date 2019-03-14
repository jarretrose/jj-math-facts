import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './styles'

import PropTypes from 'prop-types'
import { withStyles, Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid';


class NavBar extends Component {
  state = { value: 0 }

  handleChange = (event, value) => this.setState({ value })

  componentDidMount () {
    let loc = window.location.href.split('/')[3]
    let value = 0
    switch(loc) {
      case 'see': value = 1; break
      case 'solve': value = 2; break
      case 'about': value = 3; break
      default: value = 0; break
    }
    this.setState({ value })
  }

  componentDidUpdate (prevProps) {
    let loc = window.location.href.split('/')[3]
    let value = 0

    if (prevProps !== this.props) {
      switch(loc) {
        case 'see': value = 1; break
        case 'solve': value = 2; break
        case 'about': value = 3; break
        default: value = 0; break
      }
      this.setState({ value })
    }
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.navbar}>
        <AppBar position='static'>
          <Typography variant='h5' color='secondary' className={classes.headerTitle}>JJ'S MATH FACTS</Typography>
          <Grid container justify='center'>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label='Home' value={0} className={classes.tab} component={Link} to={'/'} />
              <Tab label='See It!' value={1} className={classes.tab} component={Link} to={'/see'} />
              <Tab label='Solve It!' value={2} className={classes.tab} component={Link} to={'/solve'} />
              {/* <Tab label='About!' value={3} className={classes.tab} component={Link} to={'/about'} /> */}
            </Tabs>
          </Grid>
        </AppBar>
      </div >
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavBar)