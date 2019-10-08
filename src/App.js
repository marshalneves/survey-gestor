import React from "react";

import './App.css';

import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import VotePage from "./pages/votepage/votepage.component";

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route path='/vote' component={VotePage} />
    </div>
  );
}

export default App;
