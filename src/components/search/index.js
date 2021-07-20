import React from 'react'
import SearchBooks from "./books";
import SearchCities from "./cities";
import "./search.css";

const Search = (props) => {
    if (props.searchField === 'cities') {
        return <SearchCities dataSet={props.dataSet} placeholder={props.placeholder}/>
    }
    else if (props.searchField === 'books') {
        return <SearchBooks dataSet={props.dataSet} placeholder={props.placeholder}/>
    }

    return null;
}

export default Search;
