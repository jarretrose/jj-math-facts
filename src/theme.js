import { createMuiTheme } from '@material-ui/core/styles'
import { blue, yellow, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: yellow,
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Short Stack", "Roboto", sans-serif',
  },
  background: {
    paper: '#fff',
    default: "000000"
  },
})

export default theme