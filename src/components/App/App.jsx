import React, { Component } from "react";
import imageAPI from 'components/API/fetchImage';
import Searchbar from "../Searchbar";
import ImageGallery from "../ImageGallery";
import Button from '../Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal';
import style from './App.module.css';



class App extends Component {

  state = {
    search: "",
    hits: [],
    totalHits: '',
    button: false,
    page: 1,
    loader: false,
    showModal: false,
    largeImageURL: null,
    newSearch: true,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const prevSearch = prevState.search;
    const nextSearch = this.state.search;
    const page = this.state.page;

    if (prevSearch !== nextSearch  || (prevState.page !== page && page !== 1)) {
      this.searchImg();
    } 
  }

  searchImg = () => {
    const nextSearch = this.state.search;
    const page = this.state.page;
      this.setState({ loader: true });
      setTimeout(() => {
        imageAPI
          .fetchImage(nextSearch, page)
          .then(({ data }) => {
            if (data.hits.length === 0) {
              return alert('По вашому запиту не знайдено картинок');
            }
            this.setState(prevState => ({
            hits: [...prevState.hits, ...data.hits],
            totalHits: data.totalHits,
            button: true,
          }))
          }
          )
          .catch(error => this.setState({ error }))
          .finally(this.setState({ loader: false }));
      }, 1000);
  };

  onLoad = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  
  updateSearch = ({ input }) => {
    if ( input === this.state.search ) {
      return;
    }
    this.setState({ 
      search: input,
      hits: [],
      button: false,
      page: 1, 
    })
  }

  toggleModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.setState({ largeImageURL: largeImageURL });
  };


  render() {
    const button = this.state.button;
    const loader = this.state.loader;
    const showModal = this.state.showModal;
    const largeImageURL = this.state.largeImageURL;
    const error = this.state.error;
  
    return (
      <div className={style.container}>
        {loader && <Loader />}
        <Searchbar onSubmit={this.updateSearch}/>
        {error && alert(error.message)}
        <ImageGallery images={this.state.hits} onClick={this.toggleModal}/>
        {button && (
          <div>
            <Button onClick={this.onLoad} />
          </div>
        )}
        {showModal && <Modal onClose={this.toggleModal} src={largeImageURL} />}
      </div>
    )
  };
};

export default App;
