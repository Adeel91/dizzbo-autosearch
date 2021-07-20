import Actions from "./constants";

export const reducer = (state, action) => {
    switch (action.type) {
        case Actions.SEARCH_CITIES_TEXT:
            return {
                ...state,
                searchCities: action.payload
            }
        case Actions.FILTERED_CITIES_RESULTS:
            return {
                ...state,
                searchCitiesResults: action.payload
            }
        case Actions.DISPLAY_CITIES_AUTO_SUGGESTS:
            return {
                ...state,
                autoSuggestsCities: action.payload
            }
        case Actions.SEARCH_BOOKS_TEXT:
            return {
                ...state,
                searchBooks: action.payload
            }
        case Actions.FILTERED_BOOKS_RESULTS:
            return {
                ...state,
                searchBooksResults: action.payload
            }
        case Actions.DISPLAY_BOOKS_AUTO_SUGGESTS:
            return {
                ...state,
                autoSuggestsBooks: action.payload
            }

        default:
            return state
    }
}

export const initialState = {
    searchCities: "",
    searchCitiesResults: [],
    autoSuggestsCities: false,
    filter: "cities",
    searchBooks: "",
    searchBooksResults: [],
    autoSuggestsBooks: false,
}
