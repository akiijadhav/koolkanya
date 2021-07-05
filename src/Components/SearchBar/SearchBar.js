import React from 'react'
//styles
import './SearchBar.scss';

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <input type="text" className="searchTerm" placeholder="What are you looking for?" />
            <button type="submit" className="searchButton">
                <i className="fa fa-search fa-lg" />
            </button>
        </div>
    )
}

export default SearchBar;
