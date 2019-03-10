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
      category: 'Choose A Category'
    }
  }

  handleClick = (category) => this.setState({category})

  render() {
    const { classes } = this.props

    return (
      <Fragment>

        <Typography variant='h6' gutterBottom className={classes.title}>
        Solve It: {this.state.category}
        </Typography>

        <Button variant='contained' color='secondary' className={classes.button}
          onClick={() => this.handleClick('Addition')}>
          <i className="fas fa-plus" /></Button>

        <Button variant='contained' color='secondary' className={classes.button}
          onClick={() => this.handleClick('Subtraction')}>
          <i className="fas fa-minus" /></Button>

        <Button variant='contained' color='secondary' className={classes.button}
          onClick={() => this.handleClick('Multiplication')}>
          <i className="fas fa-times" /></Button>

        <Button variant='contained' color='secondary' className={classes.button}
          onClick={() => this.handleClick('Division')}>
          <i className="fas fa-divide" /></Button>

        <SolveWorkSpace category={this.state.category} />

      </Fragment>
    )
  }
}

Solve.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Solve)