import React, { Component, Fragment } from 'react'
import { withStyles, Typography } from '@material-ui/core'
import styles from './styles'
import Card from './Card'

class SolveWorkSpace extends Component {

  render() {
    return (
      <Fragment>
        <Typography variant='h5' gutterBottom>{this.props.category.toUpperCase()}</Typography>
        <Card />
      </Fragment>
    )
  }
}

export default withStyles(styles)(SolveWorkSpace)