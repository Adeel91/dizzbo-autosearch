import React, {useContext, useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import { SearchContext } from "../../contexts/Search";
import Search from "../../components/search";
import SearchResults from "../../components/searchResults";

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
                    <Search placeholder="cities" searchField="cities" />
                    <SearchResults searchField="cities" searchTerm={state.search} searchResults={state.searchResults} />
                </Col>

                <Col xs={6}>
                    <h5>Search books</h5>
                    <Search placeholder="books" searchField="books" />
                    <SearchResults searchField="books" searchTerm={state.search} searchResults={state.searchResults} />
                </Col>
            </Row>
        </Container>
    );
}

export default SearchList;
