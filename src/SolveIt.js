import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import Operation from './Operation'
import Fact from './Fact'
import SolveProblem from './SolveProblem'
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

class SolveIt extends Component {
  constructor() {
    super()
    this.state = {
      operation: '',
      fact: '',
      number2: '',
    }
  }

  handleOperation = (o) => this.setState({ operation: o })
  handleFact = (f) => this.setState({ fact: f })
  handleReset = () => this.setState({
    operation: '',
    fact: '',
    number2: ''
   })

  view = (operation, fact) => {
    if (operation === '') return <Operation handleOperation={this.handleOperation} />
    else if (fact === '') return <Fact handleFact={this.handleFact} operation={operation}/>
    else return <Button onClick={() => this.handleReset()}>
        <Typography variant='button'>reset all options</Typography>
      </Button>
  }

  num2 = (operation, fact) => {
    if (operation === 'Subtraction' || operation === 'Division') return fact
    else return 0
  }

  viewProblem = (operation, fact) => {
    const { classes } = this.props
    let number = this.num2(operation, fact)

    if (operation && fact) return <SolveProblem operation={operation} fact={fact} number2={number} />

    else return <CircularProgress className={classes.progress}/>
  }

  render() {
    const { operation, fact, number2 } = this.state
    const { classes } = this.props
    return (
      <Fragment>
        {this.view(operation, fact )}
        <Divider variant='inset' className={classes.dividers} />
        {this.viewProblem(operation, fact, number2)}
      </Fragment>
    )
  }
}

SolveIt.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SolveIt)