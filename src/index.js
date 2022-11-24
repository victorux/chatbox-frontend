import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Styled
import { GlobalStyles } from "./components/styles/Global";
import { theme } from "./components/styles/Theme";
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
