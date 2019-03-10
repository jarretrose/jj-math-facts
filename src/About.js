import React, { Fragment } from 'react'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core';

const About = () =>
  <Fragment>
    <Typography variant='h5' gutterBottom>About!</Typography>
  </Fragment>

export default withStyles(styles)(About);