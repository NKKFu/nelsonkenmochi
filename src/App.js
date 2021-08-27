import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AboutMe } from "./pages/aboutme";
import { Home } from "./pages/home";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/aboutme" exact>
            <AboutMe />
          </Route>
        </Switch>
    </Router>
  );
}