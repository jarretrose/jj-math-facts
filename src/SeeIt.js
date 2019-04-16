import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Level from './Level';
import Operation from './Operation';
import Fact from './Fact';
import Speed from './Speed';
import SeeProblem from './SeeProblem';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

class SeeIt extends Component {
  constructor() {
    super()
    this.state = {
      level: '',
      operation: '',
      fact: '',
      number2: '',
      speed: '',
    }
  }

  handleLevel = (l) => this.setState({ level: l })
  handleOperation = (o) => this.setState({ operation: o })
  handleFact = (f) => this.setState({ fact: f })
  handleSpeed = (s) => this.setState({ speed: s })
  handleReset = () => this.setState({
    level: '',
    operation: '',
    fact: '',
    speed: '',
    number2: ''
   })

  view = (level, operation, fact, speed) => {
    if (level === '') return <Level handleLevel={this.handleLevel} />
    else if (operation === '') return <Operation handleOperation={this.handleOperation} />
    else if (fact === '') return <Fact handleFact={this.handleFact} operation={operation}/>
    else if (speed === '') return <Speed handleSpeed={this.handleSpeed} />
    else return <Button onClick={() => this.handleReset()}>
        <Typography variant='button'>reset all options</Typography>
      </Button>
  }

  num2 = (operation, fact) => {
    if (operation === 'Subtraction' || operation === 'Division') return fact
    else return 0
  }

  viewProblem = (level, operation, fact, speed) => {
    const { classes } = this.props
    let number = this.num2(operation, fact)

    if (operation && fact && speed) return <SeeProblem operation={operation} fact={fact} speed={speed} number2={number} />

    else return <CircularProgress className={classes.progress}/>
  }

  render() {
    const { level, operation, fact, speed, number2 } = this.state
    const { classes } = this.props
    return (
      <Fragment>
        {this.view(level, operation, fact, speed)}
        <Divider variant='inset' className={classes.dividers} />
        {this.viewProblem(level, operation, fact, speed, number2)}
      </Fragment>
    )
  }
}

SeeIt.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SeeIt)