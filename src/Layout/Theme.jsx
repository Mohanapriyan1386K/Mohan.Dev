// theme.js or your theme configuration file
import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  typography: {
    fontFamily: 'MyCustomFont, Arial, sans-serif',
     fontFamily: `'Inter', 'Poppins', 'Roboto', sans-serif`,
    h1: { fontFamily: 'Poppins' },
    h2: { fontFamily: 'Poppins' },
    body1: { fontFamily: 'Inter' },
    button: { fontFamily: 'Inter' },
  },
});

export default Theme;
