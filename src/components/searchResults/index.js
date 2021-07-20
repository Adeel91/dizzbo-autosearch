import React from "react";
import CitiesResults from "./cities";
import BooksResults from "./books";
import "./searchResults.css";

const SearchResults = ({ searchField, searchTerm, searchResults }) => {
    return (
        <ul className="search-results">
            {searchTerm.length > 2 && searchResults.map((item, index) => {
                if (searchField === 'cities') {
                    return <CitiesResults key={index} element={item} index={index} />
                } else {
                    return <BooksResults key={index} element={item} index={index} />
                }
            })}
        </ul>
    );
}

export default SearchResults;
