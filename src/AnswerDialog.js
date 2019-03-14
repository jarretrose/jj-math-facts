import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import styles from './styles'
import { Typography } from '@material-ui/core';

class AnswerDialog extends Component {

  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { response, open, classes } = this.props;

    return (
      <Dialog onClose={this.handleClose} open={open} aria-labelledby="answer-dialog-title" maxWidth='lg' fullWidth={true}>
        <DialogTitle id="answer-dialog-title">
          <Typography align='center' color='primary' className={classes.dialog}>{response}</Typography>
        </DialogTitle>
      </Dialog>
    );
  }
}

AnswerDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default withStyles(styles)(AnswerDialog);