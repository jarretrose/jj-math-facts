import React, { Component, Fragment } from 'react'
import SeeWorkSpace from './SeeWorkSpace';
import Button from '@material-ui/core/Button'
import styles from './styles'
import { withStyles, Typography } from '@material-ui/core';

class See extends Component {
  constructor() {
    super()
    this.state = {
      selectedCategory: 'Please Choose A Category'
    }
  }

  render() {
    const { classes } = this.props
    return (
      <Fragment>

        <Typography variant='h5' gutterBottom>See It!</Typography>

        <Button variant='contained' color='secondary' className={classes.button}><i className="fas fa-plus" /></Button>
        <Button variant='contained' color='secondary' className={classes.button}><i className="fas fa-minus" /></Button>
        <Button variant='contained' color='secondary' className={classes.button}><i className="fas fa-times" /></Button>
        <Button variant='contained' color='secondary' className={classes.button}><i className="fas fa-divide" /></Button>

        <SeeWorkSpace category={this.state.selectedCategory} />

      </Fragment>
    )
  }
}

export default withStyles(styles)(See);