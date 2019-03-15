import React, { Fragment } from 'react'
import styles from './styles'
import PropTypes from 'prop-types'
import { withStyles, Typography } from '@material-ui/core'

const About = props => {
  const { classes } = props

  return (
  <Fragment>
    <Typography gutterBottom className={classes.title}>About!</Typography>
  </Fragment>
  )
}

About.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(About)