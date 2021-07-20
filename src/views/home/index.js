import React  from "react";
import { Container } from "react-bootstrap";
import Search from "../../components/search";
import {cities} from "../../data/cities";

function Home() {
    return (
        <Container fluid className="layout-section">
            <Search placeholder="cities" searchField="cities" dataSet={cities} />
        </Container>
    );
}

export default Home;
