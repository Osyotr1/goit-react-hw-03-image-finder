import React, { Component } from "react";
import imageAPI from "components/API/fetchImage";

class ImageGallery extends Component {
    state = {
        hits: [],
    };

    componentDidUpdate(prevProps, prevState) {
        const prevProp = prevProps.fetchValue;
        const nextProp = this.props.fetchValue

        if(prevProp !== nextProp) {
            imageAPI.fetchImage(nextProp)
            .then(({ data }) => this.setState({ hits: data.hits, totalHits: data.totalHits }))
            .catch(error => console.log(error))
        }
     }

     render() {
        return(
            <>
            <p>
                Pictures fetched
            </p>
            <li class="gallery-item">
                <img src="" alt="" />
            </li>
            </>
        )
     }
};

export default ImageGallery;