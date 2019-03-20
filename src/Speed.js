import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core'

class Speed extends Component {
  
  render() {
    const {handleSpeed } = this.props
    return (
      <Fragment>
        <Typography variant='h5'>Choose Viewing Speed</Typography>
        <Button onClick={() => handleSpeed(3000)}>Slow</Button>
        <Button onClick={() => handleSpeed(2000)}>Medium</Button>
        <Button onClick={() => handleSpeed(1000)}>Fast</Button>
        <Button onClick={() => handleSpeed(750)}>Extra Fast</Button>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Speed)