import React, { Component, Fragment } from 'react'
import { withStyles, Typography } from '@material-ui/core'
import styles from './styles'
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import { problem, solve } from './utils'
import AnswerDialog from './AnswerDialog';

class SolveWorkSpace extends Component {
  constructor() {
    super()
    this.state = {
      factCategory: 0,
      number2: 0,
      answer: '',
      solution: 0,
      open: false,
      response: ''
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

  handleProblemChange = (factCategory, number2, category, change) => {

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

  handleChange = () => event => {
    this.setState({
      answer: parseInt(event.target.value),
    });
  };

  submitAnswer = (event) => {
    event.preventDefault()
    this.state.answer === this.state.solution ? 
      this.setState({ response: 'Correct!', open: true }) : 
      this.setState({ response: 'Try Again!', open: true })
  }

  handleClose = () => {
    this.setState({ open: false, answer: '', response: '' });
  };

  render() {

    const { classes, category, symbol } = this.props
    const { factCategory, number2, response } = this.state

    return (
      <Fragment>

        <AnswerDialog open={this.state.open} onClose={this.handleClose} response={response} />

        <Typography variant='h5' className={classes.title}>Fact Category: {factCategory}'s</Typography>

        <Button className={classes.button} onClick={() => this.handleFactCat(factCategory, category, -1)}>
          <i className="material-icons">navigate_before</i>Previous Fact</Button>

        <Button className={classes.button} onClick={() => this.handleFactCat(factCategory, category, 1)}>
          Next Fact<i className="material-icons">navigate_next</i>
        </Button>

        <Grid container justify='center'>
          <Grid item>
            <Card className={classes.card}>
              <Typography variant='h3' className={classes.title}>{problem(category, symbol, factCategory, number2)} = {this.state.answer} </Typography>

              <form onSubmit={this.submitAnswer}>
                <TextField
                  id="outlined-number"
                  name='answer'
                  label="Answer"
                  value={this.state.answer}
                  onChange={this.handleChange()}
                  type="number"
                  placeholder='0'
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  variant="outlined"
                />
                <Fab variant='extended' color='secondary' type='submit' aria-label='Submit' className={classes.fab}>Submit</Fab>
              </form>

            </Card>
          </Grid>
        </Grid>

        <Button className={classes.button} onClick={() => this.handleProblemChange(factCategory, number2, category, -1)}>
          <i className="material-icons">navigate_before</i>Previous Problem</Button>

        <Button className={classes.button} onClick={() => this.handleProblemChange(factCategory, number2, category, 1)}>
          Next Problem<i className="material-icons">navigate_next</i></Button>

      </Fragment>
    )
  }
}

SolveWorkSpace.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SolveWorkSpace)