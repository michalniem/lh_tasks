import React from "react";
import { Link } from "react-router-dom";

import routes from "../../routes";

function Home() {
  return (
    <div>
      <h1>Localhost Academy Tasks:</h1>
      <nav>
        <ul>
          {routes.map(({ path, title }) => (
            <li key={`link-${path}`}>
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Home;
