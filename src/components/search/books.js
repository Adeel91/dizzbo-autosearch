import React, {useContext, useEffect, useState} from 'react'
import SearchMessage from "../searchMessage";
import SearchAutoSuggestions from "../searchAutoSuggestions";
import {SearchContext} from "../../contexts/Search";
import Button from "../button";
import {useHistory} from "react-router-dom";
import SearchInput from "../searchInput";

const SearchBooks = (props) => {
    const [ focusIndex, setFocusIndex ] = useState(-1);
    const [ state, dispatch ] = useContext(SearchContext);
    const [ searchResults, setSearchResults ] = useState([]);
    const keys = {
        ENTER: 13,
        ARROW_UP: 38,
        ARROW_DOWN: 40
    };

    let history = useHistory();

    useEffect(() => {
        setSearchResults(props.dataSet);
    }, [props.dataSet]);

    const updateSearch = e => {
        showAutoSuggest();

        const searchTerm = e.target.value;
        updateSearchCriteria(searchTerm);

        let filteredBooksResults = searchResults.filter(result => result.title.match(new RegExp(searchTerm, 'gi')));
        updateFilteredResults(filteredBooksResults);
    };

    const hideAutoSuggest = () => {
        dispatch({type: 'DISPLAY_BOOKS_AUTO_SUGGESTS', payload: true});
        setFocusIndex(-1);
    };

    const showAutoSuggest = () => {
        dispatch({type: 'DISPLAY_BOOKS_AUTO_SUGGESTS', payload: false});
    };

    const navigateSearchList = () => {
        hideAutoSuggest();

        if (state.searchBooks.length > 2) {
            history.push("/search");
        }
    };

    const handleNavigation = e => {
        switch (e.keyCode) {
            case keys.ENTER:
                navigateSearchList()
                break;
            case keys.ARROW_UP:
                if (focusIndex > 0) {
                    setFocusIndex(focusIndex - 1);
                    updateSearchCriteria(state.searchBooksResults[focusIndex - 1].title);
                }
                break;
            case keys.ARROW_DOWN:
                if (focusIndex < props.state.searchBooksResults.length - 1) {
                    setFocusIndex(focusIndex + 1);
                    updateSearchCriteria(state.searchBooksResults[focusIndex + 1].title);
                }
                break;
            default:
                break;
        }
    };

    const updateSearchCriteria = (payloadData) => {
        dispatch({type: 'SEARCH_BOOKS_TEXT', payload: payloadData});
    };

    const updateFilteredResults = (payloadData) => {
        dispatch({type: 'FILTERED_BOOKS_RESULTS', payload: payloadData});
    }

    const handleAutoSuggestClick = index => {
        hideAutoSuggest();
        updateSearchCriteria(state.searchBooksResults[index].title);
        updateFilteredResults([state.searchBooksResults[index]]);
    };

    const handleResetSearchCriteria = index => {
        hideAutoSuggest();
        updateSearchCriteria('');
        updateFilteredResults([]);
    };

    return (
        <section className="search">
            <div className="search-wrapper">
                <SearchInput
                    placeholder={props.placeholder}
                    searchValue={state.searchBooks}
                    onChangeHandle={updateSearch}
                    onKeyDownHandle={handleNavigation}
                    onBlurHandle={hideAutoSuggest}
                    onFocusHandle={showAutoSuggest}
                />
                {state.searchBooks.length > 0 &&
                    <Button icon="x" size={30} btnClass="reset-btn" onClickHandle={handleResetSearchCriteria}/>
                }
                <Button icon="search" size={18} btnClass="search-btn" onClickHandle={navigateSearchList}/>
            </div>

            <SearchMessage searchTerm={state.searchBooks} filteredResults={state.searchBooksResults} />

            <SearchAutoSuggestions
                suggestionOptions="books"
                focusIndex={focusIndex}
                handleAutoSuggestClick={handleAutoSuggestClick}
            />
        </section>
    );
}

export default SearchBooks;
