import { createMuiTheme } from '@material-ui/core/styles'
import { blue, yellow } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: yellow,
  },
  typography: {
    useNextVariants: true,
  },
})

export default theme;


