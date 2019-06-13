// REACT
  import React from 'react';
  import { Route, NavLink } from 'react-router-dom';

// COMPONENTS
  import Login from './auth/Login';

function App() {
  return (
    <div className="APP">
      <header>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/">Home</NavLink>
      </header>
      <main>
        <Route path="/login" component={Login} />
      </main>
    </div>
  );
}

export default App;
