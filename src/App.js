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
    this.setState({ todo: response.data});
  }

  taskAdder = () => {
    if (this.state.input !== "") {
      let temp = this.state.todo
      let newItem = this.state.input
      temp.push({task:newItem})
      fetch(`http://localhost:3010/add?address=${newItem}`);
      this.setState({input:""})
    }
  };

  return = async event => {
    if (event.keyCode === 13 && this.state.input !== "") {
      this.taskAdder();
    }
  };

  remove = event => {
    let temp = this.state.todo;
    let key = temp[event.target.id].task
    temp.splice(event.target.id,1)
    fetch(`http://localhost:3010/remove?address=${key}`);
    this.setState({todo:temp})
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
