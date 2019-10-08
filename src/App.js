import React from "react";
import Header from "./components/Header/Header";
import Votes from "./components/Votes/Votes";
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Votes />
    </div>
  );
}

export default App;
