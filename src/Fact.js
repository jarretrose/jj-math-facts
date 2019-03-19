import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core'

class Fact extends Component {
  render() {

    const { handleFact, operation } = this.props
    let facts = [1,2,3,4,5,6,7,8,9,10]

    return (
      <Fragment>
        <Typography variant='h5'>Choose A Fact Category</Typography>
        {
          facts.map(fact => (
            <Button key={fact} onClick={() => handleFact(fact)}>{fact}</Button>
          ))
        }
      </Fragment>
    )
  }
}

export default withStyles(styles)(Fact)