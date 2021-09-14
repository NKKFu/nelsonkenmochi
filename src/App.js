import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import { AboutMe } from "./pages/aboutme";
import { Home } from "./pages/home";

const Container = styled(Router)`
  // https://coolors.co/13293d-006494-247ba0-1b98e0-e8f1f2
  // #ff4277
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap');

  * { 
    font-family: 'Ubuntu', sans-serif;
    box-sizing: border-box;
  }
`;

export default function App() {
  return (
    <Container>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/aboutme" exact>
            <AboutMe />
          </Route>
        </Switch>
    </Container>
  );
}