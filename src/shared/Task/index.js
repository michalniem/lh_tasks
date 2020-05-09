import React from "react";

function Task({ title, description, Solution }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {Solution}
    </div>
  );
}

Task.defaultProps = {
  title: "Default Title",
  description: "Default Description"
}

export default Task;