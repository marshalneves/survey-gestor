import React from "react";

import './App.css';

import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import VotePage from "./pages/vote/vote.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SummaryPage from './pages/summary/summary.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/vote' component={VotePage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route path='/summary' component={SummaryPage} />
      </Switch>
    </div>
  );
}

export default App;
