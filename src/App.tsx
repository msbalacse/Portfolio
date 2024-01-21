import './App.css';
import Home from './Pages/Home.tsx';
import { ThemeProvider } from './contexts/theme.tsx';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
