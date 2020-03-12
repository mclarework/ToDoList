import React from "react";
import Operations from "./Operations"
import "../css/App.css";

const TaskList = props => {
  return (
    <div className="dataBar">
      {props.task.map((info, index) => {
        return (
          <div key={index} className="taskArea">
            <Operations
              task={info}
              index={index}
              remove={props.remove}
              isDone={props.isDone}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
