import { createMuiTheme } from '@material-ui/core/styles'
import { blue, yellow, green, amber } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: blue,
  },
  typography: {
    useNextVariants: true,
  },
})

export default theme;


