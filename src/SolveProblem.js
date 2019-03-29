import React, { Component, Fragment } from 'react'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core'
import { problemBeta, solveBeta, generateKey } from './utils'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types'
import AnswerDialog from './AnswerDialog'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

class SolveProblem extends Component {
  constructor() {
    super()
    this.state = {
      operation: '',
      fact: '',
      number2: '',
      answer: '',
      response: '',
      open: false,
      solution: '',
      problem: '',
    }
  }
// operation, fact, number2
  componentDidUpdate(prevProps, prevState) {
    const { operation } = this.props
    const { fact, number2 } = this.state

    if (prevProps.operation !== operation) {
      switch (operation) {
        case 'Addition':
        return this.setState({ fact: 0, number2: 0, solution: 0, visible: true })
        case 'Subtraction':
          return this.setState({ fact: 0, number2: 0, solution: 0, visible: true })
        case 'Multiplication':
          return this.setState({ fact: 0, number2: 0, solution: 0, visible: true })
        case 'Division':
          return this.setState({ fact: 1, number2: 1, solution: 1, visible: true })
        default:
          return this.setState({ fact: 0, number2: 0, solution: '?' })
      }
    }
    if (prevState.number2 !== number2 || prevState.fact !== fact) {
      this.setState({ solution: solveBeta(operation, fact, number2) })
    }
  }

  handleChange = () => event => {
    event.preventDefault()
    this.setState({
      answer: event.target.value,
    });
  };

  submitAnswer = (event) => {
    event.preventDefault()
    parseInt(this.state.answer) === parseInt(this.state.solution) ? 
      this.setState({ response: 'Correct!', open: true }) : 
      this.setState({ response: 'Try Again!', open: true })
  }

  handleClose = () => {
    this.state.response === 'Correct!' ? 
    this.setState({ open: false, answer: '', response: '' }) :
    this.setState({ open: false })
  };

  render() {
    const { operation, fact, number2, classes } = this.props
    const { response } = this.state

    
    console.log('RENDERING ', this.state)
    return (

      <Fragment>

        <AnswerDialog open={this.state.open} onClose={this.handleClose} response={response} />

        <Typography className={classes.listitems}>
          
          </Typography>
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
      </Fragment>
    )
  }
}

SolveProblem.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SolveProblem)