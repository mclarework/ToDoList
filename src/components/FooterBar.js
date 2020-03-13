import React from "react";
import Button from "./Button.js"
import "../css/App.css";

const FooterBar = props => {
  return (
    <div className="footer">
      <h1>Add Task</h1>
      <h2>To Do</h2>
      <input
        className="inputBox"
        type="text"
        onChange={props.input}
        value={props.inputReset}
        placeholder="New Task..."
        onKeyDown={props.return}
      ></input>
      <Button click={props.click} />
    </div>
  );
};

export default FooterBar;
