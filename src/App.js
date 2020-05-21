import React from 'react';
import './App.css';
import Header from './Header.js'
import Tasks from './Tasks';

function App() {
  return (
    <div className='wrapper'>
      <div>
        <Header />
        <Tasks />
      </div>
    </div>
  );
}

export default App;