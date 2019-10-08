import React from "react";

import './App.css';

import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import VotePage from "./pages/votepage/votepage.component";
import CheckoutPage from "./pages/checkoutpage/checkoutpage.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/vote' component={VotePage} />
        <Route path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
}

export default App;
