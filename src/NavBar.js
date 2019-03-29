import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import styles from './styles'
import compose from 'recompose/compose';
import PropTypes from 'prop-types'
import { withStyles, Typography, Toolbar, Hidden, withWidth } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


class NavBar extends Component {
  state = { 
    value: 0,
    anchorEl: null,
  }

  componentDidMount() {
    let loc = window.location.href.split('/')[3]
    let value = 0
    switch (loc) {
      case 'see': value = 1; break
      case 'solve': value = 2; break
      // case 'beta': value = 3; break
      default: value = 0; break
    }
    this.setState({ value })
  }

  componentDidUpdate(prevProps) {
    let loc = window.location.href.split('/')[3]
    let value = 0

    if (prevProps !== this.props) {
      switch (loc) {
        case 'see': value = 1; break
        case 'solve': value = 2; break
        // case 'beta': value = 3; break
        default: value = 0; break
      }
      this.setState({ value })
    }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleChange = (event, value) => this.setState({ value })

  render() {
    const { classes } = this.props
    const { value, anchorEl } = this.state

    let isActive = (btn) => btn === value ? classes.activeNav : classes.inactiveNav

    return (
      <div className={classes.navbar}>
        <AppBar position='static'>
          <Toolbar>
            <Grid container direction='row' spacing={24}>
              <Grid item xs={8}>
                <Typography variant='h4' color='secondary' className={classes.headerTitle}>JJ'S MATH FACTS</Typography>
              </Grid>
              <Grid item xs={4}>
                <Grid item container justify='flex-end' direction='row'>

                  <Hidden smDown>
                    <Grid item>
                      <Button className={isActive(0)} component={Link} to='/'>Home</Button>
                    </Grid>

                    <Grid item>
                      <Button className={isActive(1)} component={Link} to='/see'>See It</Button>
                    </Grid>

                    <Grid item>
                      <Button className={isActive(2)} component={Link} to='/solve'>Solve It</Button>
                    </Grid>

                    {/* <Grid item>
                      <Button className={isActive(3)} component={Link} to='/beta'>Beta</Button>
                    </Grid> */}
                  </Hidden>

                  <Hidden mdUp>
                    <Grid item>
                      <Typography>
                        <i className="material-icons"
                          aria-owns={anchorEl ? 'nav-menu' : undefined}
                          aria-haspopup="true"
                          onClick={this.handleClick}
                          >menu</i>
                        </Typography>
                    </Grid>
                  </Hidden>

                  <Menu
                    id="nav-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose} component={Link} to='/'>Home</MenuItem>
                    <MenuItem onClick={this.handleClose} component={Link} to='/see'>See It</MenuItem>
                    <MenuItem onClick={this.handleClose} component={Link} to='/solve'>Solve It</MenuItem>
                    {/* <MenuItem onClick={this.handleClose} component={Link} to='/beta'>Beta</MenuItem> */}
                  </Menu>

                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div >
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(NavBar)