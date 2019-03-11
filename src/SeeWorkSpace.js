import React, { Component, Fragment } from 'react'
import { withStyles, Typography } from '@material-ui/core'
import styles from './styles'
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

/*
Division
factCategory = 1 through 9

number2 increments
number2 max is 9
number2 min is 1
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
    console.log('COMPONENT DID UPDATE')
    const { category } = this.props

    if (prevProps.category !== category) {
      switch (category) {
        case 'Addition':
          return this.setState({ factCategory: 0, number2: 0 })
        case 'Subtraction':
          return this.setState({ factCategory: 0, number2: 0 })
        case 'Multiplication':
          return this.setState({ factCategory: 0, number2: 0 })
        case 'Division':
          return this.setState({ factCategory: 0, number2: 0 })
        default: 
          return null
      }
    }
  }

  handleFactCategory = (change) => {
    const { factCategory } = this.state
    const { category } = this.props
    const targetNumber = factCategory + change

    if (targetNumber > 10 || targetNumber < 0) return null
    if (category === 'Subtraction') this.setState({ factCategory: targetNumber, number2: targetNumber})
    else this.setState({ factCategory: targetNumber, number2: 0 })
  }

  handleProblemChange = (change) => {
    const { factCategory, number2 } = this.state
    const { category } = this.props

    switch (category) {
      case 'Addition':
      case 'Multiplication':
        if (number2 + change > 9 || number2 + change < 0) return null
        else return this.setState({ number2: number2 + change })
      case 'Subtraction':
        if (number2 + change > factCategory + 9 || number2 + change < factCategory) return null
        else return this.setState({ number2: number2 + change})
      case 'Division': 
        return null
      default: 
        return null
    }
  }

  render() {
    const { classes } = this.props
    const { number2, factCategory } = this.state

    let c = (num1, num2) => {
      const { category } = this.props
      switch(category){
        case 'Addition': 
          return num1 + num2
        case 'Multiplication': 
          return num1 * num2
        case 'Subtraction':
          return num2 - num1
        case 'Division':
          if (num2 === 0) return '--'
          else return num2 / num1
        default: return '?'
      }
    }

    const problem = () => {
      const { category, symbol } = this.props
      const { factCategory, number2} = this.state

      if (category === 'Subtraction') return `${number2} ${symbol} ${factCategory}`
      else return `${factCategory} ${symbol} ${number2}`
    }

    const result = `${c(factCategory, number2)}`

    return (
      <Fragment>

        <Typography variant='h5' className={classes.title}>Fact Category: {factCategory}</Typography>

        <Button className={classes.title} onClick={() => this.handleFactCategory(-1)}>
          <i className="material-icons">navigate_before</i>Previous</Button>

        <Button className={classes.title} onClick={() => this.handleFactCategory(1)}>
          Next<i className="material-icons">navigate_next</i>
        </Button>


        <Grid container justify='center'>
          <Grid item>
            <Card className={classes.card}>
              <Typography variant='h3' className={classes.title}>{problem()} = {result}</Typography>
            </Card>
          </Grid>
        </Grid>


        <Button className={classes.title} onClick={() => this.handleProblemChange(-1)}>
          <i className="material-icons">navigate_before</i>Previous</Button>

        <Button className={classes.title} onClick={() => this.handleProblemChange(1)}>
          Next <i className="material-icons">navigate_next</i></Button>

      </Fragment>
    )
  }
}

SeeWorkSpace.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SeeWorkSpace)