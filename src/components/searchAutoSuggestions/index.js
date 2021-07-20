import React from "react";
import CitiesSuggestions from "./cities";
import BooksSuggestions from "./books";
import './searchSuggestions.css'

function SearchAutoSuggestions({ suggestionOptions, focusIndex, handleAutoSuggestClick }) {
    if (suggestionOptions === 'cities') {
        return (
            <CitiesSuggestions
                focusIndex={focusIndex}
                handleAutoSuggestClick={handleAutoSuggestClick}
            />
        );
    }
    else if (suggestionOptions === 'books') {
        return (
            <BooksSuggestions
                focusIndex={focusIndex}
                handleAutoSuggestClick={handleAutoSuggestClick}
            />
        );
    }

    return null;
}

export default SearchAutoSuggestions;
