import React, {useContext} from "react";
import './searchSuggestions.css'
import {SearchContext} from "../../contexts/Search";

function SearchAutoSuggestions({ suggestionOptions, focusIndex, handleAutoSuggestClick }) {
    const [ state ] = useContext(SearchContext);

    return (
        <>
            {!state.autoSuggests[suggestionOptions] && state.search[suggestionOptions].length > 2 && state.searchResults[suggestionOptions].length > 0 &&
                <div className="search-suggestions">
                    {state.searchResults[suggestionOptions].map((item, index) => {
                        const result = item.title ? item.title : item;

                        return (
                            <div onMouseDown={() => handleAutoSuggestClick(index)} key={index}
                                 className={focusIndex === index ? 'autosuggest active' : "autosuggest"}>
                                {result}
                            </div>
                        );
                    })}
                </div>
            }
        </>
    );
}

export default SearchAutoSuggestions;
