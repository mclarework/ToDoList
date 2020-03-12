import React, { Component } from "react";
import "./css/App.css";

class App extends Component {
  state = {
    todo: [{ task: "Fix this project", isDone: false }],
    input: "",
    list: null
  };

  async componentDidMount() {
    const data = await fetch(`http://localhost:3010/data`);
    const response = await data.json();
    this.setState({ tod: response });
  }

  TaskAdder = () => {
    if (this.state.input !== "") {
      let newTask = { task: this.state.input };
      let temp = this.state.todo;
      temp.push(newTask);
      this.setState({ todo: temp, input: "" });
    }
  };

  return = event => {
    if (event.keyCode === 13 && this.state.input !== "") {
      let newTask = { task: this.state.input };
      let temp = this.state.todo;
      temp.push(newTask);
      this.setState({ todo: temp, input: "" });
    }
    if (event.keyCode === 46) {
      let temp = this.state.todo;
      temp.splice(0, 1);
      this.setState({ todo: temp });
    }
  };

  change = event => {
    this.setState({ input: event.target.value });
  };

  remove = event => {
    let temp = this.state.todo;
    temp.splice(event.target.id, 1);
    this.setState({ todo: temp });
  };

  toggle = () => {
    this.setState({ isDone: !this.state.isDone });
  };

  render() {
    return (
      <div className="App" onKeyDown={this.return}>
        <Tasks
          task={this.state.todo}
          click={this.TaskAdder}
          remove={this.remove}
          input={this.change}
          inputReset={this.state.input}
          isDone={this.state.isDone}
          toggle={this.toggle}
        />
      </div>
    );
  }
}

const Tasks = props => {
  return (
    <div className="main">
      <HeaderBar />
      <FooterBar
        click={props.click}
        input={props.input}
        inputReset={props.inputReset}
        isDone={props.isDone}
        toggle={props.toggle}
      />
      <TaskList task={props.task} remove={props.remove} />
    </div>
  );
};

const HeaderBar = () => {
  return (
    <div className="header">
      <h1>To Do List...</h1>
    </div>
  );
};

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
      ></input>
      <Button click={props.click} isDone={props.isDone} />
    </div>
  );
};

const TaskList = props => {
  return (
    <div className="dataBar">
      {props.task.map((info, index) => {
        return (
          <div key={index} className="taskArea">
            <Task
              task={info.task}
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

const Task = props => {
  return (
    <div className="doAndDelete">
      <h2>{props.task}</h2>
      <Delete index={props.index} remove={props.remove} />
      {props.isDone ? <NotDone /> : <Done />}
    </div>
  );
};

const Button = props => {
  return (
    <button className="submit" onClick={props.click}>
      SUBMIT
    </button>
  );
};

const Delete = props => {
  return (
    <button id={props.index} className="delete" onClick={props.remove}>
      DELETE
    </button>
  );
};

const NotDone = () => {
  return (
    <div className="incomplete">
      <p>Incomplete</p>
    </div>
  );
};

const Done = () => {
  return (
    <div className="complete">
      <p>Complete</p>
    </div>
  );
};

export default App;
