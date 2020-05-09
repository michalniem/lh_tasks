import React from "react";
import { Route } from "react-router-dom";

function Task({ title, description, path, Solution }) {
  return (
    <Route path={path}>
      <h1>{title}</h1>
      <p>{description}</p>
      {Solution}
    </Route>
  );
}

Task.defaultProps = {
  title: "Default Title",
  description: "Default Description"
}

export default Task;