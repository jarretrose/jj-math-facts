import React, { Component, Fragment } from 'react'
import styles from './styles'
import { withStyles } from '@material-ui/core'
import { problemBeta, solveBeta, generateKey } from './utils'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types'

class SeeProblem extends Component {

  render() {
    const { operation, fact, speed, number2, classes } = this.props
    const nums = [0,1,2,3,4,5,6,7,8,9]
    let nums2 = []
    let problems = []

    operation !== 'Division' ? 
      nums2 = nums.map(num => num + number2) : 
      nums2 = nums.map(num => num * number2)

    const expression = (operation, fact, n) => 
      `${problemBeta(operation, fact, n)} = ${solveBeta(operation, fact, n)}`
    
    nums2.map(num => problems.push(expression(operation, fact, num)))

    return (
      <Fragment>
        <Grid container
          direction="column"
          alignItems="center"
          justify="center">
        <List disablePadding={true} dense={true}>
          {
            problems.map((prob, idx) => (
              <Fade in style={{ transitionDelay: `${speed * idx}ms`}} key={generateKey(prob)}><ListItem className={classes.listitems}>{prob}</ListItem></Fade>
            ))
          }
        </List>
        </Grid>
      </Fragment>
    )
  }
}

SeeProblem.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SeeProblem)