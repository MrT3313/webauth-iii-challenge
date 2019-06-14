// REACT
  import React from 'react';
  import { Route, NavLink } from 'react-router-dom';

// COMPONENTS
  import Login from './auth/Login';
  import Register from './Register';
  import Users from './Users';

function App() {
  return (
    <div className="APP">
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">SignUp</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/users">Users</NavLink>
      </header>
      <div className='APP CONTENT'>
        {localStorage.getItem('token')}
      </div>
      

      <main>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/Users" component={Users} />
      </main>
    </div>
  );
}

export default App;
