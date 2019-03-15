// // const drawerWidth = 240

const styles = theme => ({
  navbar: {
    width: '100vw',
  },
  activeNav: {
    backgroundColor: 'yellow',
    "&:hover": {
      backgroundColor: 'yellow'
    },
  },
  inactiveNav: {
    backgroundColor: 'default',
  },
  headerTitle: {
    [theme.breakpoints.down('xs')]: { 
      fontSize: '6vw',
    },
  },
  title: {
    [theme.breakpoints.down('xs')]: { 
      fontSize: '6vw',
    },
    marginBottom: theme.spacing.unit,
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
    [theme.breakpoints.down('xs')]: { 
      fontSize: '2.25vw',
    },
  },
  button: {
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
  mathButton: {
  },
  categoryButton: {
    fontSize: '4vw'
  },
  card: {
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
  },
  fab: {
    margin: theme.spacing.unit,
  },
  dialog: {
    fontSize: '6vw',
    [theme.breakpoints.down('xs')]: { 
      fontSize: '6vw',
    },
  marginBottom: theme.spacing.unit,
  },
  cubeText: {
    fontSize: '200px'
  }
})

export default styles