import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import LandingPage from "./components/LandingPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <Route exact path="/" component={LandingPage} />
          <div className="container">
            <Route exact path="/AboutMe" component={AboutMe} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Resume" component={Resume} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
