import "./App.css";
import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }
  onClickBtn() {
    console.log("button has been clicked!");
  }

  render() {
    return (
      <div className="App">
        <h1>React Practice</h1>
        <MyComponent title="my component with prop title" 
        onButtonClicked={this.onClickBtn}/>
        <div className="card">
          <p>test</p>
        </div>
      </div>
    );
  }
}

export default App;
