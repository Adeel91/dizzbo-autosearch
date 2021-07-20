import React, {useContext, useEffect, useState} from 'react'
import SearchMessage from "../searchMessage";
import SearchAutoSuggestions from "../searchAutoSuggestions";
import {SearchContext} from "../../contexts/Search";
import Button from "../button";
import {useHistory} from "react-router-dom";
import SearchInput from "../searchInput";

const SearchCities = (props) => {
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
        updateSearchCriteria(e.target.value);

        let filteredCitiesResults = searchResults.filter(result => result.match(new RegExp(searchTerm, 'gi')));
        updateFilteredResults(filteredCitiesResults);
    };

    const hideAutoSuggest = () => {
        dispatch({type: 'DISPLAY_CITIES_AUTO_SUGGESTS', payload: true});
        setFocusIndex(-1);
    };

    const showAutoSuggest = () => {
        dispatch({type: 'DISPLAY_CITIES_AUTO_SUGGESTS', payload: false});
    };

    const navigateSearchList = () => {
        hideAutoSuggest();

        if (state.searchCities.length > 2) {
            history.push("/search");
        }
    };

    const handleNavigation = e => {
        switch (e.keyCode) {
            case keys.ENTER:
                if (focusIndex > -1) {
                    updateFilteredResults([state.searchCitiesResults[focusIndex]]);
                }

                navigateSearchList()
                break;
            case keys.ARROW_UP:
                if (focusIndex > 0) {
                    setFocusIndex(focusIndex - 1);
                    updateSearchCriteria(state.searchCitiesResults[focusIndex - 1]);
                }
                break;
            case keys.ARROW_DOWN:
                if (focusIndex < state.searchCitiesResults.length - 1) {
                    setFocusIndex(focusIndex + 1);
                    updateSearchCriteria(state.searchCitiesResults[focusIndex + 1]);
                }
                break;
            default:
                break;
        }
    };

    const updateSearchCriteria = (payloadData) => {
        dispatch({type: 'SEARCH_CITIES_TEXT', payload: payloadData});
    };

    const updateFilteredResults = (payloadData) => {
        dispatch({type: 'FILTERED_CITIES_RESULTS', payload: payloadData});
    }

    const handleAutoSuggestClick = index => {
        hideAutoSuggest();
        updateSearchCriteria(state.searchCitiesResults[index]);
        updateFilteredResults([state.searchCitiesResults[index]]);
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
                    searchValue={state.searchCities}
                    onChangeHandle={updateSearch}
                    onKeyDownHandle={handleNavigation}
                    onBlurHandle={hideAutoSuggest}
                    onFocusHandle={showAutoSuggest}
                />
                {state.searchCities.length > 0 &&
                    <Button icon="x" size={30} btnClass="reset-btn" onClickHandle={handleResetSearchCriteria}/>
                }
                <Button icon="search" size={18} btnClass="search-btn" onClickHandle={navigateSearchList}/>
            </div>

            <SearchMessage searchTerm={state.searchCities} filteredResults={state.searchCitiesResults} />

            <SearchAutoSuggestions
                suggestionOptions="cities"
                focusIndex={focusIndex}
                handleAutoSuggestClick={handleAutoSuggestClick}
            />
        </section>
    );
}

export default SearchCities;
