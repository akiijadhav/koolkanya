import React from 'react'

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <input type="text" className="searchTerm" placeholder="What are you looking for?" />
            <button type="submit" className="searchButton">
                <span className="h">searchIcon</span>
            </button>
        </div>
    )
}

export default SearchBar;
