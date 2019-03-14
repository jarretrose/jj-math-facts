import React, { Fragment } from 'react'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const Home = (props) => {
  const { classes } = props

  return (
    <Fragment>
    {
    <div className='cube-wrapper'>
      <div className='cube'>
      <Typography component="h2" variant="h1" className={classes.cubeText} color='default'>
        <div className='face front'>+</div>
        
        <div className='face left'>-</div>
        
        <div className='face back'>x</div>
        
        <div className='face right'>÷</div>
        
        <div className='face top'></div>
        <div className='face bottom'></div>
      </Typography>
      </div>
    </div>
    }
    </Fragment>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)