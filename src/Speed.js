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
        <Button onClick={() => handleSpeed('slow')}>Slow</Button>
        <Button onClick={() => handleSpeed('medium')}>Medium</Button>
        <Button onClick={() => handleSpeed('fast')}>Fast</Button>
        <Button onClick={() => handleSpeed('extraFast')}>Extra Fast</Button>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Speed)