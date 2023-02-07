import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./Searchbar/Searchbar";

axios.defaults.baseURL = "https://pixabay.com/api/";

class App extends Component {

  state = {
    value: "",
    articles: null,
  };

   componentDidUpdate({prevProps, prevState}) {
     axios.get(`?q=${this.state.value}&page=1&key=28422237-ad1e99f44820901c4fb6da11b&image_type=photo&orientation=horizontal&per_page=12`)
    .then(({data}) => {
      if(prevState.articles !== data.hits) {
        this.setState({ articles: data.hits });
      }
    })
  }
  
  
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
      </div>
    )
  };
};

export default App;
