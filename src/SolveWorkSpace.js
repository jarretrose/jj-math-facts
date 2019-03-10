import React, { Component, Fragment } from 'react'
import { withStyles, Typography } from '@material-ui/core'
import styles from './styles'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid';


class SolveWorkSpace extends Component {

  render() {
    const { classes } = this.props

    return (
      <Fragment>
        <Grid container justify='center'>
          <Card className={classes.card}>
            I am the card
          </Card>
        </Grid>
      </Fragment>
    )
  }
}

SolveWorkSpace.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SolveWorkSpace)