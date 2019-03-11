import React, { Component, Fragment } from 'react'
import { withStyles, FormLabel, Typography } from '@material-ui/core'
import styles from './styles'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

/*
ADDITION
number1 is the fact

number2 increments
number2 max is 9
number2 min is 0
*/


/*
SUBTRACTION
number1 increments
number1 max is 9 + fact
number1 min is the fact

number2 is the fact
*/

class SeeWorkSpace extends Component {
  constructor() {
    super()
    this.state = {
      factCategory: 0,
      number2: 0,
    }
  }

  componentDidUpdate(prevProps) {
    const { category } = this.props
    if (prevProps.category !== category) {

      switch (category) {
        case 'Addition':
          this.setState({ number2: 0 })
          break

        case 'Subtraction': return null
          break

        case 'Multiplication':
          this.setState({ number2: 0 })
          break

        case 'Division': return null
          break

        default: return null
      }
    }
  }

  handleFactCategory = (change) => {
    const { factCategory } = this.state
    if (factCategory + change > 9) return null
    if (factCategory + change < 0) return null
    this.setState({ factCategory: factCategory + change, number2: 0 })
  }

  handleNext = () => {
    const { factCategory, number2 } = this.state
    const { category } = this.props

    switch (category) {

      case 'Addition':
        if (number2 >= 9) return null
        else this.setState({ number2: number2 + 1 })
        break;

      case 'Subtraction': return null

      case 'Multiplication':
        if (number2 >= 9) return null
        else this.setState({ number2: number2 + 1 })
        break;

      case 'Division': return null

      default: return null
    }
  }

  handlePrevious = () => {
    const { number1, number2 } = this.state
    const { category } = this.props

    switch (category) {

      case 'Addition':
        if (number2 <= 0) return null
        else return this.setState({ number2: number2 - 1 })

      case 'Subtraction': return null

      case 'Multiplication': return null

      case 'Division':
        if (number2 <= 0) return null
        else return this.setState({ number2: number2 - 1 })

      default: return null
    }
  }

  render() {
    const { classes, category, symbol } = this.props
    const { number1, number2, factCategory } = this.state

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

    const problem = `${factCategory} ${symbol} ${number2}`

    const result = `${c(factCategory, number2)}`

    return (
      <Fragment>

        <Typography variant='h5' className={classes.title}>Fact Category: {factCategory}</Typography>

        <Button className={classes.title} onClick={() => this.handleFactCategory(-1)}>
          <i className="material-icons">navigate_before</i>Previous</Button>

        <Button className={classes.title} onClick={() => this.handleFactCategory(1)}>
          Next <i className="material-icons">navigate_next</i>
        </Button>


        <Grid container justify='center'>
          <Grid item>
            <Card className={classes.card}>
              <Typography variant='h3' className={classes.title}>{problem} = {result}</Typography>
            </Card>
          </Grid>
        </Grid>


        <Button className={classes.title} onClick={() => this.handlePrevious()}>
          <i className="material-icons">navigate_before</i>Previous</Button>

        <Button className={classes.title} onClick={() => this.handleNext()}>
          Next <i className="material-icons">navigate_next</i></Button>




      </Fragment>
    )
  }
}

SeeWorkSpace.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SeeWorkSpace)