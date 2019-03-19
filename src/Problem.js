import React, { Component, Fragment } from 'react'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core'
import { problemBeta, solveBeta } from './utils'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';

class Problem extends Component {

  render() {
    const { operation, fact, speed, number2 } = this.props
    const nums = [0,1,2,3,4,5,6,7,8,9]
    let nums2 = []

    operation !== 'Division' ? 
      nums2 = nums.map(num => num + number2) :
      nums2 = nums.map(num => num * number2)

    console.log(nums2)

    const expression = (operation, fact, n) => `${problemBeta(operation, fact, n)} = ${solveBeta(operation, fact, n)}`
    
    return (
      <Fragment>
        <Grid container
          direction="column"
          alignItems="center"
          justify="center">
        <List>
          <Typography>
          {
            nums2.map(num => (
              <ListItem key={num}>
              {expression(operation, fact, num)}
              </ListItem>
            ))
          }
          </Typography>
        </List>
        </Grid>

      </Fragment>
    )
  }
}

export default withStyles(styles)(Problem)