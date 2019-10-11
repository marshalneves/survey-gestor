import React from "react";

import './App.css';

import { Switch, Route } from 'react-router-dom';
import Home from "./pages/home";
import Vote from "./pages/vote";
import Checkout from "./pages/checkout";
import Summary from './pages/summary';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/vote' component={Vote} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/summary' component={Summary} />
      </Switch>
    </div>
  );
}

export default App;
