import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

import Task from "./shared/Task";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/animatedHOC">Animated HOC</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Task
            path="/animatedHOC"
            title="Animated HOC"
            description="Animated HOC. Componet created based on IntersectionObserver"
            Solution={Home}
          />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}