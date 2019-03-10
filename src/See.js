import React, { Component, Fragment } from 'react'
import SeeWorkSpace from './SeeWorkSpace'
import Button from '@material-ui/core/Button'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

class See extends Component {
  constructor() {
    super()
    this.state = {
      category: 'Choose A Category',
      symbol: '?'
    }
  }

  handleClick = (category, symbol) => this.setState({ category, symbol })

  render() {
    const { classes } = this.props
    return (
      <Fragment>

        <Typography variant='h6' gutterBottom className={classes.title}>
          See It: {this.state.category}!
        </Typography>

        <Button variant='contained' color='secondary' className={classes.button}
          onClick={() => this.handleClick('Addition', '+')}>
          <i className="fas fa-plus" /></Button>

        <Button variant='contained' color='secondary' className={classes.button}
          onClick={() => this.handleClick('Subtraction', '-')}>
          <i className="fas fa-minus" /></Button>

        <Button variant='contained' color='secondary' className={classes.button}
          onClick={() => this.handleClick('Multiplication', '×')}>
          <i className="fas fa-times" /></Button>

        <Button variant='contained' color='secondary' className={classes.button}
          onClick={() => this.handleClick('Division', '÷')}>
          <i className="fas fa-divide" /></Button>

        <SeeWorkSpace category={this.state.category} symbol={this.state.symbol} />

      </Fragment>
    )
  }
}

See.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(See)