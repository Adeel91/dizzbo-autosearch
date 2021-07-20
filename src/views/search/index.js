import React, {useContext, useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import { SearchContext } from "../../contexts/Search";
import Search from "../../components/search";
import SearchBooks from "../../components/search/books";
import SearchResults from "../../components/searchResults";
import {cities} from "../../data/cities";
import {books} from "../../data/books";

function SearchList() {
    const [ state, dispatch ] = useContext(SearchContext);

    useEffect(() => {
        dispatch({type: 'DISPLAY_CITIES_AUTO_SUGGESTS', payload: true});
        dispatch({type: 'DISPLAY_BOOKS_AUTO_SUGGESTS', payload: true});
    }, [dispatch]);

    return (
        <Container fluid className="home-container">
            <Row>
                <Col xs={6}>
                    <h5>Search cities</h5>
                    <Search placeholder="cities" searchField="cities" dataSet={cities} />
                    <SearchResults searchField="cities" searchTerm={state.searchCities} searchResults={state.searchCitiesResults} />
                </Col>

                <Col xs={6}>
                    <h5>Search books</h5>
                    <SearchBooks placeholder="books" searchField="books" dataSet={books} />
                    <SearchResults searchField="books" searchTerm={state.searchBooks} searchResults={state.searchBooksResults} />
                </Col>
            </Row>
        </Container>
    );
}

export default SearchList;
