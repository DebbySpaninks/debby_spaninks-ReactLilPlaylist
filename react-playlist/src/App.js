import React from 'react';
import Header from './components/Header';
import SongOverview from './container/SongOverview';
import './styles/App.css';

// function to display Header and SongOverview
function App() {
  return (
    <div className="App">
      <Header />
      <SongOverview />
    </div>
  );
}

export default App;
