import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css"

import Home from "./shared/Home";
import Task from "./shared/Task";
import AnimatedHOC from "./AnimatedHOC";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/animatedHOC">
            <Task
              title="Animated HOC"
              description="Animated HOC. Componet created based on IntersectionObserver"
              Solution={<AnimatedHOC />}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
