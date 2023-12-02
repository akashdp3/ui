import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import { ThemeProvider } from 'styled-components';
import { theme } from '@applifyr/ui';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Router>
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </React.StrictMode>
    </Router>
);
