import React, { Component } from "react";
import {Alert} from 'antd'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Alert message="success text" type="info"></Alert>
      </div>
    );
  }
}

export default App;
