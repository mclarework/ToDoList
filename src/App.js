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

  update = async () => {
    const data = await fetch(`http://localhost:3010/data`);
    const response = await data.json();
    this.setState({
      todo: response.data
    });
  };

  taskAdder = async () => {
    if (this.state.input !== "") {
      fetch(`http://localhost:3010/add?address=${this.state.input}`);
      this.setState({input:""})
      setTimeout(() => {
        this.update()}, 800
      );
    }
  };

  return = async event => {
    if (event.keyCode === 13 && this.state.input !== "") {
      this.taskAdder();
    }
  };

  remove = event => {
    let temp = this.state.todo;
    let locate = temp[event.target.id]._id;
    let index = temp.findIndex(value => value._id === locate);
    let object = temp[index]._id;
    let data = JSON.stringify(object);
    fetch(`http://localhost:3010/remove?address=${data}`);
    setTimeout(() => {
      this.update()}, 800
    );
  };

  change = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div className="App" onKeyDown={this.Return}>
        <Tasks
          task={this.state.todo}
          return={this.return}
          click={this.taskAdder}
          remove={this.remove}
          input={this.change}
          enter={this.remove}
          inputReset={this.state.input}
        />
      </div>
    );
  }
}

export default App;
