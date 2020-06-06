import React from "react";
import { Switch, Route, Redirect, useParams } from "react-router-dom";

import "./style.scss";

import Home from "./shared/Home";
import Task from "./shared/Task";

import routes from "./routes";
import RefLinkProvider from "./RefLink/RefLinkProvider";

function App() {
  return (
    <div className="container">
      <RefLinkProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/*">
            <div>404</div>
          </Route> */}
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
      </RefLinkProvider>
    </div>
  );
}

export default App;
