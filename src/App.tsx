import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AutomationEditor } from './components/AutomationEditor';
import { NodePalette } from './components/NodePalette';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <NodePalette />
        <AutomationEditor />
      </div>
    </ThemeProvider>
  );
}

export default App;
