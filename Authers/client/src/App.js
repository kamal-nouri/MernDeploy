import './App.css';
import CreateAuther from './components/CreateAuther';
import {Router} from '@reach/router';
import AuthersTable from './components/AuthersTable';
import React from 'react';
import UpdateAuther from './components/UpdateAuther';
// import axios from 'axios'
function App() {
  
  return (
    <div className="App">
      <Router>
      <AuthersTable path='/'  />
      <CreateAuther path='/new' />
      <UpdateAuther path='/edit/:id' />
      </Router>
    </div>
  );
}

export default App;
