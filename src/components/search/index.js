import React, {useContext, useEffect, useState} from 'react'
import "./search.css";
import {SearchContext} from "../../contexts/Search";
import {useHistory} from "react-router-dom";
import SearchInput from "../searchInput";
import Button from "../button";
import SearchMessage from "../searchMessage";
import SearchAutoSuggestions from "../searchAutoSuggestions";
import {citiesData} from "../../data/cities";
import {booksData} from "../../data/books";

const Search = (props) => {
    const [ focusIndex, setFocusIndex ] = useState(-1);
    const [ state, dispatch ] = useContext(SearchContext);
    const [ searchResults, setSearchResults ] = useState({});
    const keys = {
        ENTER: 13,
        ARROW_UP: 38,
        ARROW_DOWN: 40
    };

    let searchInputField = state.search[props.searchField];
    let searchInputResults = state.searchResults[props.searchField];

    let history = useHistory();

    useEffect(() => {
        setSearchResults({
            cities: citiesData,
            books: booksData
        });
    }, [state.searchResults]);

    const changeSearchTerm = e => {
        showAutoSuggest();

        const searchTerm = {...state.search, [props.searchField]: e.target.value};

        updateSearchCriteria(searchTerm);
        filterSearchResults(searchTerm);
    };

    const filterSearchResults = (searchTerm) => {
        let filteredResults = searchResults[props.searchField].filter(item => {
            const result = item.title ? item.title : item;
            return result.match(new RegExp(searchTerm[props.searchField], 'gi'));
        });

        const results = {...state.searchResults, [props.searchField]: filteredResults};
        updateFilteredResults(results);
    };

    const updateSearchCriteria = (payloadData) => {
        dispatch({type: 'SEARCH_TEXT', payload: payloadData});
    };

    const updateFilteredResults = (payloadData) => {
        dispatch({type: 'FILTERED_RESULTS', payload: payloadData});
    }

    const hideAutoSuggest = () => {
        const autoSuggestsPayload = {...state.autoSuggests, [props.searchField]: true};

        dispatch({type: 'DISPLAY_AUTO_SUGGESTS', payload: autoSuggestsPayload});
        setFocusIndex(-1);
    };

    const showAutoSuggest = () => {
        const autoSuggestsPayload = {...state.autoSuggests, [props.searchField]: false};

        dispatch({type: 'DISPLAY_AUTO_SUGGESTS', payload: autoSuggestsPayload});
    };

    const navigateSearchList = () => {
        hideAutoSuggest();

        if (searchInputField.length > 2) {
            history.push("/search");
        }
    };

    const handleNavigation = e => {
        if (searchInputField.length > 2) {
            switch (e.keyCode) {
                case keys.ENTER:
                    if (focusIndex > -1) {
                        const searchData = searchInputResults[focusIndex];

                        hideAutoSuggest();
                        const searchTerm = filterSearchData(searchData)
                        filterSearchResults(searchTerm);
                    }

                    navigateSearchList()
                    break;
                case keys.ARROW_UP:
                    if (focusIndex > 0) {
                        setFocusIndex(focusIndex - 1);
                        const searchData = searchInputResults[focusIndex - 1];
                        filterSearchData(searchData)
                    }
                    break;
                case keys.ARROW_DOWN:
                    if (focusIndex < searchInputResults.length - 1) {
                        setFocusIndex(focusIndex + 1);

                        const searchData = searchInputResults[focusIndex + 1];
                        filterSearchData(searchData)
                    }
                    break;
                default:
                    break;
            }
        }
    };

    const filterSearchData = (searchData) => {
        const search = props.searchField === 'cities' ? searchData : searchData.title;
        const searchTerm = {...state.search, [props.searchField]: search};

        updateSearchCriteria(searchTerm);

        return searchTerm;
    };

    const handleAutoSuggestClick = index => {
        const searchData = searchInputResults[index];

        const searchTerm = filterSearchData(searchData);
        filterSearchResults(searchTerm);
    };

    const resetSearchCriteria = index => {
        hideAutoSuggest();

        const resetSearchTerm = {...state.search, [props.searchField]: ""};
        updateSearchCriteria(resetSearchTerm);

        const resetSearchResults = {...state.searchResults, [props.searchField]: []};
        updateFilteredResults(resetSearchResults);
    };

    return (
        <section className="search">
            <div className="search-wrapper">
                <SearchInput
                    placeholder={props.placeholder}
                    searchValue={searchInputField}
                    onChangeHandle={changeSearchTerm}
                    onKeyDownHandle={handleNavigation}
                    onBlurHandle={hideAutoSuggest}
                    onFocusHandle={showAutoSuggest}
                />

                {searchInputField.length > 0 &&
                    <Button icon="x" size={30} btnClass="reset-btn" onClickHandle={resetSearchCriteria}/>
                }

                <Button icon="search" size={18} btnClass="search-btn" onClickHandle={navigateSearchList}/>
            </div>

            <SearchMessage searchTerm={searchInputField} filteredResults={searchInputResults} />

            <SearchAutoSuggestions
                suggestionOptions={props.searchField}
                focusIndex={focusIndex}
                handleAutoSuggestClick={handleAutoSuggestClick}
            />
        </section>
    );
}

export default Search;
