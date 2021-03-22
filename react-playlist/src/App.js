import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import SongOverview from './container/SongOverview';
import './styles/App.css';

// function to display Routing, Header and SongOverview
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {/* If the current URL is /about, this route is rendered */}
          <Route path="/about" component={About}></Route>
          {/* Route with path="/" ALWAYS match the URL because all begin with /. This route must come at end */}
          <Route path="/" component={SongOverview}></Route>
        </Switch>
      </Router>
    </div>

  );
};

export default App;
