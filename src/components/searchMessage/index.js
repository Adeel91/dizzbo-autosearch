import React from "react";
import "./searchMessages.css";

const NotificationMessage = ({ text }) => (
    <div className="search-results-message">
        <h6>{text}</h6>
        <hr />
    </div>
);

function SearchMessage({ searchTerm, filteredResults }) {
    if (!!searchTerm.length && searchTerm.length < 3) {
        return <NotificationMessage text="Please enter at least 3 or more characters." />
    }

    if (searchTerm.length > 2 && !filteredResults.length) {
        return <NotificationMessage text="No records found for the search criteria entered." />
    }

    return <NotificationMessage text={null} />
}

export default SearchMessage;
