import { StrictMode as Strict } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App, AuthProvider } from './app';

render(
    <Strict>
        <Router>
            <AuthProvider>
                <App />
            </AuthProvider>
        </Router>
    </Strict>,
    document.getElementById('root')
);
