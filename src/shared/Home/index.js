import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
      <div>
        <h1>Localhost Academy Tasks:</h1>
        <nav>
          <ul>
            <li>
              <Link to="/animatedHOC">Animated HOC</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default Home;