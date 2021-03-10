import React from 'react';
import Header from './components/Header';
import SongOverview from './container/SongOverview';
import './App.css';

// function to returns Header and SongOverview
function App() {
  return (
    <div className="App">
      <Header />
      <SongOverview />
    </div>
  );
}

export default App;
