import { Router } from '@reach/router';
import React from 'react';
import './App.css';
import EditAuthor from './views/EditAuthor';
import MainPage from './views/MainPage';
import NewAuthor from './views/NewAuhtor';

function App() {
  return (
    <div className="App">
      <Router>
        <MainPage path='/'/>
        <NewAuthor path='/new'/>        
        <EditAuthor path='/edit/:id'/>
      </Router>
    </div>
  );
}

export default App;
