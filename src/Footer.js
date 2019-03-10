import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles'

import { withStyles } from '@material-ui/core/styles';
import { borders } from '@material-ui/system';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Footer(props) {
  const { classes } = props

  return (
    <div className={classes.footer_root}>
      <AppBar position='static' color="primary">
        <Toolbar>
          <Typography color="inherit">
            A simple app for practicing math facts.
            <br />
            Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);