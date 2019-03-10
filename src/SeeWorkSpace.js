import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

class SeeWorkSpace extends Component {

  render() {
    const { classes, category, symbol } = this.props

    let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    let c = (num1, num2) => {
      if (category === 'Addition') return num1 + num2
      else if (category === 'Subtraction') return num1 - num2
      else if (category === 'Multiplication') return num1 * num2
      else if (category === 'Division') {
        if (num2 === 0) return '--'
        else return num1 / num2 || 0
      }
      else return '?'
    }

    let i = 0;
    let j = 0;
    
    return (
      <Fragment>
        <Grid container justify='center'>
          <Grid>

            <Card className={classes.cardRight}>
              {a[i]} {symbol} {b[j]} = {c(a[i], a[j])}
            </Card>

          </Grid>
        </Grid>

        <Button className={classes.title}>
          Next <i className="material-icons">navigate_next</i>
        </Button>

      </Fragment>
    )
  }
}

SeeWorkSpace.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SeeWorkSpace)