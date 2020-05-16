import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.scss";

import Home from "./shared/Home";
import Task from "./shared/Task";

import routes from "./routes";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {routes.map(({ path, title, description, Solution }) => (
            <Route path={path} key={`route-${path}`}>
              <Task
                title={title}
                description={description}
                Solution={Solution}
              />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}
