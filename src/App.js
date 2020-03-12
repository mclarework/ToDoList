import React, { Component } from "react";
import Tasks from "./components/Tasks";
import "./css/App.css";

class App extends Component {
  state = {
    todo: [],
    input: ""
  };

  async componentDidMount() {
    const data = await fetch(`http://localhost:3010/data`);
    const response = await data.json();
    this.setState({ todo: response.data });
  }

  async componentDidUpdate() {
    const data = await fetch(`http://localhost:3010/data`);
    const response = await data.json();
    this.setState({ todo: response.data });
  }

  TaskAdder = async () => {
    if (this.state.input !== "") {
      await fetch(`http://localhost:3010/add?address=${this.state.input}`);
      this.setState({ input: "" });
    }
  };

  Return = async event => {
    if (event.keyCode === 13 && this.state.input !== "") {
      await fetch(`http://localhost:3010/add?address=${this.state.input}`);
      this.setState({ input: "" });
    }
  };

  Change = event => {
    this.setState({ input: event.target.value });
  };

  Remove = async event => {
    let temp = this.state.todo;
    let locate = temp[event.target.id]._id;
    let index = temp.findIndex(value => value._id === locate);
    let object = temp[index]._id;
    let data = JSON.stringify(object);
    await fetch(`http://localhost:3010/remove?address=${data}`);
  };

  render() {
    return (
      <div className="App" onKeyDown={this.Return}>
        <Tasks
          task={this.state.todo}
          click={this.TaskAdder}
          remove={this.Remove}
          input={this.Change}
          inputReset={this.state.input}
        />
      </div>
    );
  }
}

export default App;
