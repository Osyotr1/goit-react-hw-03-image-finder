import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";

class App extends Component {

  state = {
    value: " ",
  };
  
  updateState = ({ input }) => {
    this.setState({ value: input})
  }

  render() {
    return (
      <div>
        ashot sosi
        <Searchbar onSubmit={this.updateState}/>
      </div>
    )
  };
};

export default App;
