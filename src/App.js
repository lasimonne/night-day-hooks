import React, { Component } from "react";
import ToggleButton from "./ToggleButton";
import "./App.css";

class App extends Component {
  state = {
    mode: false,
    theme: ["light", "dark"]
  };
  changeMode = () => {
    this.setState(state => ({
      mode: !state.mode
    }));
    console.log(this.state.mode ? "Day" : "Night");
  };
  render() {
    const { mode, theme } = this.state;
    return (
      <div className={`mode ${mode ? theme[1] : theme[0]}`}>
        <h1>{mode ? "NIGHT" : "DAY"}</h1>
        <ToggleButton changeMode={this.changeMode} />
      </div>
    );
  }
}

export default App;
