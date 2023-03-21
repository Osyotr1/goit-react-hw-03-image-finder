import React, { Component } from "react";
import PropTypes from 'prop-types';
import style from "./Searchbar.module.css";
import { CgSearch } from "@react-icons/all-files/cg/CgSearch";

class Searchbar extends Component {

    state = {
        input: " ",
    }

    handleChange = (e) => {
        const { value } = e.currentTarget;
        this.setState({ input: value });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.input.trim() === ''){
          alert("Введіть пошуковий запит.");
          return;
        }
        this.props.onSubmit(this.state)
        this.setState({input: " "})
    };
    


    render() {
        return (

            <header className={style.Searchbar}>
                <form className={style.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={style.SearchBtn}>
                        <CgSearch style={{ width: 20, height: 20 }}/>
                        <span className={style.SearchBtnLabel}>Search</span>
                    </button>

                    <input
                        className={style.SearchInput}
                        type="text"
                        value={this.state.input}
                        onChange={this.handleChange}
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos" />
                </form>
            </header>

        );
    };
}
export default Searchbar;

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
  };