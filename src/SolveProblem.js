import React, { Component, Fragment } from 'react'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core'
import { problemBeta, solveBeta } from './utils'
import PropTypes from 'prop-types'
import AnswerDialog from './AnswerDialog'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';


class SolveProblem extends Component {
  constructor() {
    super()
    this.state = {
      problems: [], // the current problem set
      solutions: [], // the solutions to the current problem set
      iterator: 0, // the iterator for the problem and answer array
      answer: '', // user's entered answer
      response: '', // right or wrong via response modal
      open: false, // whether or not the answer dialog is open
    }
  }

  componentDidMount() {
    const { operation, fact, number2 } = this.props
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let nums2 = []
    let problems = []
    let solutions = []

    operation !== 'Division' ?
      nums2 = nums.map(num => num + number2) :
      nums2 = nums.map(num => num * number2)

    nums2.map(num => problems.push(problemBeta(operation, fact, num)))
    nums2.map(num => solutions.push(solveBeta(operation, fact, num)))

    return this.setState({ problems: problems, solutions: solutions })
  }

  handleChange = () => event => {
    event.preventDefault()
    this.setState({
      answer: event.target.value,
    });
  };

  submitAnswer = (event) => {
    event.preventDefault()
    const { answer, solutions, iterator } = this.state

    parseInt(answer) === parseInt(solutions[iterator]) ?
      this.setState({ response: 'Correct!', open: true }) :
      this.setState({ response: 'Try Again!', open: true })
  }

  handleClose = () => {
    const { response, iterator } = this.state
    response === 'Correct!' ?
      this.setState({ open: false, answer: '', response: '', iterator: iterator + 1 })
      :
      this.setState({ open: false, answer: '', response: '' })
  };

  render() {
    const { classes } = this.props
    const { response, answer, iterator, problems } = this.state

    return (

      // check to see if there are any numbers left to work with
      iterator >= 9 ?
        <Fragment>
          <Typography className={classes.listitems}>Great Job!</Typography>
          <Typography className={classes.listitems}>Click Reset To Choose New Options!</Typography>
        </Fragment>

        :

        <Fragment>

          <AnswerDialog open={this.state.open} onClose={this.handleClose} response={response} />

          <Typography className={classes.listitems}>
            {problems[iterator]} = {this.state.answer}
          </Typography>
          <form onSubmit={this.submitAnswer}>
            <TextField
              id="outlined-number"
              name='answer'
              label="answer"
              value={answer}
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
        </Fragment>
    )
  }
}

SolveProblem.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SolveProblem)