import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Vote from "./pages/vote";
import Checkout from "./pages/checkout";
import Summary from "./pages/summary";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";

import WithSpinner from "./components/WithSpinner";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/vote/:electionId" component={Vote} />
        <Route path="/checkout/:id" component={Checkout} />
        <Route path="/summary" component={Summary} />
      </Switch>
    </div>
  );
}

export default App;
