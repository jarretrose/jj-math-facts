import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import Operation from './Operation'
import Fact from './Fact'
import Speed from './Speed'
import Problem from './Problem'
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

class SeeOrSolve extends Component {
  constructor() {
    super()
    this.state = {
      operation: '',
      fact: '',
      number2: '',
      speed: '',
    }
  }

  handleOperation = (o) => this.setState({ operation: o })
  handleFact = (f) => this.setState({ fact: f })
  handleSpeed = (s) => this.setState({ speed: s })
  handleReset = () => this.setState({
    operation: '',
    fact: '',
    speed: '',
    number2: ''
   })

  view = (operation, fact, speed) => {
    if (operation === '') return <Operation handleOperation={this.handleOperation} />
    else if (fact === '') return <Fact handleFact={this.handleFact} operation={operation}/>
    else if (speed === '') return <Speed handleSpeed={this.handleSpeed} />
    else return <Button onClick={() => this.handleReset()}>
        <Typography variant='h5'>reset all options</Typography>
      </Button>
  }

  num2 = (operation, fact) => {
    if (operation === 'Subtraction' || operation === 'Division') return fact
    else return 0
  }

  viewProblem = (operation, fact, speed) => {
    const { classes } = this.props
    let number = this.num2(operation, fact)

    if (operation && fact && speed) return <Problem operation={operation} fact={fact} speed={speed} number2={number} />

    else return <CircularProgress className={classes.progress}/>
  }

  render() {
    const { operation, fact, speed, number2 } = this.state
    const { classes } = this.props
    return (
      <Fragment>
        {this.view(operation, fact, speed)}
        <Divider variant='inset' className={classes.dividers} />
        {this.viewProblem(operation, fact, speed, number2)}
      </Fragment>
    )
  }
}

SeeOrSolve.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SeeOrSolve)