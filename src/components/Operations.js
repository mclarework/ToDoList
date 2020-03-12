import React from "react";
import Delete from "./Delete.js"
import "../css/App.css";

const Operations = props => {
  return (
    <div className="doAndDelete">
      <h2>{props.task.task}</h2>
      <Delete index={props.index} remove={props.remove} />
    </div>
  );
};

export default Operations;
