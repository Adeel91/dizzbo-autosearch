import React, {useContext} from "react";
import {SearchContext} from "../../contexts/Search";

const CitiesSuggestions = ({ focusIndex, handleAutoSuggestClick }) => {
    const [ state ] = useContext(SearchContext);

    return (
        <>
            {!state.autoSuggestsCities && state.searchCities.length > 2 && state.searchCitiesResults.length > 0 &&
                <div className="search-suggestions">
                    {state.searchCitiesResults.map((itemm, index) => (
                        <div onMouseDown={() => handleAutoSuggestClick(index)} key={index} className={focusIndex === index ? 'autosuggest active' : "autosuggest"}>
                            {item}
                        </div>
                    ))}
                </div>
            }
        </>
    );
};

export default CitiesSuggestions;
