import React from "react";

export default function Navigation(props) {
  return (
    <div className="nav-container">
      <h1>{props.home}</h1>
      <h1>{props.directory}</h1>
    </div>
  );
}
