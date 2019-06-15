import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

// - V1 - //
// ReactDOM.render(<App />, document.getElementById('root'));
// - V2 - //
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);


