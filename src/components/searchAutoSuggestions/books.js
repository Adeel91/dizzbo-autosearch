import React, {useContext} from "react";
import {SearchContext} from "../../contexts/Search";

const BooksSuggestions = ({ focusIndex, handleAutoSuggestClick }) => {
    const [ state ] = useContext(SearchContext);

    return (
        <>
            {!state.autoSuggestsBooks && state.searchBooks.length > 2 && state.searchBooksResults.length > 0 &&
            <div className="search-suggestions">
                {state.searchBooksResults.map((item, index) => (
                    <div onMouseDown={() => handleAutoSuggestClick(index)} key={index} className={focusIndex === index ? 'autosuggest active' : "autosuggest"}>
                        {item.title}
                    </div>
                ))}
            </div>
            }
        </>
    );
};

export default BooksSuggestions;
