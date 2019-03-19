import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core'

class Operation extends Component {
  
  render() {
    const { handleOperation } = this.props
    return (
      <Fragment>
        <Typography variant='h5'>Choose An Operation</Typography>
        <Button onClick={() => handleOperation('Addition')}>Addition</Button>
        <Button onClick={() => handleOperation('Subtraction')}>Subtraction</Button>
        <Button onClick={() => handleOperation('Multiplication')}>Multiplication</Button>
        <Button onClick={() => handleOperation('Division')}>Division</Button>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Operation)