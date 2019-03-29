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

  keyPress = (event) => {
    if (event.key === 'Enter' || 13) this.handleClose()
  }

  render() {
    const { response, open, classes } = this.props;

    return (
      
      <Dialog onClose={this.handleClose} onKeyPress={this.keyPress} open={open} aria-labelledby="answer-dialog-title" maxWidth='lg' fullWidth={true}>
        <DialogTitle id="answer-dialog-title">
          <Typography align='center' color='primary' className={classes.dialog}>{response}</Typography>
          <Typography align='right' onClick={this.handleClose}>
            <i className="material-icons">close</i>
          </Typography>
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