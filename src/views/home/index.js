import React  from "react";
import { Container } from "react-bootstrap";
import Search from "../../components/search";

function Home() {
    return (
        <Container fluid className="layout-section">
            <Search placeholder="cities" searchField="cities" />
        </Container>
    );
}

export default Home;
