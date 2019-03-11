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
ADDITION & MULTIPLICATION
factCategory = 0 through 9

number2 increments
number2 max is 9
number2 min is 0
*/


/*
SUBTRACTION
factCategory = 0 through 9

number2 increments
number2 max is 9 + fact
number2 min is the fact


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
    const { number2, factCategory} = this.state

    if (prevProps.category !== category) {

      switch (category) {
        case 'Addition':
          this.setState({ factCategory: 0, number2: 0 })
          break

        case 'Subtraction':
          this.setState({ factCategory: 0, number2: 0 })
          break

        case 'Multiplication':
          this.setState({ factCategory: 0, number2: 0 })
          break

        case 'Division':
          this.setState({ factCategory: 0, number2: 0 })
          break

        default: return null
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
        else this.setState({ number2: number2 + change })
        break;
      case 'Subtraction':
        if (number2 + change > factCategory + 9 || number2 + change < factCategory) return null
        this.setState({ number2: number2 + change})
        break;
      case 'Division': return null
      default: return null
    }
  }

  render() {
    const { classes, category, symbol } = this.props
    const { number2, factCategory } = this.state

    let c = (num1, num2) => {
      const { category } = this.props
      switch(category){
        case 'Addition': 
          return num1 + num2
          break
        case 'Multiplication': 
          return num1 * num2
          break
        case 'Subtraction':
          return num2 - num1
          break
        case 'Division':
          if (num2 === 0) return '--'
          else return num2 / num1
          break
        default: return null
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
          Next <i className="material-icons">navigate_next</i>
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