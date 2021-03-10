import React from 'react';
import Header from './components/Header';
import SongOverview from './container/SongOverview';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SongOverview />
    </div>
  );
}

export default App;
