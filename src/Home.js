import React from 'react'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const Home = props => {
  const { classes } = props

  return (
  <Typography className={classes.title}>
  {
    <div class='rotating-cube'>
      <div class='single-rb'>
        <div class='front-face'>
          <p>+</p>
        </div>
        <div class='back-face'></div>
        <div class='left-face'></div>
        <div class='right-face'></div>
        <div class='top-face'></div>
        <div class='bottom-face'></div>
      </div>
    </div>
  }
  </Typography>
  )

}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)