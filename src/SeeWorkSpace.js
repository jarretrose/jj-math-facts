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

  // componentDidUpdate(prevProps) {
  //   if (prevProps.category !== this.props.category) {
  //     if (this.props.category === 'Subtraction') this.setState({number1: 20})
  //     else this.setState({number1: 0})
  //   }
  // }

  handleNext = () => {
    const { number1, number2, category } = this.state
    if (number2 >= 10) return null
    else return this.setState({ number2: number2 + 1 })
  }

  handlePrevious = () => {
    const { number1, number2, category } = this.state
    if (number2 <= 0) return null
    this.setState({ number2: number2 - 1 })
  }

  render() {
    const { classes, category, symbol } = this.props
    const { number1, number2 } = this.state

    let c = (num1, num2) => {
      if (category === 'Addition') return num1 + num2
      else if (category === 'Multiplication') return num1 * num2
      else if (category === 'Subtraction') return num1 - num2
      else if (category === 'Division') {
        if (num2 === 0) return '--'
        else return num1 / num2
      }
      else return '?'
    }

    const problem = `${number1} ${symbol} ${number2}`

    const result = `${c(number1, number2)}`

    return (
      <Fragment>
        <Grid container justify='center'>
          <Grid>

            <Grid>
              <Button className={classes.title}>Fact Category: Zero</Button>
            </Grid>

            <Grid>
              <Card className={classes.cardRight}>
                {problem} = {result}
              </Card>
            </Grid>

            <Grid>
              <Button className={classes.title} onClick={() => this.handlePrevious()}>
                <i className="material-icons">navigate_before</i> Previous
              </Button>

              <Button className={classes.title} onClick={() => this.handleNext()}>
                Next <i className="material-icons">navigate_next</i>
              </Button>
            </Grid>

          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

SeeWorkSpace.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SeeWorkSpace)