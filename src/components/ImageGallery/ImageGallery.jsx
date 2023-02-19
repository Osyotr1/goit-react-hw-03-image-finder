import React, { Component } from "react";
import imageAPI from "components/API/fetchImage";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";

class ImageGallery extends Component {
    state = {
        hits: [],
        totalHits: " ",
        button: false
    };

    onLoad = () => {
        
    }

    componentDidUpdate(prevProps, prevState) {
        const prevProp = prevProps.fetchValue;
        const nextProp = this.props.fetchValue

        if(prevProp !== nextProp) {
            imageAPI.fetchImage(nextProp)
            .then(({ data }) => this.setState({ hits: data.hits, totalHits: data.totalHits, button: true }))
            .catch(error => console.log(error))
        }
     }

     render() {
        const images = this.state.hits
        const button = this.state.button
        return(
            <>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
                />
            ))
            }
            { button && <div><Button onClick={this.onLoad}/></div> }
            </>
        )
     }
};

export default ImageGallery;