import React, { Component, Fragment } from 'react'
import { withStyles, Typography } from '@material-ui/core'
import styles from './styles'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'

class SolveWorkSpace extends Component {

  render() {
    const { classes } = this.props

    return (
      <Fragment>
        <Typography variant='h5' gutterBottom>{this.props.category.toUpperCase()}</Typography>

        <Card className={classes.card}>
          I am the card
        </Card>
      
      </Fragment>
    )
  }
}

SolveWorkSpace.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SolveWorkSpace)