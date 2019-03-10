import React, { Component, Fragment } from 'react'
import { withStyles, Typography } from '@material-ui/core'
import styles from './styles'

class Card extends Component {

  render() {
    return (
      <Fragment>
        <Typography>I am the card.</Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Card);