import React from "react";
import "../css/App.css";

const Delete = props => {
  return (
    <button id={props.index} className="delete" onClick={props.remove}>
      DELETE
    </button>
  );
};

export default Delete;
