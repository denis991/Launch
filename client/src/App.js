import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainPages from './components/pages/MainPages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPages />
    </div>
  );
}

export default App;
