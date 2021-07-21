import React, {useEffect, useState} from "react";
import "./searchResults.css";
import {Card} from "react-bootstrap";
import SkeletonLoading from "../skeleton";
import {getRandomArrayNumber} from "../../utils";
import iconSearch from "../../assets/img/icon-search.gif";
import book from "../../assets/img/book.jpg";

const CitiesResultsTemplate = ({element}) => {
    return (
        <div className="content">
            <div className="picture">
                <Card.Img src="data:image/jpeg;base64,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" />
            </div>
            <div>
                <h6 className="title">{element}</h6>
                <span className="text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod magna aliqu...</span>
            </div>
        </div>
    )
};

const BooksResultsTemplate = ({element}) => {
    return (
        <>
            <Card.Img variant="top" src={book} />
            <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Subtitle>{element.author}</Card.Subtitle>
                <hr />
                <Card.Text>
                    Faucibus vitae aliquet nec sitaliqu amet. Eget dolor risus olor sit amet, consectetur elit, sed do eiusmod sectetur ipsum dolor sit elitfi...
                </Card.Text>
            </Card.Body>
        </>
    );
};

const SearchResults = ({ searchField, searchTerm, searchResults }) => {
    const [ loader, setLoader ] = useState(true);

    useEffect(() => {
        const randomTimeout = getRandomArrayNumber();

        setTimeout(() => {
            setLoader(false)
        }, randomTimeout);
    }, []);

    return (
        <ul className="search-results">
            {!loader && searchTerm[searchField].length > 2 && searchResults[searchField].map((item, index) => {
                return (
                    <div key={index}>
                        <Card>
                            {searchField === 'cities' && <CitiesResultsTemplate element={item} />}
                            {searchField === 'books' && <BooksResultsTemplate element={item} />}
                        </Card>
                    </div>
                );
            })}

            {loader &&
                <SkeletonLoading />
            }

            {!loader && !searchTerm[searchField].length &&
                (
                    <div className="no-records">
                        <img src={iconSearch} alt="Search Icon" />
                    </div>
                )
            }
        </ul>
    );
}

export default SearchResults;
