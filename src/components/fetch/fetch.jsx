import React, { Component } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

class FetchProc extends Component {
    state = {
        articles: [],
    };

    async componentDidMount() {
    const response = await axios.get("?q=cat&page=1&key=28422237-ad1e99f44820901c4fb6da11b&image_type=photo&orientation=horizontal&per_page=12");
    this.setState({ articles: response.data.hits });
    }


    render() {
        return (
            console.log(this.state.articles)
        )
    }
}

export default FetchProc;