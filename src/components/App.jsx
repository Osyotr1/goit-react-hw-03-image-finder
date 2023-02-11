import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";



class App extends Component {

  state = {
    value: " "
  };
  
  
  updateState = ({ input }) => {
    this.setState(prevState => {
      if(prevState.value !== input){
        return ({ value: input})
      }
    })
  }

  render() {
    return (
      <div>
        ashot sosi
        <Searchbar onSubmit={this.updateState}/>
        <ImageGallery fetchValue={this.state.value}/>
      </div>
    )
  };
};

export default App;
