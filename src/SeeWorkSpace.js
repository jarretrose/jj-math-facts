import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

class SeeWorkSpace extends Component {
  constructor() {
    super()
    this.state = {
      number1: 0,
      number2: 0
    }
  }

  handleNext = () => {
    if (this.state.number2 >= 9) return null
    else return this.setState({ number2: this.state.number2 + 1 })
  }

  handlePrevious = () => {
    if (this.state.number2 <= 0) return null
    this.setState({ number2: this.state.number2 - 1 })
  }

  render() {
    const { classes, category, symbol } = this.props
    const { number1, number2 } = this.state

    const firstNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const secondNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    let c = (num1, num2) => {
      if (category === 'Addition') return num1 + num2
      else if (category === 'Multiplication') return num1 * num2
      else if (category === 'Subtraction') return num2 - num1
      else if (category === 'Division') {
        if (num2 === 0) return '--'
        else return num2 / num1
      }
      else return '?'
    }

    const flow = () => {
      if (category === 'Addition' || category === 'Multiplication') {
        return `${firstNumber[number1]} ${symbol} ${secondNumber[number2]}`
      }
      else {
        return `${secondNumber[number2]} ${symbol} ${firstNumber[number1]}`
      }
    }

    return (
      <Fragment>
        <Grid container justify='center'>
          <Grid>

            <Card className={classes.cardRight}>

              {flow()} = {c(firstNumber[number1], secondNumber[number2])}

            </Card>

          </Grid>
        </Grid>

        <Button className={classes.title} onClick={() => this.handlePrevious()}>
          <i className="material-icons">navigate_before</i> Previous
        </Button>

        <Button className={classes.title} onClick={() => this.handleNext()}>
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