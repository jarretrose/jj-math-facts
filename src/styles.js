// const drawerWidth = 240

const styles = theme => ({
  title: {
    fontFamily: "'Short Stack', 'Roboto', 'sans serif'"
  },
  tab: {
    fontFamily: "'Short Stack', 'Roboto', 'sans serif'"
  },
  navbar: {
    width: '100vw',
    textAlign: 'center',
  },
  mainPage: {
    margin: '5vmin',
    textAlign: 'center',
  },
  footer: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    borderTop: 1,
    borderColor: 'text.primary',
    borderTopStyle: 'solid',
    flexGrow: 1,
  },
  footBar: {
    alignItems: 'center',
    textAlign: 'center'
  },
  button: {
    fontFamily: "'Short Stack', 'Roboto', 'sans serif'",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
      [theme.breakpoints.down('xs')]: { 
        marginLeft: theme.spacing.unit / 2,
        marginRight: theme.spacing.unit / 2,
      },
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
  mathButton: {
    fontFamily: "'Short Stack', 'Roboto', 'sans serif'",
  },
  card: {
    fontFamily: "'Short Stack', 'Roboto', 'sans serif'",
    fontSize: '8vmin',
    padding: '5vmin',
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    fontFamily: "'Short Stack', 'Roboto', 'sans serif'",
  },
  fab: {
    margin: theme.spacing.unit,
    fontFamily: "'Short Stack', 'Roboto', 'sans serif'",
  },
})

export default styles