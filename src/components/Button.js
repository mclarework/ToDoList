import React from "react"
import "../css/App.css";

const Button = props => {
    return (
      <button className="submit" onClick={props.click}>
        SUBMIT
      </button>
    );
  };

export default Button