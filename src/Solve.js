import React, { Component, Fragment } from 'react'
import SolveWorkSpace from './SolveWorkSpace'
import Button from '@material-ui/core/Button'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

class Solve extends Component {
  constructor() {
    super()
    this.state = {
      category: 'Choose An Operation',
      symbol: '?'
    }
  }

  handleClick = (category, symbol) => this.setState({category, symbol})

  render() {
    const { classes } = this.props

    return (
      <Fragment>

        <Typography variant='h5' gutterBottom className={classes.title}>
          {this.state.category}!
        </Typography>

        <Button variant='contained' color='secondary' className={classes.button}
          onClick={() => this.handleClick('Addition', '+')}>
          <Typography variant='h5' className={classes.mathButton}>+</Typography></Button>

        <Button variant='contained' color='secondary' className={classes.button}
          onClick={() => this.handleClick('Subtraction', '-')}>
          <Typography variant="h5" className={classes.mathButton}>-</Typography></Button>

        <Button variant='contained' color='secondary' className={classes.button}
          onClick={() => this.handleClick('Multiplication', '×')}>
          <Typography variant="h5" className={classes.mathButton}>×</Typography></Button>
          
        <Button variant='contained' color='secondary' className={classes.button}
          onClick={() => this.handleClick('Division', '÷')}>
          <Typography variant="h5" className={classes.mathButton}>÷</Typography></Button>

        <SolveWorkSpace category={this.state.category} symbol={this.state.symbol} />

      </Fragment>
    )
  }
}

Solve.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Solve)