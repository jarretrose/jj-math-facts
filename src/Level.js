import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core'

class Level extends Component {
  
  render() {
    const { handleLevel } = this.props
    return (
      <Fragment>
        <Typography variant='h5'>Choose A Level</Typography>
        <Button onClick={() => handleLevel('Core')}>Core</Button>
        <Button onClick={() => handleLevel('LevelOne')}>Level One</Button>
        <Button onClick={() => handleLevel('LevelTwo')}>Level Two</Button>
        <Button onClick={() => handleLevel('LevelThree')}>Level Three</Button>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Level)