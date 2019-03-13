import React, { Component, Fragment } from 'react'
import { withStyles, Typography } from '@material-ui/core'
import styles from './styles'
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { problem, solve } from './utils'

class SeeWorkSpace extends Component {
  constructor() {
    super()
    this.state = {
      factCategory: 0,
      number2: 0,
      solution: '?',
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { category } = this.props
    const { factCategory, number2 } = this.state

    if (prevProps.category !== category) {
      switch (category) {
        case 'Addition':
          return this.setState({ factCategory: 0, number2: 0, solution: 0 })
        case 'Subtraction':
          return this.setState({ factCategory: 0, number2: 0, solution: 0 })
        case 'Multiplication':
          return this.setState({ factCategory: 0, number2: 0, solution: 0 })
        case 'Division':
          return this.setState({ factCategory: 1, number2: 1, solution: 1 })
        default:
          return this.setState({ factCategory: 0, number2: 0, solution: '?' })
      }
    }
    if (prevState.number2 !== number2 || prevState.factCategory !== factCategory) {
      this.setState({ solution: solve(factCategory, number2, category) })
    }
  }

  handleFactCat = (factCategory, category, change) => {

    const targetNumber = factCategory + change

    if (targetNumber > 10 || targetNumber < 0) return null

    switch (category) {
      case 'Subtraction':
      case 'Division':
        return this.setState({ factCategory: targetNumber, number2: targetNumber })

      case 'Addition':
      case 'Multiplication':
        return this.setState({ factCategory: targetNumber, number2: 0 })
      default:
        return null
    }
  }

  handleProblemChange = (change) => {
    const { factCategory, number2 } = this.state
    const { category } = this.props

    const maxChange = number2 + change

    switch (category) {
      case 'Addition':
      case 'Multiplication':
        if (maxChange > 9 || maxChange < 0) return null
        else return this.setState({ number2: maxChange })
      case 'Subtraction':
        if (maxChange > factCategory + 9 || maxChange < factCategory) return null
        else return this.setState({ number2: maxChange })
      case 'Division':
        if (maxChange > factCategory * 9 || maxChange < factCategory) return null
        return this.setState({ number2: number2 + (factCategory * change) })
      default:
        return null
    }
  }

  render() {

    const { classes, category, symbol } = this.props
    const { factCategory, solution, number2 } = this.state

    return (
      <Fragment>

        <Typography variant='h5' className={classes.title}>Fact Category: {factCategory}'s</Typography>

        <Button className={classes.button} onClick={() => this.handleFactCat(factCategory, category, -1)}>
          <i className="material-icons">navigate_before</i>Previous Fact</Button>

        <Button className={classes.button} onClick={() => this.handleFactCat(factCategory, category, 1)}>
          Next Fact<i className="material-icons">navigate_next</i></Button>

        <Grid container justify='center'>
          <Grid item>
            <Card className={classes.card}>
              <Typography variant='h3' className={classes.title}>{problem(category, symbol, factCategory, number2)} = {solution}</Typography>
            </Card>
          </Grid>
        </Grid>

        <Button className={classes.button} onClick={() => this.handleProblemChange(-1)}>
          <i className="material-icons">navigate_before</i>Previous Problem</Button>

        <Button className={classes.button} onClick={() => this.handleProblemChange(1)}>
          Next Problem<i className="material-icons">navigate_next</i></Button>

      </Fragment>
    )
  }
}

SeeWorkSpace.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SeeWorkSpace)