import React, { Component, Fragment } from 'react'
import { withStyles, Typography } from '@material-ui/core'
import styles from './styles'
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';

class SeeWorkSpace extends Component {

  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <Typography variant='h5' gutterBottom>{this.props.category.toUpperCase()}</Typography>

        <Grid container justify='center'>
          <Card className={classes.card}>
            I am the card
          </Card>
        </Grid>
      </Fragment>
    )
  }
}

SeeWorkSpace.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SeeWorkSpace)