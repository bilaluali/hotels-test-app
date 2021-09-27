import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import theme from './modules/material-ui/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography variant="h6">Welcome Lodgify Test App</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
