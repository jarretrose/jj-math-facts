import React from 'react'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const Home = () =>
    <Typography>
      this will have a picture sooner or later
    </Typography>

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)