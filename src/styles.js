const drawerWidth = 240;

const styles = theme => ({
  app_bar_root: {
    width: '100vw',
  },
  footer_root: {
    width: '100vw',
    position: 'fixed',
    left: 0,
    bottom: 0,
  },
  button: {
    margin: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: { margin: theme.spacing.unit / 2 },
    marginBottom: theme.spacing.unit * 2,
  }
})

export default styles;