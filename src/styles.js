// // const drawerWidth = 240

const styles = theme => ({
  title: {
    fontFamily: "'Short Stack', 'Roboto', 'sans serif'",
    [theme.breakpoints.down('xs')]: { 
      fontSize: '6vw',
    },
    marginBottom: theme.spacing.unit,
  },
  headerTitle: {
    fontFamily: "'Short Stack', 'Roboto', 'sans serif'",
    [theme.breakpoints.down('xs')]: { 
      fontSize: '6vw',
    },
  },
  tab: {
    fontFamily: "'Short Stack', 'Roboto', 'sans serif'"
  },
  navbar: {
    width: '100vw',
    textAlign: 'center',
  },
  mainPage: {
    margin: '3vh 3vw',
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
    textAlign: 'center',
  },
  footText: {
    fontFamily: "'Short Stack', 'Roboto', 'sans serif'",
    [theme.breakpoints.down('xs')]: { 
      fontSize: '3vw',
    },
  },
  button: {
    fontFamily: "'Short Stack', 'Roboto', 'sans serif'",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    [theme.breakpoints.down('xs')]: { 
      marginLeft: theme.spacing.unit / 2,
      marginRight: theme.spacing.unit / 2,
      marginBottom: theme.spacing.unit,
      fontSize: '3vw'
    },
  },
  categoryButton: {
    fontSize: '4vw'
  },
  card: {
    fontFamily: "'Short Stack', 'Roboto', 'sans serif'",
    fontSize: '6vw',
    width: '33vw',
    padding: '3vh 0',
    [theme.breakpoints.down('xs')]: { 
      width: '80vw',
    },
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