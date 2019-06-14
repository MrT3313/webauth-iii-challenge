// REACT
  import React from 'react';
  import { Route, NavLink } from 'react-router-dom';

// COMPONENTS
  import Login from './auth/Login';
  import Register from './Register';

function App() {
  return (
    <div className="APP">
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">SignUp</NavLink>
        <NavLink to="/login">Login</NavLink>
      </header>
      <main>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </main>
    </div>
  );
}

export default App;
