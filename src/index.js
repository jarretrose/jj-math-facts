import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'

import App from './App';

const root = document.getElementById('root')

render(
  <MuiThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </MuiThemeProvider>
  , root
);
