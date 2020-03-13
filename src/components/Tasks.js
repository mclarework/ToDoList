import React from "react";
import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";
import TaskList from "./TaskList";
import "../css/App.css";

const Tasks = props => {
  return (
    <div className="main">
      <HeaderBar />
      <FooterBar
        click={props.click}
        input={props.input}
        inputReset={props.inputReset}
        return={props.return}
      />
      <TaskList task={props.task} remove={props.remove} />
    </div>
  );
};

export default Tasks;
