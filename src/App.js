import React from 'react';
//import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';
import HomePage from './HomePage';
import DJar from './DJar';
import {BrowserRouter as Router,Switch,Route,Link, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/djar" component={DJar}/>
      </Switch>
    </div>
    </Router>
  </div>
  
  );
}

export default App;
